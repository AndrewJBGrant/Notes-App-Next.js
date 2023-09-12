"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createNote } from "../lib/pocketbase";

// // import ColorPicker from "./ColorPicker";

export default function CreateNote() {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
const router = useRouter();

const newNote = async() => {




//  await fetch('http://127.0.0.1:8090/api/collections/Notes/records', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         Title,
//         Content,
//       }),
//     });

//     setContent('');
//     setTitle('');

//   }



createNote(Title, Content)


// createNote(Title, Content)
console.log(Title, Content)
console.log("submitted")
     router.refresh();
}

  const titleChangehandler = (e) => {
    // console.log(e);
    // console.log(e.target.value);
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
