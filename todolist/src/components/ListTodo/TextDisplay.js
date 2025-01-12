import React, { useState } from "react";
import InputBox from "./InputBox";
import Toggleing from "./Toggleing";

const TextDisplay = () => {
  const [items, setItems] = useState([]);

  const handleTextSubmit = (text) => {
    setItems([...items, { text, completed: false }]);
  };

  const toggleItem = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h3 className="test">To Do List</h3>
      <br />
      <InputBox onTextSubmit={handleTextSubmit} />
      <ul className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg flex items-center justify-between
              ${item.completed ? "bg-gray-50" : "bg-white"}
              border border-gray-200 shadow-sm`}
          >
            <span
              className={item.completed ? "line-through text-gray-500" : ""}
            >
              {item.text}
            </span>
            <Toggleing />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TextDisplay;
