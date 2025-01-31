import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transferMoney, externalTransfer, reset } from '../../store/transfer/transferSlice';
import { Wallet, ArrowRight, User, AlertCircle } from 'lucide-react';
import "./transfer.css";
import transferService from '../../store/transfer/transferService';
import { popularBanks } from '../../utils/banksList';
import TransferStatusModal from '../../components/TransferStatusModal';

export default function Transfer() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isSuccess, isError, message } = useSelector((state) => state.transfer);

  const [transferType, setTransferType] = useState('internal');
  const [walletBalance, setWalletBalance] = useState(0);
  const [verifiedAccount, setVerifiedAccount] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [transferData, setTransferData] = useState({
    receiverAccountNumber: '',
    amount: '',
    description: '',
    bankName: '',
    accountName: '',
  });
  const [error, setError] = useState('');
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [transferStatus, setTransferStatus] = useState(null);

  useEffect(() => {
    fetchWalletBalance();
  }, []);

  useEffect(() => {
    if (isError) {
      setError(message);
    }

    if (isSuccess) {
      setTransferData({
        receiverAccountNumber: '',
        amount: '',
        description: '',
        bankName: '',
        accountName: '',
      });
      setVerifiedAccount(null);
    }

    if (isSuccess) {
      setTransferStatus({
        status: 'success',
        message: transferType === 'external' 
          ? 'Your external transfer has been initiated. Please note that it may take 3-7 business days to complete the transfer to an external bank account.'
          : 'Your transfer has been completed successfully.',
        subtitle: transferType === 'external' 
          ? '3-7 Business Days Processing Time'
          : null
      });
      setShowStatusModal(true);
    } else if (isError) {
      setTransferStatus({
        status: 'error',
        message: message || 'An error occurred during the transfer.'
      });
      setShowStatusModal(true);
    }

    return () => {
      dispatch(reset());
    };
  }, [isSuccess, isError, message, dispatch, transferType]);

  const fetchWalletBalance = async () => {
    try {
      const response = await transferService.getWalletBalance(user.token);
      setWalletBalance(response.data.balance);
    } catch (error) {
      setError('Error fetching wallet balance');
    }
  };

  const verifyAccount = async (accountNumber) => {
    if (accountNumber.length < 11) {
      setVerifiedAccount(null);
      return;
    }
    
    setIsVerifying(true);
    try {
      const response = await transferService.verifyAccount(accountNumber, user.token);
      if (response.success) {
        setVerifiedAccount(response.data);
        console.log(response)
        setError('');
      } else {
        setVerifiedAccount(null);
        console.log(response.message)
        setError('Account not found');
      }
    } catch (error) {
      setVerifiedAccount(null);
      setError('Account not found');
    } finally {
      setIsVerifying(false);
    }
  };

  const calculateTransferFee = (amount) => {
    const fee = amount * 0.002; // 0.002% transfer fee
    return {
      fee,
      finalAmount: amount - fee // Deduct fee from transfer amount
    };
  };

  const handleAccountNumberChange = (e) => {
    const accountNumber = e.target.value;
    setTransferData({
      ...transferData,
      receiverAccountNumber: accountNumber
    });
    
    // Only verify for internal transfers
    if (transferType === 'internal') {
      // Debounce the verification to avoid too many requests
      if (accountNumber.length >= 12) {
        verifyAccount(accountNumber);
      } else {
        setVerifiedAccount(null);
      }
    }
  };

  const isFormValid = () => {
    if (transferType === 'internal') {
      return (
        transferData.receiverAccountNumber && 
        transferData.amount && 
        verifiedAccount && 
        parseFloat(transferData.amount) <= walletBalance
      );
    } else {
      return (
        transferData.bankName &&
        transferData.receiverAccountNumber &&
        transferData.amount &&
        parseFloat(transferData.amount) <= walletBalance
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const amount = parseFloat(transferData.amount);
    const { fee, finalAmount } = calculateTransferFee(amount);

    if (!amount || amount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    if (amount > walletBalance) {
      setError('Insufficient balance');
      return;
    }

    if (transferType === 'internal') {
      dispatch(transferMoney({
        receiverAccountNumber: transferData.receiverAccountNumber,
        amount: finalAmount,
        description: transferData.description
      }));
    } else {
      // For external transfers, show processing status immediately
      setTransferStatus({
        status: 'pending',
        message: 'Your external transfer request is being processed. Please note that it may take 3-7 business days to complete the transfer.',
        subtitle: '3-7 Business Days Processing Time'
      });
      setShowStatusModal(true);

      dispatch(externalTransfer({
        bankName: transferData.bankName,
        accountNumber: transferData.receiverAccountNumber,
        accountName: transferData.accountName,
        amount: finalAmount,
        description: transferData.description
      }));
    }
  };

  const handleCloseModal = () => {
    setShowStatusModal(false);
    setTransferStatus(null);
    if (isSuccess) {
      // Reset form
      setTransferData({
        receiverAccountNumber: '',
        amount: '',
        description: '',
        bankName: '',
        accountName: '',
      });
      setVerifiedAccount(null);
    }
    dispatch(reset());
  };

  return (
    <div className="transfer-container">
      <div className="transfer-card">
        <div className="wallet-balance">
          <Wallet className="wallet-icon" />
          <div className="balance-info">
            <span className="balance-label">Available Balance</span>
            <span className="balance-amount">${walletBalance.toLocaleString()}</span>
          </div>
        </div>

        <h2 className="transfer-title">Transfer Money</h2>
        
        {error && (
          <div className="error-message">
            <AlertCircle size={20} />
            {error}
          </div>
        )}
        {isSuccess && <div className="success-message">{message}</div>}
        
        <div className="transfer-type-selector">
          <button
            className={`type-btn ${transferType === 'internal' ? 'active' : ''}`}
            onClick={() => setTransferType('internal')}
          >
            Internal Transfer
          </button>
          <button
            className={`type-btn ${transferType === 'external' ? 'active' : ''}`}
            onClick={() => setTransferType('external')}
          >
            External Transfer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="transfer-form">
          {transferType === 'external' && (
            <>
              <div className="form-group">
                <label htmlFor="bankName">Bank Name</label>
                <div className="bank-select-wrapper">
                  <select
                    id="bankName"
                    value={transferData.bankName}
                    onChange={(e) => setTransferData({
                      ...transferData,
                      bankName: e.target.value
                    })}
                    className="form-input bank-select"
                  >
                    <option value="">Select a bank</option>
                    {Object.entries(
                      popularBanks.reduce((acc, bank) => {
                        if (!acc[bank.country]) {
                          acc[bank.country] = [];
                        }
                        acc[bank.country].push(bank);
                        return acc;
                      }, {})
                    ).map(([country, banks]) => (
                      <optgroup key={country} label={country}>
                        {banks.map((bank) => (
                          <option key={bank.name} value={bank.name}>
                            {bank.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="other">Other Bank</option>
                  </select>
                </div>
                {transferData.bankName === 'other' && (
                  <input
                    type="text"
                    placeholder="Enter bank name"
                    value={transferData.customBankName}
                    onChange={(e) => setTransferData({
                      ...transferData,
                      bankName: e.target.value,
                      customBankName: e.target.value
                    })}
                    className="form-input mt-2"
                  />
                )}
              </div>

              <div className="form-group">
                <label htmlFor="accountName">Account Name</label>
                <input
                  type="text"
                  id="accountName"
                  value={transferData.accountName}
                  onChange={(e) => setTransferData({
                    ...transferData,
                    accountName: e.target.value
                  })}
                  placeholder="Enter account name"
                  className="form-input"
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="receiverAccount">
              {transferType === 'internal' ? "Receiver's Account Number" : 'Account Number'}
            </label>
            <div className="account-input-wrapper">
              <input
                type="text"
                id="receiverAccount"
                value={transferData.receiverAccountNumber}
                onChange={handleAccountNumberChange}
                placeholder="Enter account number"
                className={`form-input ${verifiedAccount ? 'verified' : ''}`}
                maxLength={12}
              />
              {transferType === 'internal' && (
                <div className="verification-status">
                  {isVerifying && (
                    <div className="verifying">
                      <span className="loading-spinner"></span>
                      <span>Verifying account...</span>
                    </div>
                  )}
                  {verifiedAccount && !isVerifying && (
                    <div className="verified-account">
                      <User size={16} />
                      <span>{verifiedAccount.accountName}</span>
                      <span className="verified-badge">✓</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <div className="amount-input-wrapper">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                id="amount"
                value={transferData.amount}
                onChange={(e) => setTransferData({
                  ...transferData,
                  amount: e.target.value
                })}
                placeholder="0.00"
                className="form-input with-currency"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description (Optional)</label>
            <textarea
              id="description"
              value={transferData.description}
              onChange={(e) => setTransferData({
                ...transferData,
                description: e.target.value
              })}
              placeholder="Enter transfer description"
              className="form-input"
              rows="3"
            />
          </div>

          <div className="transfer-summary">
            <div className="summary-item">
              <span>Transfer Amount</span>
              <span className="amount">${transferData.amount || '0.00'}</span>
            </div>
            <div className="summary-item fee">
              <span>Transfer Fee (0.002%)</span>
              <span className="fee-amount">-${
                transferData.amount ? 
                calculateTransferFee(parseFloat(transferData.amount)).fee.toFixed(2) 
                : '0.00'
              }</span>
            </div>
            <div className="summary-item total">
              <span>Final Amount</span>
              <span className="final-amount">${
                transferData.amount ? 
                calculateTransferFee(parseFloat(transferData.amount)).finalAmount.toFixed(2) 
                : '0.00'
              }</span>
            </div>
          </div>

          <button 
            type="submit" 
            className={`transfer-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Send Money'}
            <ArrowRight size={20} />
          </button>
        </form>
      </div>

      {/* Debug information - remove in production */}
      <div style={{ display: 'none' }}>
        <p>Is Loading: {isLoading.toString()}</p>
        <p>Has Account Number: {Boolean(transferData.receiverAccountNumber).toString()}</p>
        <p>Has Amount: {Boolean(transferData.amount).toString()}</p>
        <p>Is Verified: {Boolean(verifiedAccount).toString()}</p>
        <p>Has Sufficient Balance: {Boolean(parseFloat(transferData.amount) <= walletBalance).toString()}</p>
      </div>

      {showStatusModal && transferStatus && (
        <TransferStatusModal
          status={transferStatus.status}
          message={transferStatus.message}
          subtitle={transferStatus.subtitle}
          amount={transferData.amount}
          onClose={handleCloseModal}
          transferType={transferType}
        />
      )}
    </div>
  );
} 