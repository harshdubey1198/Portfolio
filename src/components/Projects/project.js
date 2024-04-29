import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle2";

import image1 from "./project1.jpg";
import image2 from "./Images/SignatureGlobal.png";
import image3 from "./Images/Trehanfloorsgurgaon ss.png";
import image4 from "./Images/Krisumi36A.png";
import image5 from "./Images/DlfPrivanaWest.png";
import image6 from "./Images/SatyaTheHive.png";
import image7 from "./project2.jpg";
import image8 from "./project3.jpg";
import image9 from "./Project4.jpg";
import image10 from "./project5.png";
import image11 from "./Project6.png";

function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description: "Portfolio designed for showcasing my information, skills of web development using React.js. This Web app is developed in combination of Html, Css, Js.",
      imgPath: image1,
      ghLink: "https://github.com/harshdubey1198/portfolio",
      demoLink: "https://portfolio-maharaaj.netlify.app/",
    },
    {
      title: "Krisumi Gurgaon",
      description: "Krisumi Gurgaon offers a blend of modern architecture and luxurious amenities. This residential project in Gurgaon features spacious apartments designed for comfort and elegance.",
      imgPath: image4,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://krisumigurgaonproject.co.in/",
    },
    {
      title: "Trehan Luxury Floors",
      description: "Trehan Luxury Floors brings high-end living to Gurgaon with premium residential spaces. Enjoy a combination of comfort and style in these well-designed floors.",
      imgPath: image3,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://trehanfloorsgurgaon.co.in/",
    },
    {
      title: "Satya The Hive Gurgaon",
      description: "Satya The Hive is a unique retail and commercial project in Gurgaon. It offers an exceptional mix of shops, offices, and entertainment spaces, creating a vibrant environment.",
      imgPath: image6,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://Satyathehivegurgaon.co.in/",
    },
    {
      title: "DLF Privana Gurgaon Phase III",
      description: "DLF Privana Phase III provides luxurious residential spaces with state-of-the-art amenities in Gurgaon. Experience modern living with a focus on comfort and convenience.",
      imgPath: image5,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://dlfprivananewproject.co.in/",
    },
    {
      title: "Signature Global",
      description: "Signature Global is a leading real estate developer, offering a wide range of residential and commercial projects in Gurgaon. Known for quality construction and innovative design.",
      imgPath: image2,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://Signatureglobalnewproject.co.in/",
    },
    
    {
      title: "Jobster",
      description: "Jobster web job search portal candidate profile dashboard using React.js. This Web app is developed in combination of Html, Css, Js. React version 18.2.0 is used in the project.",
      imgPath: image7,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://jobster-major.netlify.app/",
    },
    {
      title: "Instant Chat Messenger",
      description: "This app is designed using Android-Java concepts. Instant messaging enables users to exchange short messages in real-time over the internet. This is authenticated and similar to WhatsApp.",
      imgPath: image8,
      ghLink: "https://github.com/harshdubey1198/my-Chatting-application-",
    },
    {
      title: "Netflix-Clone",
      description: "Netflix Clone is a web application that mimics the popular streaming platform Netflix. It allows users to browse and watch movies and TV shows, providing a similar user experience and features.",
      imgPath: image9,
      ghLink: "https://github.com/harshdubey1198/Netflix-clon",
      demoLink: "https://netflix-clone-hd.vercel.app/",
    },
    {
      title: "Upi-Express",
      description: "This is web payment portal where user is free to transfer currency from their respective bank to receivers bank.",
      imgPath: image10,
      ghLink: "https://github.com/harshdubey1198/upiexpress",
      demoLink: "https://upi-express.netlify.app/",
    },
    {
      title: "Digital Clock",
      description: " This is a digital clock which shows the current time and date. It is designed using Html, Css, Js in the ReactJs environment.",
      imgPath: image11,//project image
      ghLink: "https://github.com/harshdubey1198/digital-watch",
      demoLink: "https://digi-clock-1198.netlify.app/",
    },
  ];

  const totalProjects = projects.length;

  return (
    <Container fluid className="project-section" style={{ paddingBottom: "150px" }}>
      <Particle />
      <Container>
        <div style={{ position: "relative", textAlign: "center" }}>
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "20px",
              width: "250px",
              height: "50px",
              borderRadius: "10px",
              backgroundColor: "#6c63ff",
              color: "white",
              textAlign: "center",
              lineHeight: "50px",
              fontWeight: "bold",
              zIndex: 999, 
            }}
          >
            Total Projects : {totalProjects}
          </div>
        </div>

        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
