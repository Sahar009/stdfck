import "./policies.css";

export default function PrivacyPolicy() {
  return (
    <div className="policy-container">
      <header className="policy-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: March 2024</p>
      </header>

      <div className="policy-content">
        <section className="policy-section">
          <h2>Information We Collect</h2>
          <div className="policy-item">
            <h3>Personal Information</h3>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name, address, and contact information</li>
              <li>Banking and financial information</li>
              <li>Identification documents</li>
              <li>Transaction history and account information</li>
            </ul>
          </div>

          <div className="policy-item">
            <h3>Automatically Collected Information</h3>
            <p>When you use our services, we automatically collect:</p>
            <ul>
              <li>Device information and identifiers</li>
              <li>Usage data and browsing history</li>
              <li>Location information</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>How We Use Your Information</h2>
          <div className="policy-item">
            <p>We use the collected information for:</p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Processing transactions and maintaining accounts</li>
              <li>Verifying identity and preventing fraud</li>
              <li>Communicating about products and services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>Information Sharing</h2>
          <div className="policy-item">
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers and business partners</li>
              <li>Regulatory authorities and law enforcement</li>
              <li>Other financial institutions for transactions</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>Your Rights</h2>
          <div className="policy-item">
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Request corrections or deletions</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 