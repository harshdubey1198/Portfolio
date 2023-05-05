

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="harshdubey1198"
        blockSize={20}
        blockMargin={10}
        color="violet"
        fontSize={16}
       // fullYear="false"
      /><h5 style={{paddingBottom:"1px"}}>.</h5>
    </Row>
  );
}

export default Github;

