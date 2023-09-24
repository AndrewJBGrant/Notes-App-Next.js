"use client";

import { SetStateAction, useState } from "react";

const ColorPicker = () => {
  const colorOptions = ["#EF5D60", "#FFD046", "#A01A7D"];

  const [selectedColor, setSelectedColor] = useState(colorOptions[1]);

  const changeStyle = (color: SetStateAction<string>) => {
    setSelectedColor(color);
    console.log(color);
  };
  return (
    <>

      <div className="border-2 border-indigo-600">
        {colorOptions.map((color) => (
          <button
            className={`color-select ${
              color === selectedColor ? "selected" : ""
            }`}
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => changeStyle(color)}
          />
        ))}
      </div>
    </>
  );
};

export default ColorPicker;
