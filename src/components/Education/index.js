import React from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineBook } from 'react-icons/ai';
import './Education.css';
import Particle from '../Particle';
import image1 from "./global.png";
import image2 from "./bff.jpg";

function Education() {
  const educationData = [
    {
      logo: image1,
      institution:'Baderia Global Institute Of Engineering And Management',
      degree: 'Bachelor of Technology',
      year: '2019 - 2023',
      status:'Ongoing',
      marks: 'C.G.P.A : 8.52',
    },
    {
      logo:image2,
      institution:'British Fort Foundation',
      degree: 'Senior Secondary Education',
      year: '2018 - 2019',
      status:'PCM',
      marks: 'Percent : 61.59 %',
    },
    {
      logo: image2,
      institution:'British Fort Foundation',
      degree: 'Higher Secondary Education',
      year: '2016 - 2017',
      marks: 'C.G.P.A : 8.8',
    },
  ];

  return (
    <div className="education-section">
      <Particle />
      <Container>
        <h1 className="education-heading" style={{marginTop:"170px" , color:"white"}}>
          <AiOutlineBook /> My <span className="purple">Education</span>
        </h1>
        <div className="education-card-container" style={{marginBottom:"100px" }}>
          {educationData.map((data, index) => (
            <div className="education-card" key={index}>
              <div className="education-logo" >
                <img src={data.logo} alt="Education Logo" />
              </div>
              <div className="education-details" style={{marginTop:"10px"}}>
                <h3 style={{color:"floralwhite"}}>{data.institution}</h3>
                <h3 style={{color:"yellowgreen" , fontStyle:"italic"}}>{data.degree}</h3>
                <p style={{color:"tomato"}}>{data.year}</p>
                <p style={{color:"turquoise"}}>{data.status}</p>
                <p style={{color:"lightpink"}}>{data.marks}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Education;
