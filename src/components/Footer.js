//this is the footer of the portfolio.
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,AiOutlineTwitter,AiFillInstagram,AiFillMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer({ isContactPage }) {
  let date = new Date();
  let year = date.getFullYear();

  const containerClass = isContactPage ? "footer sticky-footer fixed-bottom" : "footer fixed-bottom";


  return (
    <Container fluid className={containerClass} >
      
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by HARSH DUBEY</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/harshdubey1198/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/officialharsh02"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/harshdubey1198/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/its_harsh_1198?igshid=ZDdkNTZiNTM="
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:amanad08052@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
