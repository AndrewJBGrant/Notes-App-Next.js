"use client";



import { useRef } from "react";
import { createnoteAction } from "../_actions";
import { SetStateAction, useState } from "react";
import Users from "../users/page";
import { prisma } from "../lib/prisma";




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

<h2>Create A new Note</h2>
<h3>Title</h3>
<input type="text" name="title" id="" />
<h3>Content</h3>
<input type="text" name="content" id="" />



<input name="color" type="radio" value="#EF5D60"/>
<input name="color" type="radio" value="#FFD046"/>
<input name="color" type="radio" value="#A01A7D"/>







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
