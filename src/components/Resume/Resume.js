//Resume page for Portfolio.
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

// import Particle from '../Particle3';
import pdf from "../Harsh_it_29.pdf";
import "./resume.css";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer";
import "react-pdf/dist/esm/Page/TextLayer";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://raw.githubusercontent.com/harshdubey1198/portfolio/master/Harsh_it_29.pdf`


const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{paddingTop:"131px"}}>
        
       <Row style={{color:"white"}}>
        <h1>RESUME </h1><h6>PREVIEW</h6>
       </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.0 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
  variant="primary"
  href={pdf}
  target="_blank"
  style={{ maxWidth: "250px", marginBottom: "100px" }}
>
  <AiOutlineDownload />
  Download Resume
</Button>

        </Row>
      </Container>
    </div>
  )
}

export default Resume