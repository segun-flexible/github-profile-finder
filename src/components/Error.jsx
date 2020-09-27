import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Error = ({ message }) => {
  return (
    <center>
      <h2>
        {<FontAwesomeIcon icon="exclamation-triangle" />} {message}
      </h2>
    </center>
  );
};

export default Error;
