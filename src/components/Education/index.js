import React, { useState } from 'react';
import Particle from "../Particle3";
import homeLogo from "../../Assets/home-main.svg";
import { Container } from 'react-bootstrap';

const Education = () => {
  const [educations] = useState([
    {
      institution: 'BADERIA GLOBAL INSTITUTE OF ENGINEERING AND MANAGEMENT',
      degree: 'Bachelor of Technology in Information Technology',
      startYear: '2019',
      endYear: '2023',
      scoredMarks:' 8.21 S.G.P.A'
    },
    {
      institution: 'BRITISH FORT FOUNDATION',
      degree: 'HIGHER SECONDARY EDUCATION',
      startYear: '2018',
      endYear: '2019',
      scoredMarks:' 61.59 %'
    },
    {
      institution: 'BRITISH FORT FOUNDATION',
      degree: 'SENIOR SECONDARY EDUCATION',
      startYear: '2016',
      endYear: '2017',
      scoredMarks:' 8.8 C.G.P.A'
    }
  ]);
  
  return (
    <Container fluid className="education-section">
      <img
        src={homeLogo}
        alt="home pic"
        className="img-fluid"
        style={{ maxHeight: "450px" }}
      />
   
      <Container classname="education-about-section">
        <Particle />
        <div>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}> </h1>
          <h1 style={{color: "white", fontSize: "5.4em", paddingBottom: "20px" }} >EDUCATION</h1>
          {educations.map((education, index) => (
            <div key={index} style={index === educations.length - 1 ? { paddingBottom: "100px" } : null}>
              <h1 style={{color:"violet", fontSize:"1em", paddingBottom:"20px"}}>{education.institution}</h1>
              <p>
                <h7> <font color="lightgreen"> Degree : </font><font color="white">{education.degree}</font></h7>
              </p>
              <p>
                <h10> <font color="white"> Years Attended:</font> <font color="iceblue">{education.startYear} - {education.endYear}</font></h10>
              </p>
              <p>
                <b><h15> <font color="orange">Percentage/C.G.P.A Score : </font></h15></b><h15><font color="yellow">{education.scoredMarks}</font></h15>
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Education;
