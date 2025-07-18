import React from "react";
import "./journey.css";
import rvc from "./img/rvc.png";
import tnbs from "./img/tnbs.png";
import sliit from "./img/sliit.png";
import uom from "./img/uom.png";

const Timeline = () => {
  const timelineData = [
    {
      id: 5,
      title: "Web Desing for Beginners",
      duration: "2024",
      institution: "University of Moratuwa",
      logo: uom,
    },
    {
      id: 4,
      title: "Phython for Beginners",
      duration: "2024",
      institution: "University of Moratuwa",
      logo: uom,
    },
    {
      id: 3,
      title: "Bachelor of Information Technology",
      duration: "2023 - Present",
      institution: "Sri Lanka Institute of Information Technology",
      logo: sliit,
    },
    {
      id: 2,
      title: "Biological Science",
      duration: "2018 - 2021",
      institution: "H/Tangalle Girls college",
      logo: rvc,
    },
    {
      id: 1,
      title: "Primary Education",
      institution: "H/Tangalle Model Primary School",
      logo: tnbs,
    },
    
  ];

  return (
    <div id="journey">
      <div className="timeline-container">
        <div className="timeline-title animated-text">
          <h1 className="timeline-title1">Journ</h1>
          <h1 className="timeline-title2">ey</h1>
        </div>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              style={{ animationDelay: `${index * 1}s` }}
            >
              <div className="timeline-img">
                {/* <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="timeline-logo"
              /> */}
              </div>

              <div className="timeline-content">
                <img
                  src={item.logo}
                  alt={`${item.title} logo`}
                  className="timeline-logo"
                />
                <h2>{item.title}</h2>
                <br />
                <h3>{item.duration}</h3>
                <p>{item.institution}</p>
                <span className="arrow"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;