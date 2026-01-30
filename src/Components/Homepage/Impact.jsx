import React from "react";

const ImpactAfterCompletion = () => {
  const impacts = [
    {
      title: "Farmer Outreach",
      text: "Capacity to provide technical guidance to 100+ dairy households within a village cluster.",
      icon: "📈"
    },
    {
      title: "Milk Quality Improvement",
      text: "Significant reduction in contamination and enhancement of Fat/SNF content via clean protocols.",
      icon: "🥛"
    },
    {
      title: "Income Generation",
      text: "Empowering families to increase monthly revenue by optimizing feed costs and productivity.",
      icon: "💰"
    },
    {
      title: "Professional Role",
      text: "Appointment as a trusted Counsellor, linking farmers directly to major dairy cooperatives.",
      icon: "👔"
    },
    {
      title: "Rural Development",
      text: "Creating self-sustaining enterprises that reduce migration and foster local youth employment.",
      icon: "🏘️"
    },
    {
      title: "Animal Welfare",
      text: "Measurable decrease in cattle morbidity through preventive healthcare and scientific management.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="impact-section">
      <div className="impact-bg-glow"></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="status-tag">
              <span>●</span> Program Outcomes
            </div>
            <h2 className="hero-title">
              Impact After <span>Completion</span>
            </h2>
            <p className="hero-description mx-auto mt-4" style={{ borderLeft: "none", paddingLeft: 0 }}>
              Graduates of the Village Dairy Counsellor Program serve as pivotal change agents 
              in the rural economy, creating a measurable ripple effect across the dairy value chain.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {impacts.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="impact-card">
                <div className="impact-indicator">
                  {item.icon}
                </div>
                <h4 className="impact-title">{item.title}</h4>
                <p className="impact-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAfterCompletion;