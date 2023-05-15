import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import image1 from "./project1.jpg";
import image2 from "./project2.jpg";
import image3 from "./project3.jpg";
import image4 from "./Project4.jpg";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ paddingBottom: "150px" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image1}
              isBlog={false}
              title="Portfolio"
              description="Portfolio designed for showcasing my information, skills of web development using React.js. This Web app is developed in combination of Html, Css, Js."
              ghLink="https://github.com/harshdubey1198/portfolio"
              demoLink="https://portfolio-maharaaj.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image2}
              isBlog={false}
              title="Jobster"
              description="Jobster web job search portal candidate profile dashboard using React.js. This Web app is developed in combination of Html, Css, Js. React version 18.2.0 is used in the project."
              ghLink="https://github.com/harshdubey1198/Jobster-Major-Project"
              demoLink="https://jobster-major.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image3}
              isBlog={false}
              title="Instant Chat Messenger"
              description="This app is designed using Android-Java concepts. Instant messaging enables users to exchange short messages in real-time over the internet. This is authenticated and similar to WhatsApp. The application focuses on encrypted one-to-one communication for enhanced security and privacy."
              ghLink="https://github.com/harshdubey1198/my-Chatting-application-"
            />
          </Col>

          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={image4}
                isBlog={false}
                title="Netflix-Clone"
                description="Netflix Clone is a web application that mimics the popular streaming platform Netflix. It allows users to browse and watch movies and TV shows, providing a similar user experience and features."
                ghLink="https://github.com/harshdubey1198/Netflix-clon"
                demoLink="https://netflix-clone-hd.vercel.app/"
              />
</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


// import React from 'react';
// import Particle from '../Particle';
// import project1image from './project1.jpg';
// import project2image from './project2.jpg';
// import project3image from './project3.jpg';
// // import project4image from './project1.jpg';

// const Project = () => {
//   const projects = [
//     {
//       title: 'Portfolio',
//       description: (
//         <>
//           <p><b>·</b> Portfolio designed for showcasing my information and skills of web development using React.js.</p>
//           <p><b>·</b> This Web app is developed in combination of HTML, CSS, and JavaScript.</p>
//           <p><b>·</b> Website: <a href="https://portfolio-maharaaj.netlify.app/">Demo</a></p>
//         </>
        
//       ),
//       image: project1image,
//       isFirst: true,
//     },
//     {
//       title: 'Jobster',
//       description: (
//         <>
        
//         <p><b>·</b> Jobster web job search portal candidate profile dashboard using React.js .</p>
//         <p><b>·</b> This Web app is developed in combination of Html,Css,Js.</p>
//         <p><b>·</b> React version 18.2.0 is used in the project.</p>
//         <p><b>·</b> For Demo visit 👇👇</p>
//        <p> <b>·</b> <a href="https://jobster-major.netlify.app/"> https://jobster-major.netlify.app/</a> </p>
//         </>
//       ),
//       image: project2image,
//     },
//     {
//       title:'Instant Chat Messanger',
//       description: (
//         <>
//         <p><b>·</b> This app is designed by Android-Java concepts.</p>
//         <p><b>·</b> This is authenticated and similar as whatsapp.</p>
//         <p><b>·</b> Instant messaging enables users to exchange short messages in real-time over the internet.</p>
//         <p><b>·</b> The application focuses on encrypted one-to-one communication for enhanced security and privacy.</p>



//         </>   )
      
//       ,
//       image: project3image,
//     },
//     // {
//     //   title: 'Project 4',
//     //   description: 'Description of Project 4',
//     //   image: project4image,
//     // },
//   ];

//   return (
//     <div className="project-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '100px 0' }}>
//       {projects.map((project, index) => (
//         <div
//           className="project-card"
//           key={index}
//           style={{
//             flex: '1 1 300px',
//             minWidth: '300px',
//             margin: '10px',
//             textAlign: 'left',
//             paddingLeft: project.isFirst ? '20px' : '0',
//             border: '3px solid #be50f4',
//             color: 'white',
//           }}
//         >
//           <Particle />
//           <img src={project.image} alt={project.title} style={{ maxWidth: '100%', maxHeight: '400px' }} />
//           <h3>{project.title}</h3>
//           <div>{project.description}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Project;
