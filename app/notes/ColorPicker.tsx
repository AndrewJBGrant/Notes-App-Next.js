"use client";

import { SetStateAction, useState } from "react";

const ColorPicker = () => {
  const colorOptions = ["#a522e6", "#d8b1d1", "#421c0c", "green"];

  const [selectedColor, setSelectedColor] = useState(colorOptions[1]);

  const changeStyle = (color: SetStateAction<string>) => {
    setSelectedColor(color);
    console.log(color);
  };
  return (
    <>
      <div>Color seletor will be here</div>
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
