import React, { useState } from "react";
import Search from "./Search";

function TextDoneDisplay() {
  const [donelist, setDonelist] = useState([]);

  const handComplete = (donetext) => {
    setDonelist([...donelist, { donetext, completed: true }]);
  };
  return (
    <div>
      <Search onTextSubmit={handComplete} />
    </div>
  );
}

export default TextDoneDisplay;
