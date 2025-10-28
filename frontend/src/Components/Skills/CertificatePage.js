import React from "react";
import "./certificate.css";
import certificate1 from "./img/webdesign.png";
import certificate2 from "./img/stage1.png";
import certificate3 from "./img/stage2.png";
import certificate4 from "./img/python.png";
import certificate5 from "./img/ai.png"; // New certificate 5
import certificate6 from "./img/pm.png";   // New certificate 6

const certificateData = [
  {
    id: 1,
    title: "Web Design for Beginners",
    issuer: "university of Moratuwa",
    date: "March 2024",
    image: certificate1,
  },
  {
    id: 2,
    title: "SLIIT AI Course Stage 1",
    issuer: "SLIIT",
    date: "June 2024",
    image: certificate2,
  },
  {
    id: 3,
    title: "SLIIT AI Course Stage 2",
    issuer: "SLIIT",
    date: "August 2024",
    image: certificate3,
  },
  {
    id: 4,
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "January 2025",
    image: certificate4,
  },
  {
    id: 5,
    title: "AI for Beginners",
    issuer: "Hp-Life",
    date: "February 2025",
    image: certificate5,
  },
  {
    id: 6,
    title: "Agile Project Management",
    issuer: "Hp-Life",
    date: "April 2025",
    image: certificate6,
  },
];

// Interleave function (optional)
const getInterleavedCertificates = (certificates) => {
  const interleaved = [];
  const middle = Math.floor(certificates.length / 2);
  let left = middle - 1;
  let right = middle;

  while (left >= 0 || right < certificates.length) {
    if (right < certificates.length) {
      interleaved.push(certificates[right]);
      right++;
    }
    if (left >= 0) {
      interleaved.push(certificates[left]);
      left--;
    }
  }
  return interleaved;
};

const CertificatePage = () => {
  const interleavedCertificates = getInterleavedCertificates(certificateData);

  return (
    <div id="certificate">
      <div className="certificateContainer">
        <div className="hedder animated-text">
          <h1 className="Certificate">My</h1>
          <h1 className="Dashboard">Certificates</h1>
        </div>
        <div className="certificateGrid">
          {interleavedCertificates &&
            interleavedCertificates.map((cert, i) => (
              <div className="certificate-card" key={i}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-image"
                />
                <div className="certificate-card-content">
                  <h1 className="CCTitle animated-text">{cert.title}</h1>
                  <h2 className="CCTitle">Issuer: {cert.issuer}</h2>
                  <small className="CCDate">{cert.date}</small>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
