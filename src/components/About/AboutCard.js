import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">HARSH DUBEY </span>
            from <span className="purple"> Jabalpur, Madhya Pradesh, India.</span>
            <br />I am a student pursuing B.tech in Information technology , from Baderia Global Institute of Engineering and Management (Jabalpur).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video-games
            </li>
          </ul>

          <p style={{ color: "#44a4ee" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">HARSH</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
