import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Unity Finance</h1>
        <p className="subtitle">Building Financial Futures Together</p>
      </header>

      <section className="about-content">
        <div className="vision-mission">
          <div className="info-card">
            <h2>Our Vision</h2>
            <p>To be the leading digital bank, providing innovative financial solutions that empower individuals and businesses.</p>
          </div>
          <div className="info-card">
            <h2>Our Mission</h2>
            <p>To deliver accessible, secure, and efficient banking services while fostering financial inclusion and economic growth.</p>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h3>Secure Banking</h3>
            <p>State-of-the-art security measures to protect your finances</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💳</span>
            <h3>Loan Solutions</h3>
            <p>Seamless loan solutions for all businesses</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3>Mobile Banking</h3>
            <p>Bank anywhere, anytime with our mobile solutions</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💡</span>
            <h3>Innovation</h3>
            <p>Cutting-edge financial technology solutions</p>
          </div>
        </div>

        {/* <div className="team-section">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
         
            <div className="team-member">
              <img src="https://github.com/shadcn.png" alt="Team member" />
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
} 