import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
        <div className="loading-text">
          <p>Please wait</p>
          <div className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner; 