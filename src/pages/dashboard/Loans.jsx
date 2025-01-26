import { useState } from 'react';
import { Clock, DollarSign, CalendarDays, AlertCircle } from 'lucide-react';
import './Loans.css';

const Loans = () => {
  // Mock data - replace with actual API call
  const [loans] = useState([
    {
      id: 1,
      amount: 5000,
      status: 'active',
      type: 'personal',
      startDate: '2024-01-15',
      endDate: '2024-07-15',
      interestRate: 12.5,
      remainingAmount: 4200
    },
    {
      id: 2,
      amount: 10000,
      status: 'completed',
      type: 'business',
      startDate: '2023-06-01',
      endDate: '2023-12-01',
      interestRate: 10.5,
      remainingAmount: 0
    }
  ]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="loans-container">
      <div className="loans-header">
        <h2>Loan History</h2>
        <button className="apply-loan-btn">Apply for Loan</button>
      </div>

      <div className="loans-summary">
        <div className="summary-card">
          <DollarSign className="summary-icon" />
          <div className="summary-info">
            <h3>Total Borrowed</h3>
            <p>{formatCurrency(15000)}</p>
          </div>
        </div>
        <div className="summary-card">
          <Clock className="summary-icon" />
          <div className="summary-info">
            <h3>Active Loans</h3>
            <p>1</p>
          </div>
        </div>
        <div className="summary-card">
          <CalendarDays className="summary-icon" />
          <div className="summary-info">
            <h3>Next Payment Due</h3>
            <p>Jan 30, 2024</p>
          </div>
        </div>
      </div>

      <div className="loans-list">
        {loans.map((loan) => (
          <div key={loan.id} className={`loan-card ${loan.status}`}>
            <div className="loan-header">
              <h3>{loan.type.charAt(0).toUpperCase() + loan.type.slice(1)} Loan</h3>
              <span className={`loan-status ${loan.status}`}>
                {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
              </span>
            </div>
            
            <div className="loan-details">
              <div className="detail-item">
                <span>Amount</span>
                <strong>{formatCurrency(loan.amount)}</strong>
              </div>
              <div className="detail-item">
                <span>Interest Rate</span>
                <strong>{loan.interestRate}%</strong>
              </div>
              <div className="detail-item">
                <span>Start Date</span>
                <strong>{new Date(loan.startDate).toLocaleDateString()}</strong>
              </div>
              <div className="detail-item">
                <span>End Date</span>
                <strong>{new Date(loan.endDate).toLocaleDateString()}</strong>
              </div>
              {loan.status === 'active' && (
                <div className="detail-item">
                  <span>Remaining Amount</span>
                  <strong>{formatCurrency(loan.remainingAmount)}</strong>
                </div>
              )}
            </div>

            {loan.status === 'active' && (
              <div className="loan-actions">
                <button className="pay-now-btn">Make Payment</button>
                <button className="view-details-btn">View Details</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {loans.length === 0 && (
        <div className="no-loans">
          <AlertCircle className="no-loans-icon" />
          <p>No loan history found</p>
        </div>
      )}
    </div>
  );
};

export default Loans; 