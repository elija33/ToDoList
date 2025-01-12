import React, { useState } from "react";
import App from "../../../src/App";

const Submit = ({ onClick }) => {
  return (
    <button id="buttoing" onClick={onClick}>
      Submit
    </button>
  );
};

export default Submit;
