"use client";

import { useRef } from "react";
import { createnoteAction } from "../_actions";

const NewNoteForm = () => {
  const noteFormRef = useRef<HTMLFormElement>(null)

  async function noteAction(data: FormData) {
    const title = data.get("title")
    const content = data.get("content")
    if (!content || typeof content !== "string") return

    if(!title || typeof title !== "string") return


    await createnoteAction(title, content)

    noteFormRef.current?.reset()



  }

  return (
<>
<form ref={noteFormRef} action={noteAction}>
<h2>Create A new Note</h2>
<h3>Title</h3>
<input type="text" name="title" id="" />
<h3>Content</h3>
<input type="text" name="content" id="" />

<button type="submit">Create note</button>




</form>

</>

  );
};

export default NewNoteForm;
