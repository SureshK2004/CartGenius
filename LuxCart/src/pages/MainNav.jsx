import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './mainNav.css';

const MainNavbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-primary">Cart</span>Genius
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            {[
              { path: "/women's clothing", name: "Women's Clothing" },
              { path: "/men's clothing", name: "Men's Clothing" },
              { path: "/jewelery", name: "Jewlery" },
              { path: "/electronics", name: "Electronics" },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;