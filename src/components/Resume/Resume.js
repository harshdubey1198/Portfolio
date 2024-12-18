//here in this page you can see the preview of resume and download button.
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from '../Particle4';
// import pdf from "./Harsh_it_29.pdf";
import pdf2 from "./Harsh-resume.pdf"; //component location of resume pdf 
import "./resume.css";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer";
import "react-pdf/dist/esm/Page/TextLayer";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isMobile = width <= 786;

  return (
    <div>
      <Particle />
      <Container fluid className="resume-section" style={{ paddingTop: "81px" }}>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf2}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Document file={pdf2} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={isMobile ? 0.5 : 1.0} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
