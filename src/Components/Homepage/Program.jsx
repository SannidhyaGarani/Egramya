import React from "react";

const ProgramStructure = () => {
  const phases = [
    {
      weeks: "Weeks 1–4",
      title: "Foundation & Dairy Science",
      desc: "This phase focuses on the core principles of livestock health, clean milk production, and animal nutrition.",
      icon: "01"
    },
    {
      weeks: "Weeks 5–8",
      title: "Business & Enterprise",
      desc: "Learning outcomes include mastering supply chain logistics, financial record-keeping, and business models.",
      icon: "02"
    },
    {
      weeks: "Weeks 9–12",
      title: "Field Practice & Certification",
      desc: "Final dedicated phase for supervised field internship, community outreach, and professional assessments.",
      icon: "03"
    }
  ];

  return (
    <section className="structure-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="hero-title" style={{ fontSize: "2.8rem" }}>
              Program <span>Structure</span> at a Glance
            </h2>
            <p className="hero-description mx-auto mt-4" style={{ borderLeft: "none", paddingLeft: 0, maxWidth: "700px" }}>
              The Village Dairy Counsellor Program is a comprehensive 12-week intensive 
              designed to transition participants from foundational knowledge to professional field competency.
            </p>
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line d-none d-lg-block"></div>
          <div className="row g-4">
            {phases.map((phase, index) => (
              <div className="col-lg-4" key={index}>
                <div className="phase-node h-100">
                  <span className="phase-badge">Phase {phase.icon}</span>
                  <span className="phase-weeks">{phase.weeks}</span>
                  <h4 className="benefit-title">{phase.title}</h4>
                  <p className="benefit-text">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;