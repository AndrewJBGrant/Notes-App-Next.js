"use client";

import { SetStateAction, useState } from "react";

const ColorPicker = () => {
  const colorOptions = ["#FEFFBF", "#B0EFEF", "#F498C2"];

  const [selectedColor, setSelectedColor] = useState(colorOptions[1]);

  const changeStyle = (color: SetStateAction<string>) => {
    setSelectedColor(color);
    // console.log(color, "coming from color picker!!!");
  };
  return (
    <>
        {colorOptions.map((color) => (
          <button
          type="button"
            className={`color-select ${
              color === selectedColor ? "selected" : ""
            }`}
            key={color}
            name="color"
            style={{
              height: 30,
              width: 30, backgroundColor: color }}
            onClick={() => changeStyle(color)}
          />
        ))}
    </>
  );
};

export default ColorPicker;
