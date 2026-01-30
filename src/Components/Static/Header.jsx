import React from "react";

const Header = () => {
  return (
    <nav className="premium-header">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <a href="/" className="header-logo">
          <div className="logo-dot"></div>
          DAIRY<span>CO</span>
        </a>

        {/* Navigation Menu */}
        <div className="nav-menu d-none d-lg-flex align-items-center gap-2">
          <a href="#" className="nav-link-custom">Home</a>
          <a href="#" className="nav-link-custom">About Program</a>
          <a href="#" className="nav-link-custom">Structure</a>

          {/* Modules Dropdown */}
          <div className="custom-dropdown">
            <a href="#" className="nav-link-custom d-flex align-items-center gap-1">
              Modules 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div className="dropdown-content">
              <a href="#" className="module-item">
                <span className="module-title">Module 1: Dairy Farming Basics</span>
                <span className="module-desc">Animal health & modern milking techniques.</span>
              </a>
              <a href="#" className="module-item">
                <span className="module-title">Module 2: Business & Enterprise</span>
                <span className="module-desc">Supply chain and financial management.</span>
              </a>
              <a href="#" className="module-item">
                <span className="module-title">Module 3: Community Development</span>
                <span className="module-desc">Leading village cooperatives & growth.</span>
              </a>
            </div>
          </div>

          <a href="#" className="nav-link-custom">Methodology</a>
          <a href="#" className="nav-link-custom">Impact</a>
        </div>

        {/* CTA Button */}
        <div className="d-flex align-items-center gap-3">
          <a href="#" className="nav-link-custom d-none d-md-block">Contact</a>
          <button className="btn-premium-main" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            Apply Now
          </button>
          <div className="mobile-toggle d-lg-none">☰</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;