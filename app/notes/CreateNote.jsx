"use client";

import { SetStateAction, useState } from "react";
import { createNote } from "../lib/pocketbase";

// import { useRouter } from "next/navigation";
// // import ColorPicker from "./ColorPicker";

export default function CreateNote() {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

const handleSubmit = () => {
createNote(Title, Content)
console.log(Title, Content)
console.log("submitted")
}

  const titleChangehandler = (e) => {
    // console.log(e);
    //console.log(e.target.value);
    setTitle(e.target.value);
  };

  return (
    <>
      {/* <ColorPicker /> */}
      <form onSubmit={handleSubmit}>
        <h3>Create Note component</h3>

        <input
          type="text"
          placeholder="Title"
          value={Title}
          onChange={titleChangehandler}
        />
        <textarea
          // className="color-preview" style={{ backgroundColor: selectedColor }}
          placeholder="Share your toughts and musings..."
          value={Content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">New Note</button>
      </form>
    </>
  );
}
