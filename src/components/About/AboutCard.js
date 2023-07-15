import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {   FcGlobe, FcTouchscreenSmartphone } from "react-icons/fc";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">HARSH DUBEY </span>
            from <span className="purple"> Jabalpur, Madhya Pradesh, India.</span>
            <br />I am a graduate fresher completed B.tech in the field of Information technology , from Baderia Global Institute of Engineering and Management (Jabalpur).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Gamified aptitude quizes    <IoLogoGameControllerA/>
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling    <FcGlobe/>
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video-games    <FcTouchscreenSmartphone/>
            </li>
            <li className="about-activity">
              <ImPointRight/> Developing Front-End <FaLaptop/>
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
