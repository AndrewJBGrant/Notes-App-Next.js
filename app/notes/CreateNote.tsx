"use client";

import { useRef } from "react";
import { createnoteAction } from "../_actions";
import { SetStateAction, useState } from "react";



const NewNoteForm = () => {
  const colorOptions = ["#EF5D60", "#FFD046", "#A01A7D"];

  const [selectedColor, setSelectedColor] = useState(colorOptions[1]);


  const noteFormRef = useRef<HTMLFormElement>(null)
  async function noteAction(data: FormData) {
    const title = data.get("title")
    const content = data.get("content")
    const color = data.get("color")
    if (!content || typeof content !== "string") return
    if(!title || typeof title !== "string") return
    if(!color || typeof color !== "string") return

    await createnoteAction(title, content, color)
    console.log(title, content, color)
noteFormRef.current?.reset()


}


const changeStyle = (color: SetStateAction<string>) => {
    setSelectedColor(color);
    console.log(color);
  };









  return (
<>
<form ref={noteFormRef} action={noteAction}>

<h2>Create A new Note</h2>
<h3>Title</h3>
<input type="text" name="title" id="" />
<h3>Content</h3>
<input type="text" name="content" id="" />


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


<button type="submit">Create note</button>




</form>

</>

  );
};

export default NewNoteForm;
