import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [itemCount] = useState(1); 
  const [logoColor, setLogoColor] = useState('#61099a');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container">
        {/* Logo */}
        <a
          className="navbar-brand fw-bold fs-4 nav-logo"
          href="#"
          style={{ 
            color: logoColor,
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={() => setLogoColor('#4a0773')}
          onMouseLeave={() => setLogoColor('#61099a')}
        >
          CartGenius
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link px-3 position-relative" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 position-relative" href="#shop">
                Shop
              </a>
            </li>
          </ul>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-3">
            {/* Cart Icon */}
            <div className="position-relative">
              <a
                href="/cart"
                aria-label="Shopping Cart"
                className="cart-icon d-flex align-items-center justify-content-center"
              >
                <FaCartArrowDown className="fs-5" />
                {itemCount > 0 && (
                  <span className="cart-badge">
                    {itemCount}
                  </span>
                )}
              </a>
            </div>

            {/* Login Button */}
            <a href="#" className="auth">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;