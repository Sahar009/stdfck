import "./policies.css";

export default function AntiLaundering() {
  return (
    <div className="policy-container">
      <header className="policy-header">
        <h1>Anti-Money Laundering Policy</h1>
        <p>Last updated: March 2024</p>
      </header>

      <div className="policy-content">
        <section className="policy-section">
          <h2>Policy Overview</h2>
          <div className="policy-item">
            <p>Our commitment to preventing money laundering and terrorist financing includes:</p>
            <ul>
              <li>Customer due diligence</li>
              <li>Transaction monitoring</li>
              <li>Record keeping</li>
              <li>Staff training</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>Customer Due Diligence</h2>
          <div className="policy-item">
            <h3>Verification Requirements</h3>
            <ul>
              <li>Valid government-issued ID</li>
              <li>Proof of address</li>
              <li>Source of funds documentation</li>
              <li>Business registration (for corporate accounts)</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>Transaction Monitoring</h2>
          <div className="policy-item">
            <h3>We Monitor For:</h3>
            <ul>
              <li>Unusual transaction patterns</li>
              <li>High-risk transactions</li>
              <li>Structured transactions</li>
              <li>Cross-border activities</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>Reporting</h2>
          <div className="policy-item">
            <p>We are required to report:</p>
            <ul>
              <li>Suspicious transactions</li>
              <li>Large cash transactions</li>
              <li>International wire transfers</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>Compliance</h2>
          <div className="policy-item">
            <p>We maintain compliance through:</p>
            <ul>
              <li>Regular staff training</li>
              <li>Internal audits</li>
              <li>Updated procedures</li>
              <li>Cooperation with authorities</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 