import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [ 
          "Developer",
          "Cloud Engineer",
          "React learner",
          "Code enthusiast",
          "Open Source Contributor",
          "Open To Work",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 8,
        
      }}
    />
  );
}

export default Type;
