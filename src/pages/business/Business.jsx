import { Building2, Users2, Briefcase, PiggyBank, ArrowRight, DollarSign, Factory, Tractor, Store, Home, Truck, GraduationCap } from 'lucide-react';
import "./business.css";

export default function Business() {
  return (
    <div className="business-container">
      <header className="business-header">
        <div className="header-content">
          <h1>Business & Institutions</h1>
          {/* <p className="header-subtitle">
            Comprehensive financial solutions for businesses of all sizes
          </p> */}
        </div>
      </header>

      <div className="business-content">
        {/* Services Section */}
        <section className="services-section">
          <h2 className="section-title">Our Business Solutions</h2>
          <div className="services-grid">
            <div className="service-card">
              <Building2 className="service-icon" />
              <h3>Corporate Banking</h3>
              <p>Tailored financial services for large corporations and enterprises</p>
              <ul className="service-features">
                <li>Corporate Current Accounts</li>
                <li>Trade Finance</li>
                <li>International Banking</li>
                <li>Treasury Services</li>
              </ul>
              <button className="learn-more-btn">
                Learn More <ArrowRight size={16} />
              </button>
            </div>

            <div className="service-card">
              <Briefcase className="service-icon" />
              <h3>SME Banking</h3>
              <p>Supporting small and medium enterprises with growth-focused solutions</p>
              <ul className="service-features">
                <li>Business Loans</li>
                <li>Equipment Financing</li>
                <li>Business Advisory</li>
                <li>Payment Solutions</li>
              </ul>
              <button className="learn-more-btn">
                Learn More <ArrowRight size={16} />
              </button>
            </div>

            <div className="service-card">
              <Users2 className="service-icon" />
              <h3>Institutional Banking</h3>
              <p>Specialized services for institutions and organizations</p>
              <ul className="service-features">
                <li>NGO Banking</li>
                <li>Government Partnerships</li>
                <li>Educational Institutions</li>
                <li>Religious Organizations</li>
              </ul>
              <button className="learn-more-btn">
                Learn More <ArrowRight size={16} />
              </button>
            </div>

            <div className="service-card">
              <PiggyBank className="service-icon" />
              <h3>Investment Solutions</h3>
              <p>Growing your business wealth through smart investments</p>
              <ul className="service-features">
                <li>Fixed Deposits</li>
                <li>Treasury Bills</li>
                <li>Bonds</li>
                <li>Investment Advisory</li>
              </ul>
              <button className="learn-more-btn">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Loan Products Section */}
        <section className="loan-section">
          <h2 className="section-title">Business Loan Solutions</h2>
          <div className="loan-grid">
            <div className="loan-card">
              <DollarSign className="loan-icon" />
              <h3>Working Capital Loan</h3>
              <p>Short-term financing for day-to-day operations</p>
              <ul className="loan-features">
                <li>Up to $50 million</li>
                <li>12-month tenure</li>
                <li>Competitive interest rates</li>
                <li>Quick approval process</li>
              </ul>
              <div className="loan-footer">
                <span className="interest-rate">From 15% p.a</span>
                <button className="apply-btn">Apply Now <ArrowRight size={16} /></button>
              </div>
            </div>

            <div className="loan-card">
              <Factory className="loan-icon" />
              <h3>Equipment Financing</h3>
              <p>Fund your business equipment and machinery</p>
              <ul className="loan-features">
                <li>Up to $100 million</li>
                <li>36-month tenure</li>
                <li>Asset-backed financing</li>
                <li>Flexible repayment terms</li>
              </ul>
              <div className="loan-footer">
                <span className="interest-rate">From 18% p.a</span>
                <button className="apply-btn">Apply Now <ArrowRight size={16} /></button>
              </div>
            </div>

            <div className="loan-card">
              <Store className="loan-icon" />
              <h3>SME Growth Loan</h3>
              <p>Expand your small or medium business</p>
              <ul className="loan-features">
                <li>Up to $25 million</li>
                <li>24-month tenure</li>
                <li>No collateral required</li>
                <li>Business support services</li>
              </ul>
              <div className="loan-footer">
                <span className="interest-rate">From 16% p.a</span>
                <button className="apply-btn">Apply Now <ArrowRight size={16} /></button>
              </div>
            </div>

            <div className="loan-card">
              <Tractor className="loan-icon" />
              <h3>Agricultural Loan</h3>
              <p>Support for farming and agribusiness</p>
              <ul className="loan-features">
                <li>Up to $75 million</li>
                <li>Seasonal repayment options</li>
                <li>Subsidized rates</li>
                <li>Technical assistance</li>
              </ul>
              <div className="loan-footer">
                <span className="interest-rate">From 12% p.a</span>
                <button className="apply-btn">Apply Now <ArrowRight size={16} /></button>
              </div>
            </div>

            <div className="loan-card">
              <Truck className="loan-icon" />
              <h3>Commercial Vehicle Loan</h3>
              <p>Finance your business vehicles and fleet</p>
              <ul className="loan-features">
                <li>Up to $40 million</li>
                <li>48-month tenure</li>
                <li>Competitive rates</li>
                <li>Quick processing</li>
              </ul>
              <div className="loan-footer">
                <span className="interest-rate">From 17% p.a</span>
                <button className="apply-btn">Apply Now <ArrowRight size={16} /></button>
              </div>
            </div>

            <div className="loan-card">
              <GraduationCap className="loan-icon" />
              <h3>Educational Institution Loan</h3>
              <p>Financing for schools and educational facilities</p>
              <ul className="loan-features">
                <li>Up to $150 million</li>
                <li>60-month tenure</li>
                <li>Tailored repayment</li>
                <li>Infrastructure support</li>
              </ul>
              <div className="loan-footer">
                <span className="interest-rate">From 14% p.a</span>
                <button className="apply-btn">Apply Now <ArrowRight size={16} /></button>
              </div>
            </div>
          </div>

          {/* Loan Process Section */}
          <div className="loan-process">
            <h3>How to Apply</h3>
            <div className="process-steps">
              <div className="step">
                <span className="step-number">1</span>
                <h4>Submit Application</h4>
                <p>Complete our online application form with your business details</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <h4>Document Upload</h4>
                <p>Provide required documentation for verification</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <h4>Assessment</h4>
                <p>Our team reviews your application and documents</p>
              </div>
              <div className="step">
                <span className="step-number">4</span>
                <h4>Approval & Disbursement</h4>
                <p>Receive your loan amount upon approval</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <h2 className="section-title">Why Choose Unity Bank for Business</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-header">
                <span className="feature-number">01</span>
                <h3>Expertise</h3>
              </div>
              <p>Dedicated relationship managers with industry expertise</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <span className="feature-number">02</span>
                <h3>Technology</h3>
              </div>
              <p>Advanced digital banking solutions for efficient operations</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <span className="feature-number">03</span>
                <h3>Support</h3>
              </div>
              <p>24/7 business support and dedicated service lines</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <span className="feature-number">04</span>
                <h3>Network</h3>
              </div>
              <p>Extensive network of partners and international connections</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="business-contact">
          <div className="contact-card">
            <h2>Ready to Get Started?</h2>
            <p>Speak with our business banking specialists today</p>
            <div className="contact-buttons">
              <button className="primary-btn">Schedule a Meeting</button>
              <button className="secondary-btn">Download Brochure</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 