"use client";

import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";

export default function CreateNote() {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');

  const router = useRouter();


  const create = async() => {

await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    Title,
    Content,
  }),
});

 setContent('');
    setTitle('');

    router.refresh();
}

const titleChangehandler = (e: { target: { value: SetStateAction<string>; }; }) => {
  // console.log(e);
  // console.log(e.target.value);
  setTitle(e.target.value)
}

  return (

    <form className="p-6 max-w-sm mx-auto w-2/3" onSubmit={create}>
      <h3>Whats on your mind today?</h3>
      <input
        type="text"
        placeholder="Title"
        value={Title}
        onChange={titleChangehandler}
      />
      <textarea className=""
        placeholder="Share your toughts and musings..."
        value={Content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        Create Note
      </button>
    </form>
  );
}
