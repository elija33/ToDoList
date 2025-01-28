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
      <ul className="listdone">
        {donelist.map((item, index) => (
          <div key={index}></div>
        ))}
      </ul>
    </div>
  );
}

export default TextDoneDisplay;
