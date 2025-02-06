import { CheckCircle, XCircle, Clock, X } from 'lucide-react';
import './TransferStatusModal.css';

const TransferStatusModal = ({ 
  status, 
  message, 
  subtitle,
  onClose, 
  amount,
  transferType 
}) => {
  const statusConfig = {
    success: {
      // icon: <CheckCircle className="status-icon success" size={50} />,
      icon: <XCircle className="status-icon error" size={50} />,
      // title: transferType === 'external' ? 'Transfer Initiated' : 'Transfer Successful',
       title: transferType === 'external' ? 'Transfer Failed' : 'Transfer Successful',
      className: 'success'
    },
    pending: {
      icon: <Clock className="status-icon pending" size={50} />,
      title: 'Transfer Processing',
      className: 'pending'
    },
    error: {
      icon: <XCircle className="status-icon error" size={50} />,
      title: 'Transfer Failed',
      className: 'error'
    }
  };

  const { icon, title, className } = statusConfig[status] || statusConfig.error;

  return (
    <div className="modal-overlay">
      <div className={`transfer-status-modal ${className}`}>
        <button className="modal-close-icon" onClick={onClose}>
          <X color="red" size={24} />
        </button>
        {icon}
        <h2>{title}</h2>
        {amount && (
          <div className="amount">${parseFloat(amount).toLocaleString()}</div>
        )}
        <p>{message}</p>
        {subtitle && (
          <div className="processing-time">
            <Clock size={16} />
            <span>{subtitle}</span>
          </div>
        )}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TransferStatusModal; 