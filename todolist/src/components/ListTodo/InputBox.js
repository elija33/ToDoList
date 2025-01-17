import React, { useState } from "react";
import Submit from "./Submit";

const InputBox = ({ onTextSubmit }) => {
  const [texting, setTexting] = useState("");
  const [error, setError] = useState("");

  const texthandle = (e) => {
    setTexting(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = () => {
    // Only show error if the input is empty (no whitespace)
    if (!texting.trim()) {
      setError("Enter Some List Here");
      return;
    }
    onTextSubmit(texting);
    setTexting("");
    setError("");
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={texting}
        onChange={texthandle}
        className="inputtext"
        placeholder="Add new item"
      />
      <Submit onClick={handleSubmit} />
      {error && <p className="textcolor">{error}</p>}
    </div>
  );
};

export default InputBox;
