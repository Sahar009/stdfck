import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from '../assets/logo.png'

const Header = () => {
  return (
 
      <section className="header navigation " style={{backgroundColor: 'var(--secondary-color)'}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-md">
                <Link className="navbar-brand" to="/">
                  <img
                    className="visible-sm"
                    src={logo}
                    alt="Standard Unity Finance Bank"
                    width="150"
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <RxHamburgerMenu />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                  <ul
                    className="navbar-nav "
                    style={{ textTransform: 'capitalize' }}
                  >
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/wealthmanagement">
                        Fund Management
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Businesses & Institutions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/help">
                        Help Desk
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
  
  );
};

export default Header;