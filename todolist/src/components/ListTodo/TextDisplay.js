import React, { useState } from "react";
import InputBox from "./InputBox";
import Toggle from "./Tringtoggle";

const TextDisplay = () => {
  const [items, setItems] = useState([]);

  const handleTextSubmit = (text) => {
    setItems([...items, { text, completed: false, isToggled: false }]);
  };

  const toggleItem = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const toggleSwitch = (index) => {
    const newItems = [...items];
    newItems[index].isToggled = !newItems[index].isToggled;
    setItems(newItems);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h3 className="todolisttext text-2xl font-bold mb-4">To Do List</h3>
      <InputBox onTextSubmit={handleTextSubmit} />
      <ul className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg flex items-center justify-between cursor-pointer
              ${item.completed ? "bg-gray-50" : "bg-white"}
              border border-gray-200 shadow-sm hover:bg-gray-50`}
          >
            <div onClick={() => toggleItem(index)} className="listtodo">
              <span onClick={() => toggleItem(index)} className="textlist">
                {item.text}
              </span>
            </div>
            <Toggle
              isChecked={item.isToggled}
              onChange={() => toggleSwitch(index)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default TextDisplay;
