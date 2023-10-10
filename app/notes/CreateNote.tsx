"use client";

import { useRef, useState } from "react";
import { createnoteAction } from "../_actions";
import styles from "./Notes.module.css";
import ColorPicker from "./ColorPicker";

const NewNoteForm = () => {
  const colorOptions = ["#EEFF55", "#FFFFDD", "#A01A7D"];

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
        <div className={styles.note}>
        <div className="flex">

           {colorOptions.map((color) => (
  <input
  key={color}
  type={"radio"}
  value={color}
  style={{ height: 18, width: 18, backgroundColor: color}}
  name={"color"} />
)
)}

        </div>

          <input type="text" name="title" id="" placeholder="Title..." />
          <textarea name="content" id="" placeholder="Content.." />
        <button type="submit">Create note</button>
        </div>


      </form>
    </>
  );
};

export default NewNoteForm;
