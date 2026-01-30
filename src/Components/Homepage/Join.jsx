import React from "react";

const WhoShouldJoin = () => {
  const personas = [
    {
      tag: "Career Starters",
      title: "Rural Youth",
      icon: "🌱",
      desc: "Seeking professional career opportunities and sustainable livelihoods within their own local communities."
    },
    {
      tag: "Growth Mindset",
      title: "Dairy Farmers",
      icon: "🐄",
      desc: "Practicing farmers looking to modernize operations, improve milk quality, and increase farm profitability."
    },
    {
      tag: "Field Experts",
      title: "Livestock Assistants",
      icon: "🏥",
      desc: "Paravets and assistants aiming to specialize in professional dairy advisory and extension services."
    },
    {
      tag: "Community Leaders",
      title: "SHG Members",
      icon: "👩🏽‍🤝‍👩🏼",
      desc: "Self-help group members working toward women's empowerment and village economic independence."
    },
    {
      tag: "Strategy Partners",
      title: "Agri Professionals",
      icon: "🚜",
      desc: "Rural development professionals interested in ground-level field implementation and measurable impact."
    },
    {
      tag: "New Ventures",
      title: "Entrepreneurs",
      icon: "🏗️",
      desc: "Individuals looking to start village-level dairy cooperatives or milk collection centers."
    }
  ];

  return (
    <section className="join-premium-container">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="status-tag">
              <span>●</span> Audience & Eligibility
            </div>
            <h2 className="hero-title">
              Designed for <span>Tomorrow's</span> Leaders
            </h2>
            <p className="hero-description mx-auto mt-4" style={{ borderLeft: "none", paddingLeft: 0, maxWidth: "650px" }}>
              The Village Dairy Counsellor Program is open to diverse rural stakeholders 
              dedicated to transforming the backbone of the rural economy.
            </p>
          </div>
        </div>

        <div className="persona-grid">
          {personas.map((item, index) => (
            <div className="persona-card" key={index}>
              <div>
                <div className="persona-icon-box">{item.icon}</div>
                <span className="persona-tag">{item.tag}</span>
                <h4 className="persona-title">{item.title}</h4>
                <p className="persona-description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="no-degree-banner">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="mb-3" style={{ fontFamily: 'Space Grotesk', fontWeight: 700 }}>No Advanced Degree Required</h3>
              <p className="mb-0" style={{ opacity: 0.8, fontSize: '1.1rem' }}>
                We value passion and field experience over academic certificates. 
                Our curriculum focuses on <strong>practical, field-first learning</strong> to prepare you for the real world.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <button className="btn-premium-main">Start Your Journey →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldJoin;