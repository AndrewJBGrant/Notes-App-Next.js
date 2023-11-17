"use client";

import { useRef, useState } from "react";
import { createnoteAction } from "../_actions";
import styles from "./Notes.module.css";


const NewNoteForm = () => {
  const colorOptions = ["#FEFFBF", "#B0EFEF", "#F498C2"];

  const [selectedColor, setSelectedColor] = useState("white");

  const noteFormRef = useRef<HTMLFormElement>(null);
  async function noteAction(data: FormData) {
    const title = data.get("title");
    const content = data.get("content");
    const color = data.get("color");

    if (!content || typeof content !== "string") return;
    if (!title || typeof title !== "string") return;
    if (!color || typeof color !== "string") return;

    await createnoteAction(title, content, color);

    console.log(title, content, color, "coming from createNote.tsx");
    noteFormRef.current?.reset();
  }

  return (
    <>
      <form ref={noteFormRef} action={noteAction}>
        <div className={styles.note} style={{background: selectedColor}}>
        <div className="flex">

           {colorOptions.map((color) => (
  <input
  key={color}
  type={"radio"}
  value={color}
  style={{ height: 20, width: 20, backgroundColor: color}}
  name={"color"}
  onClick={() => setSelectedColor(color)} />
)
)}

        </div>

          <input style={{background: selectedColor}} type="text" name="title" placeholder="Title..." />
          <textarea style={{background: selectedColor}} name="content" placeholder="Content.." />
        <button type="submit">Create note</button>
        </div>


      </form>
    </>
  );
};

export default NewNoteForm;
