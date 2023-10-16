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
          "Open To Work",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 9,
        
      }}
    />
  );
}

export default Type;//exporting typewriter effect
