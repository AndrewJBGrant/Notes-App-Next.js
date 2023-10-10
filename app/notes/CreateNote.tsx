"use client";

import { useRef, useState } from "react";
import { createnoteAction } from "../_actions";
import styles from "./Notes.module.css";
import ColorPicker from "./ColorPicker";


const NewNoteForm = () => {
const colorOptions = ["#EF5D60", "#FFD046", "#A01A7D"];



  const noteFormRef = useRef<HTMLFormElement>(null)
  async function noteAction(data: FormData) {

    const title = data.get("title")
    const content = data.get("content")
    const color = data.get("color")

    if (!content || typeof content !== "string") return
    if(!title || typeof title !== "string") return
    if(!color || typeof color !== "string") return

   await createnoteAction(title, content, color)


   console.log(title, content, color, "coming from createNote.tsx")
noteFormRef.current?.reset()

}

return (
<>
<form ref={noteFormRef} action={noteAction}>
<div className={styles.note}>

{/* {colorOptions.map((color) => (
  <button
  key={color}
  type={"button"}
  style={{backgroundColor: color}}
  name={"color"} />
)
)} */}




<input type="text" name="title" id="" placeholder="Title..."/>
<textarea name="content" id="" placeholder="Content.." />
</div>
<div className="border-2 border-indigo-600">

 <input name="color" type="radio" value="#EF5D60"/>
 <input name="color" type="radio" value="#FFD046" style={ {height: 30,
              width: 30, backgroundColor: "#FFD046"}}/>
 <input name="color" type="radio" value="#A01A7D" style={ {height: 30,
              width: 30, backgroundColor: "#A01A7D"}}/>
      </div>
<button type="submit">Create note</button>
</form>
</>
  );
};

export default NewNoteForm;
