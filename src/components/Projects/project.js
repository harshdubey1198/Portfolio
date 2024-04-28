import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle2";
import image1 from "./project1.jpg";
import image2 from "./project2.jpg";
import image3 from "./project3.jpg";
import image4 from "./Project4.jpg";
import image5 from "./project5.png";
import image6 from "./Project6.png";

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
      title: "Signature Global",
      description: "Jobster web job search portal candidate profile dashboard using React.js. This Web app is developed in combination of Html, Css, Js. React version 18.2.0 is used in the project.",
      imgPath: image2,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://Signatureglobalnewproject.co.in/",
    },
    {
      title: "Trehan Luxury Floors",
      description: "Jobster web job search portal candidate profile dashboard using React.js. This Web app is developed in combination of Html, Css, Js. React version 18.2.0 is used in the project.",
      imgPath: image2,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://trehanfloorsgurgaon.co.in/",
    },
    {
      title: "Krisumi Gurgaon",
      description: "Jobster web job search portal candidate profile dashboard using React.js. This Web app is developed in combination of Html, Css, Js. React version 18.2.0 is used in the project.",
      imgPath: image2,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://krisumigurgaonproject.co.in/",
    },
    {
      title: "Dlf Privana Gurgaon Phase III",
      description: "Jobster web job search portal candidate profile dashboard using React.js. This Web app is developed in combination of Html, Css, Js. React version 18.2.0 is used in the project.",
      imgPath: image2,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://dlfprivananewproject.co.in/",
    },
    {
      title: "Satya The Hive Gurgaon",
      description: "Jobster web job search portal candidate profile dashboard using React.js. This Web app is developed in combination of Html, Css, Js. React version 18.2.0 is used in the project.",
      imgPath: image2,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://Satyathehivegurgaon.co.in/",
    },
    {
      title: "Jobster",
      description: "Jobster web job search portal candidate profile dashboard using React.js. This Web app is developed in combination of Html, Css, Js. React version 18.2.0 is used in the project.",
      imgPath: image2,
      ghLink: "https://github.com/harshdubey1198/Jobster-Major-Project",
      demoLink: "https://jobster-major.netlify.app/",
    },
    {
      title: "Instant Chat Messenger",
      description: "This app is designed using Android-Java concepts. Instant messaging enables users to exchange short messages in real-time over the internet. This is authenticated and similar to WhatsApp.",
      imgPath: image3,
      ghLink: "https://github.com/harshdubey1198/my-Chatting-application-",
    },
    {
      title: "Netflix-Clone",
      description: "Netflix Clone is a web application that mimics the popular streaming platform Netflix. It allows users to browse and watch movies and TV shows, providing a similar user experience and features.",
      imgPath: image4,
      ghLink: "https://github.com/harshdubey1198/Netflix-clon",
      demoLink: "https://netflix-clone-hd.vercel.app/",
    },
    {
      title: "Upi-Express",
      description: "This is web payment portal where user is free to transfer currency from their respective bank to receivers bank.",
      imgPath: image5,
      ghLink: "https://github.com/harshdubey1198/upiexpress",
      demoLink: "https://upi-express.netlify.app/",
    },
    {
      title: "Digital Clock",
      description: " This is a digital clock which shows the current time and date. It is designed using Html, Css, Js in the ReactJs environment.",
      imgPath: image6,//project image
      ghLink: "https://github.com/harshdubey1198/digital-watch",
      demoLink: "https://digi-clock-1198.netlify.app/",
    },
  ];

  return (
    <Container fluid className="project-section" style={{ paddingBottom: "150px" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. 
          {/* hello */}
        </p>
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
  