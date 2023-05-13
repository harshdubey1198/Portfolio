//// with white text and transparent bg
// import React, { useState } from 'react';
// import Particle from "../Particle3";
// import homeLogo from "../../Assets/home-main.svg";
// import { Container, Card } from 'react-bootstrap';

// const Education = () => {
//   const [educations] = useState([
//     {
//       institution: 'BADERIA GLOBAL INSTITUTE OF ENGINEERING AND MANAGEMENT',
//       degree: 'Bachelor of Technology in Information Technology',
//       startYear: '2019',
//       endYear: '2023',
//       scoredMarks:'8.21 S.G.P.A'
//     },
//     {
//       institution: 'BRITISH FORT FOUNDATION',
//       degree: 'HIGHER SECONDARY EDUCATION',
//       startYear: '2018',
//       endYear: '2019',
//       scoredMarks:'61.59 %'
//     },
//     {
//       institution: 'BRITISH FORT FOUNDATION',
//       degree: 'SENIOR SECONDARY EDUCATION',
//       startYear: '2016',
//       endYear: '2017',
//       scoredMarks:'8.8 C.G.P.A'
//     }
//   ]);
  
//   return (
//     <Container fluid className="education-section">
//       <img
//         src={homeLogo}
//         alt="home pic"
//         className="img-fluid"
//         style={{ maxHeight: "450px" }}
//       />
   
//       <Container className="education-about-section">
//         <Particle />
//         <div>
//           <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}> </h1>
//           <h1 style={{ color: "white", fontSize: "5.4em", paddingBottom: "20px" }}>EDUCATION</h1>
//           {educations.map((education, index) => (
//             <Card key={index} style={{ backgroundColor: "transparent", marginBottom: "20px", border: "none" }}>
//               <Card.Body>
//                 <Card.Title style={{ color: "violet", fontSize: "1.2em" }}>{education.institution}</Card.Title>
//                 <Card.Text style ={{color : "white"}}>
//                   <strong >Degree:</strong> {education.degree}
//                 </Card.Text>
//                 <Card.Text style ={{color : "white"}}>
//                   <strong>Years Attended:</strong> {education.startYear} - {education.endYear}
//                 </Card.Text>
//                 <Card.Text style ={{color : "white"}}>
//                   <strong>Percentage/C.G.P.A Score:</strong> {education.scoredMarks}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       </Container>
//     </Container>
//   );
// };

// export default Education;





// //with card 
// import React, { useState } from 'react';
// import Particle from "../Particle3";
// import homeLogo from "../../Assets/home-main.svg";
// import { Container, Card } from 'react-bootstrap';

// const Education = () => {
//   const [educations] = useState([
//     {
//       institution: 'BADERIA GLOBAL INSTITUTE OF ENGINEERING AND MANAGEMENT',
//       degree: 'Bachelor of Technology in Information Technology',
//       startYear: '2019',
//       endYear: '2023',
//       scoredMarks:'8.21 S.G.P.A'
//     },
//     {
//       institution: 'BRITISH FORT FOUNDATION',
//       degree: 'HIGHER SECONDARY EDUCATION',
//       startYear: '2018',
//       endYear: '2019',
//       scoredMarks:'61.59 %'
//     },
//     {
//       institution: 'BRITISH FORT FOUNDATION',
//       degree: 'SENIOR SECONDARY EDUCATION',
//       startYear: '2016',
//       endYear: '2017',
//       scoredMarks:'8.8 C.G.P.A'
//     }
//   ]);
  
//   return (
//     <Container fluid className="education-section">
//       <img
//         src={homeLogo}
//         alt="home pic"
//         className="img-fluid"
//         style={{ maxHeight: "450px" }}
//       />
   
//       <Container className="education-about-section">
//         <Particle />
//         <div>
//           <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}> </h1>
//           <h1 style={{ color: "white", fontSize: "5.4em", paddingBottom: "20px" }}>EDUCATION</h1>
//           {educations.map((education, index) => (
//             <Card key={index} style={{ backgroundColor: "lightgray", marginBottom: "20px" }}>
//               <Card.Body>
//                 <Card.Title style={{ color: "violet", fontSize: "1.2em" }}>{education.institution}</Card.Title>
//                 <Card.Text>
//                   <strong>Degree:</strong> {education.degree}
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Years Attended:</strong> {education.startYear} - {education.endYear}
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Percentage/C.G.P.A Score:</strong> {education.scoredMarks}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       </Container>
//     </Container>
//   );
// };

// export default Education;



