import "./policies.css";

export default function TermsConditions() {
  return (
    <div className="policy-container">
      <header className="policy-header">
        <h1>Terms and Conditions</h1>
        <p>Last updated: March 2024</p>
      </header>

      <div className="policy-content">
        <section className="policy-section">
          <h2>Account Terms</h2>
          <div className="policy-item">
            <h3>Account Creation</h3>
            <ul>
              <li>Must be at least 18 years old</li>
              <li>Provide accurate and complete information</li>
              <li>Maintain security of account credentials</li>
              <li>One account per individual</li>
            </ul>
          </div>

          <div className="policy-item">
            <h3>Account Usage</h3>
            <ul>
              <li>No unauthorized access</li>
              <li>No fraudulent activities</li>
              <li>Comply with all applicable laws</li>
              <li>Maintain minimum balance requirements</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>Services</h2>
          <div className="policy-item">
            <h3>Banking Services</h3>
            <p>Our services include:</p>
            <ul>
              <li>Account management</li>
              <li>Loan management</li>
              <li>Fund transfers</li>
              <li>Online banking</li>
              <li>Mobile banking</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>Fees and Charges</h2>
          <div className="policy-item">
            <p>You agree to pay all applicable fees:</p>
            <ul>
              <li>Transaction fees</li>
              <li>Maintenance fees</li>
              <li>Service charges</li>
              <li>Penalty fees</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>Termination</h2>
          <div className="policy-item">
            <p>We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason.</p>
          </div>
        </section>
      </div>
    </div>
  );
} 