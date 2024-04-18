import React from "react";
import Typewriter from "typewriter-effect";
// import useLocales from "../../hooks/useLocales";

function Type() {
  // const { translate } = useLocales();
  return (
    <Typewriter
      options={{
        strings: [
          "a Data Engineer",
          "a Data Scientist",
          "and an AI Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 30,
        
      }
      }
    />
  );
}

export default Type;
