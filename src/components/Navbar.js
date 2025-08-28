import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo1198.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './navbar.css';
import { IoLogoGithub } from "react-icons/io";
import { FcContacts, FcManager, FcHome, FcDocument, FcReading, FcViewDetails } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavbar] = useState(false);
  console.log("expand value : ", expand)
  useEffect(() => {
    const scrollHandler = () => setNavbar(window.scrollY >= 20);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleToggle = () => setExpand(prev => !prev);
  const handleNavClick = () => {
    if (window.innerWidth < 768) { // collapse only on small screens
      setExpand(false);
    }
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid navbar-brand logo" alt="brand" style={{ maxHeight: "33px", marginBottom: "15px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="align-items-center" style={{ display: expand ? 'block' : 'none' }}>
          <Nav className="ms-auto1" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={handleNavClick}>
                <FcHome style={{ fontSize: "1em", marginBottom: "2px" }} /> <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
                <FcManager style={{ fontSize: "1em", marginBottom: "2px" }} /> <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/journey" onClick={handleNavClick}>
                <FcReading style={{ fontSize: "1em", marginBottom: "2px" }} /><span>Journey</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={handleNavClick}>
                <FcViewDetails style={{ fontSize: "1em", marginBottom: "2px" }} /><span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={handleNavClick}>
                <FcDocument style={{ fontSize: "1em", marginBottom: "2px" }} /><span>Resume</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
                <FcContacts style={{ fontSize: "1em", marginBottom: "2px" }} /><span>Contact</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/harshdubey1198/"
                target="_blank"
                className="fork-btn-inner"
                fontSize="16px"
                style={{ marginTop: "5px" }}
              >
                <IoLogoGithub style={{ fontSize: "1em" }} />Github
                <AiFillStar style={{ fontSize: "1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
