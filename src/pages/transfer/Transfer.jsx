import { useState } from 'react';
import "./transfer.css";

export default function Transfer() {
  const [transferData, setTransferData] = useState({
    receiverAccountNumber: '',
    amount: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your transfer logic here
  };

  return (
    <div className="transfer-container">
      <div className="transfer-card">
        <h2 className="transfer-title">Transfer Money</h2>
        
        <form onSubmit={handleSubmit} className="transfer-form">
          <div className="form-group">
            <label htmlFor="receiverAccount">Receiver's Account Number</label>
            <input
              type="text"
              id="receiverAccount"
              value={transferData.receiverAccountNumber}
              onChange={(e) => setTransferData({
                ...transferData,
                receiverAccountNumber: e.target.value
              })}
              placeholder="Enter account number"
              className="form-input"
            />
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
            <div className="summary-item">
              <span>Transfer Fee</span>
              <span className="fee">$0.00</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span className="total-amount">${transferData.amount || '0.00'}</span>
            </div>
          </div>

          <button type="submit" className="transfer-button">
            Send Money
          </button>
        </form>
      </div>
    </div>
  );
} 