//Education component for portfolio
import React from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineBook } from 'react-icons/ai';
import './Education.css';
import Particle from '../Particle4';
import image1 from "./global.png";
import image2 from "./bff.jpg";

function Education() {
  const educationData = [
    {
      logo: image1,
      institution:'Baderia Global Institute Of Engineering And Management',
      degree: 'Bachelor of Technology',
      year: '2019 - 2023',
      status:'Information Technology',
      marks: 'Percentage : 85.30 %',
    },
    {
      logo:image2,
      institution:'British Fort Foundation',
      degree: 'Senior Secondary Education',
      year: '2018 - 2019',
      status:'12TH (PCM)',
      marks: 'Percentage : 61.59 %',
    },
    {
      logo: image2,
      institution:'British Fort Foundation',
      degree: 'Higher Secondary Education',
      year: '2016 - 2017',
      status:'10TH',
      marks: 'C.G.P.A : 8.8',
    },
  ];

  return (
    <div className="education-section">
      <Particle />
      <Container>
        <h1 className="education-heading" style={{marginTop:"140px" , color:"white",fontWeight:"bolder", fontFamily:"sans-serif"}}>
          <AiOutlineBook /> My <span className="purple" >Education</span>
        </h1>
        <div className="education-card-container" style={{marginBottom:"100px" }}>
          {educationData.map((data, index) => (
            <div className="education-card"  key={index}>
              <div className="education-logo" style={{paddingTop:"20px"}}  >
                <img src={data.logo} style={{borderRadius:"20px"}} alt="Education Logo" />
              </div>
              <div className="education-details" style={{marginTop:"10px"}}>
                <h3 style={{color:"floralwhite",fontWeight:"bolder"}}>{data.institution}</h3>
                <h3 style={{color:"yellowgreen" , fontStyle:"italic"}}>{data.degree}</h3>
                <p style={{color:"tomato"}}>{data.year}</p>
                <p style={{color:"turquoise"}}>{data.status}</p>
                <p style={{color:"pink"}}>{data.marks}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Education;
