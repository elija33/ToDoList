import React, { useEffect, useState } from "react";

function Search() {
  const [listdone, setListdone] = useState("");
  useEffect(() => {
    console.log(listdone);
  }, [listdone]);
  return (
    <>
      <h3 className="todolisttext">List Done</h3>
      <div>
        <input
          type="text"
          className="inputsearch"
          value={listdone}
          onChange={(e) => setListdone(e.target.value)}
          placeholder="Search list here..."
        />
      </div>
    </>
  );
}

export default Search;
