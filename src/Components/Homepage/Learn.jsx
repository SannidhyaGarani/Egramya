import React from "react";

const WhatYouWillLearn = () => {
  const categories = [
    {
      title: "Technical Dairy Skills",
      icon: "🐄",
      skills: [
        "Advanced animal nutrition & feed management",
        "Cattle breed identification & health monitoring",
        "Clean milk production & sanitation standards",
        "Preventive care & basic first-aid protocols",
        "Data-driven herd management techniques"
      ]
    },
    {
      title: "Business & Enterprise",
      icon: "📊",
      skills: [
        "Supply chain & cold-chain management",
        "Milk quality testing & transparent pricing",
        "Financial planning & cooperative management",
        "Dairy entrepreneurship & credit linkage",
        "Digital record-keeping & inventory systems"
      ]
    },
    {
      title: "Community & Advisory",
      icon: "🤝",
      skills: [
        "Farmer outreach & relationship building",
        "Technical counseling & field demonstrations",
        "Leading village-level extension programs",
        "Conflict resolution & community leadership",
        "Facilitating sustainable farming knowledge"
      ]
    }
  ];

  return (
    <section className="learning-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="status-tag">
              <span>●</span> Curriculum Overview
            </div>
            <h2 className="hero-title mt-3">
              What You Will <span>Learn</span>
            </h2>
            <p className="hero-description mx-auto mt-3" style={{ borderLeft: "none", paddingLeft: 0 }}>
              Master a diverse set of professional skills designed to transform you into a 
              high-impact Village Dairy Counsellor.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {categories.map((cat, index) => (
            <div className="col-lg-4" key={index}>
              <div className="skill-category-card">
                <div className="category-header">
                  <div className="category-icon">{cat.icon}</div>
                  <h4 className="m-0" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--rich-green)' }}>
                    {cat.title}
                  </h4>
                </div>
                <ul className="skill-list">
                  {cat.skills.map((skill, i) => (
                    <li key={i} className="skill-item">
                      <span className="skill-check">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;