import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [ 
          "Front End Developer",
          "Cloud Engineer",
          "React learner",
          "Code enthusiast",
          "Open To Work",
          "Open Source Contributor",
          "React Developer",
          "React Native Developer",
          "Web Developer",
          "Full Stack Developer",
          "Software Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 9,
        
      }}
    />
  );
}

export default Type;//exporting typewriter effect
