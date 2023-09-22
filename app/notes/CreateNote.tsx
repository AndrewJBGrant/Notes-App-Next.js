"use client";

import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { createNote } from "../lib/pocketbase";

// // import ColorPicker from "./ColorPicker";

export default function CreateNote() {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
const router = useRouter();

const newNote = async() => {
createNote(Title, Content)
     setContent('');
     setTitle('');
     router.refresh();
}

  const titleChangehandler = (e: { target: { value: SetStateAction<string>; }; }) => {
 setTitle(e.target.value);

};

  return (
    <>
      {/* <ColorPicker /> */}
      <form action={newNote}>
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
