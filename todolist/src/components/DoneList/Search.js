import React from "react";

function Search() {
  return (
    <>
      <h3 className="todolisttext">List Done</h3>
      <div>
        <input
          type="text"
          className="inputsearch"
          placeholder="Search list here..."
        />
      </div>
    </>
  );
}

export default Search;
