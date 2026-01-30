import React from "react";

const WhyChoose = () => {
  const benefits = [
    {
      title: "Professional Career Path",
      text: "Transition from traditional farming to a specialized role as a certified technical advisor within the dairy value chain.",
      icon: "💼"
    },
    {
      title: "Diverse Income Streams",
      text: "Establish a self-sustaining livelihood through service-based consulting, quality testing, and managing dairy input centers.",
      icon: "📈"
    },
    {
      title: "Direct Community Impact",
      text: "Empower local farmers by reducing cattle mortality rates and improving the economic output of small-scale milk producers.",
      icon: "🤝"
    },
    {
      title: "Official Recognition",
      text: "Gain formal status as a qualified expert, backed by government-approved training and industry-standard certification.",
      icon: "🏅"
    },
    {
      title: "Entrepreneurial Growth",
      text: "Build long-term professional stability by developing your own village-level dairy enterprise or cooperative network.",
      icon: "🏗️"
    },
    {
      title: "Technical Mastery",
      text: "Master high-demand skills in animal nutrition, clean milk production, and digital dairy management systems.",
      icon: "🔬"
    }
  ];

  return (
    <section className="why-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="status-tag justify-content-center">
              <span>●</span> Program Benefits
            </div>
            <h2 className="hero-title mt-3" style={{ fontSize: "2.8rem" }}>
              Why Become a <span>Village Dairy Counsellor?</span>
            </h2>
            <p className="hero-description mx-auto mt-4" style={{ borderLeft: "none", paddingLeft: 0, maxWidth: "600px" }}>
              The transformation of rural dairy farming depends on skilled leadership at the village level. 
              As a Dairy Counsellor, you bridge the gap between modern science and traditional farming.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {benefits.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                </div>
                <h4 className="benefit-title">{item.title}</h4>
                <p className="benefit-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;