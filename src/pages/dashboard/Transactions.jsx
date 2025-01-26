import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserTransactions } from '../../store/transactions/transactionSlice';
import { Search, Filter, ArrowUpRight, ArrowDownRight, PieChart, Building2 } from 'lucide-react';
import './Transactions.css';

const Transactions = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { transactions, stats, isLoading } = useSelector((state) => state.transactions);
  
  const [filters, setFilters] = useState({
    type: '',
    status: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    if (user && user.token) {
      dispatch(getUserTransactions(filters));
    }
  }, [dispatch, user, filters]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const getTransactionIcon = (type, isReceived) => {
    switch(type) {
      case 'admin-credit':
        return <PieChart className="transaction-icon admin" />;
      case 'external-transfer':
        return <Building2 className="transaction-icon external" />;
      default:
        return isReceived ? 
          <ArrowDownRight className="transaction-icon received" /> : 
          <ArrowUpRight className="transaction-icon sent" />;
    }
  };

  const getTransactionLabel = (transaction, isReceived) => {
    switch(transaction.type) {
      case 'admin-credit':
        return 'Admin Credit';
      case 'external-transfer':
        return `External Transfer to ${transaction.externalBankDetails?.bankName || 'Bank'}`;
      default:
        return isReceived ? 'Money Received' : 'Money Sent';
    }
  };

  const getTransactionParty = (transaction, isReceived) => {
    if (transaction.type === 'external-transfer') {
      return `To: ${transaction.externalBankDetails?.accountName || 'External Account'} (${transaction.externalBankDetails?.accountNumber || ''})`;
    }
    
    return isReceived
      ? transaction.sender 
        ? `From: ${transaction.sender.firstName} ${transaction.sender.lastName}`
        : 'From: System'
      : `To: ${transaction.receiver.firstName} ${transaction.receiver.lastName}`;
  };

  return (
    <div className="transactions-container">
      {/* Filters Section */}
      <div className="filters-section">
        <div className="search-bar">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="Search transactions..."
            className="search-input"
          />
        </div>
        
        <div className="filters">
          <div className="filter-group">
            <select 
              name="type" 
              value={filters.type}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="">All Types</option>
              <option value="transfer">Transfer</option>
              <option value="admin-credit">Admin Credit</option>
            </select>
          </div>

          <div className="filter-group">
            <select 
              name="status" 
              value={filters.status}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          <div className="filter-group">
            <input 
              type="date" 
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="filter-date"
            />
          </div>

          <div className="filter-group">
            <input 
              type="date" 
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
              className="filter-date"
            />
          </div>

          <button className="filter-button">
            <Filter className="filter-icon" />
            Filter
          </button>
        </div>
      </div>

      {/* Transactions List */}
      <div className="transactions-list">
        {isLoading ? (
          <div className="loading">Loading transactions...</div>
        ) : transactions?.length > 0 ? (
          transactions.map((transaction) => {
            const isReceived = transaction.receiver._id === user._id;
            return (
              <div key={transaction._id} className="transaction-item">
                {getTransactionIcon(transaction.type, isReceived)}
                
                <div className="transaction-info">
                  <div className="transaction-type">
                    {getTransactionLabel(transaction, isReceived)}
                  </div>
                  <div className="transaction-party">
                    {getTransactionParty(transaction, isReceived)}
                  </div>
                </div>

                <div className="transaction-details">
                  <div className={`transaction-amount ${
                    transaction.type === 'external-transfer' ? 'external' : 
                    isReceived ? 'received' : 'sent'
                  }`}>
                    {isReceived ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </div>
                  <div className="transaction-date">
                    {new Date(transaction.timestamp).toLocaleDateString()}
                  </div>
                </div>

                <div className={`transaction-status ${transaction.status}`}>
                  {transaction.status}
                  {transaction.type === 'external-transfer' && transaction.status === 'pending' && (
                    <span className="processing-info">3-7 business days</span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-transactions">
            <p>No transactions found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="pagination-btn" disabled>Previous</button>
        <span className="pagination-info">Page 1 of 1</span>
        <button className="pagination-btn" disabled>Next</button>
      </div>
    </div>
  );
};

export default Transactions; 