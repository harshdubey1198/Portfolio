import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineBook } from "react-icons/ai";
import Particle from "../Particle4";
import "./Education.css";
import image1 from "./global.png";
import image2 from "./bff.jpg";

function Education() {
  const timelineData = [
    {
      year: "2024 - Present",
      title: "Full Stack Web Developer",
      subtitle: "Magnifying India (Remote / Mohali)",
      description:
        "Built aaMOBee with RBAC, multi-firm architecture, inventory & invoicing modules.",
    },
    {
      year: "2023 - 2024",
      title: "Full Stack Web Developer",
      subtitle: "Realty Shopee (Gurgaon)",
      description:
        "Delivered 5 React apps in 15 days, built Node.js APIs for property listings.",
    },
    {
      year: "2019 - 2023",
      title: "B.Tech in Information Technology",
      subtitle: "Baderia Global Institute Of Engg. & Mgmt.",
      description:
        "Graduated with 85.30% | Specialized in DSA, MERN Stack, Software Engineering.",
      logo: image1,
    },
    {
      year: "2018 - 2019",
      title: "Senior Secondary (PCM)",
      subtitle: "British Fort Foundation",
      description: "Percentage : 61.59%",
      logo: image2,
    },
    {
      year: "2016 - 2017",
      title: "Higher Secondary",
      subtitle: "British Fort Foundation",
      description: "C.G.P.A : 8.8",
      logo: image2,
    },
  ];

  return (
    <div className="education-section">
      <Particle />
      <Container>
        <h1
          className="education-heading"
          style={{
            marginTop: "60px",
            color: "white",
            fontWeight: "bolder",
            fontFamily: "sans-serif",
          }}
        >
          <AiOutlineBook /> My <span className="purple">Journey</span>
        </h1>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
            >
              <div className="timeline-year">{item.year}</div>
              <div className="content" style={{textAlign:"start"}}>
                {item.logo && (
                  <img
                    src={item.logo}
                    alt="logo"
                    style={{
                      width: "60px",
                      borderRadius: "50%",
                      marginBottom: "10px",
                    }}
                  />
                )}
                <h3 style={{ color: "yellowgreen" }}>{item.title}</h3>
                <h5 style={{ color: "floralwhite" }}>{item.subtitle}</h5>
                <p style={{ color: "turquoise" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Education;
