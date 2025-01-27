import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import './TransactionModal.css';

const TransactionModal = ({ isSuccess, message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="transaction-modal">
        <div className={`status-icon ${isSuccess ? 'success' : 'error'}`}>
          {isSuccess ? <CheckCircle size={48} /> : <XCircle size={48} />}
        </div>
        <h2>{isSuccess ? 'Transaction Successful' : 'Transaction Failed'}</h2>
        <p>{message}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TransactionModal; 