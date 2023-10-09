"use client";

import { useRef } from "react";
import { createnoteAction } from "../_actions";
import styles from "./Notes.module.css";


const NewNoteForm = () => {

  const colorOptions = ["#EF5D60", "#FFD046", "#A01A7D"];

  //const [selectedColor, setSelectedColor] = useState(colorOptions[1]);


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


// const changeStyle = (color: SetStateAction<string>) => {
//     setSelectedColor(color);
//     console.log(color);
//   };

return (
<>
<form ref={noteFormRef} action={noteAction}>
<div className={styles.note}>
  <div className="flex  w-8 h-8">
<input name="color" type="radio" value="#EF5D60"/>
<input name="color" type="radio" value="#FFD046"/>
<input name="color" type="radio" value="#A01A7D"/>
</div>
<input type="text" name="title" id="" placeholder="Title..."/>
<textarea name="content" id="" placeholder="Content.." />
</div>
{/* <div className="border-2 border-indigo-600">
        {colorOptions.map((color) => (
          <button name="color" type="button"
            key={color}
            style={{ backgroundColor: color }}
          />
        ))}
      </div> */}
<button type="submit">Create note</button>
</form>
</>
  );
};

export default NewNoteForm;
