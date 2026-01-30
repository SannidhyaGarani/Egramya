import React from "react";

const HomeHero = () => {
  return (
    <section className="hero-master-container">
      <div className="container">
        <div className="hero-glass-card">
          <div className="row align-items-center">
            
            <div className="col-lg-6">
              <div className="status-tag">
                <span className="me-2">●</span> Govt Approved Program
              </div>
              
              <h1 className="hero-title">
                Building the Future of <span>Village Dairy.</span>
              </h1>
              
              <p className="hero-description">
                A specialized 12-week intensive for aspiring Dairy Counsellors. 
                Master modern livestock management through field-first education.
              </p>

              <div className="mini-grid">
                {["12 Week Program", "Field Practice", "Job Placement", "Certification"].map((t, i) => (
                  <div key={i} className="mini-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {t}
                  </div>
                ))}
              </div>

              <div className="d-flex align-items-center">
                <button className="btn-premium-main">Start Application</button>
                <a href="#" className="btn-premium-outline">Program Guide →</a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="image-stack">
                <img 
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800" 
                  alt="Dairy Training" 
                  className="main-img" 
                />
                <div className="stat-card-compact">
                  <span className="stat-val">100%</span>
                  <span className="stat-lab">Practical</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;