import React from "react";

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="container">
        <div className="row g-4">
          
          {/* SECTION 1: Overview */}
          <div className="col-lg-4 col-md-6">
            <a href="/" className="header-logo mb-3 d-inline-block" style={{ color: 'white' }}>
              <div className="logo-dot"></div>
              DAIRY<span>CO</span>
            </a>
            <p className="footer-link" style={{ cursor: 'default', color: '#94a3b8' }}>
              Village Dairy Counsellor Program
            </p>
            <p className="trust-text pe-lg-4">
              A 3-month professional training program designed to build skilled, self-sustainable Village Dairy Counsellors who support dairy farmers and strengthen rural livelihoods.
            </p>
          </div>

          {/* SECTION 2 & 3: Navigation & Modules */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-column-title">Quick Links</h5>
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">About Program</a>
            <a href="#" className="footer-link">Structure</a>
            <a href="#" className="footer-link">Methodology</a>
            <a href="#" className="footer-link">Impact</a>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-column-title">Resources</h5>
            <a href="#" className="footer-link">Training Materials</a>
            <a href="#" className="footer-link">Field Internship</a>
            <a href="#" className="footer-link">Apply for Training</a>
            <a href="#" className="footer-link">Program Brochure</a>
            <a href="#" className="footer-link">FAQs</a>
          </div>

          {/* SECTION 5: Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-column-title">Contact Office</h5>
            <div className="contact-info-item">
              <span>📍</span>
              <span>Rural Development & Dairy Training Center, India</span>
            </div>
            <div className="contact-info-item">
              <span>✉️</span>
              <span>info@villagedairycounsellor.org</span>
            </div>
            <div className="contact-info-item">
              <span>📞</span>
              <span>+91 XXXXX XXXXX</span>
            </div>
          </div>
        </div>

        {/* SECTION 6: Trust Statement */}
        <div className="trust-card">
          <div className="row align-items-center">
            <div className="col-md-1 text-center d-none d-md-block">
              <div style={{fontSize: '2rem', filter: 'grayscale(1) opacity(0.5)'}}>🛡️</div>
            </div>
            <div className="col-md-11">
              <p className="trust-text">
                <strong>Certification & Trust:</strong> Certified Village Dairy Counsellors are trained through structured assessments, field internships, and practical evaluations to ensure professional competency and real-world impact.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 & 8: Legal & Copyright */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="copyright-text">
            © 2026 Village Dairy Counsellor Program. All rights reserved.
          </div>
          <div className="d-flex align-items-center">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms & Conditions</a>
            <a href="#" className="legal-link">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;