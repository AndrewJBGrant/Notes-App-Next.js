"use client";

import { useRef } from "react";
import { createJournalAction } from "../_actions";

const NewJournalForm = () => {

const journalFormRef = useRef<HTMLFormElement>(null);
async function journalAction(data: FormData) {
  const title = data.get("title");
  const content = data.get("content");

  if (!content || typeof content !== "string") return;
    if (!title || typeof title !== "string") return;


    await createJournalAction(title, content);

    console.log(title, content, "coming from createNote.tsx");
    journalFormRef.current?.reset();



}








return (
<>
<h2>New Journals here!!!</h2>

<form ref={journalFormRef} action={journalAction}>

<input type="text" name="title" id="" placeholder="Current Date 22/10/2023" />
<input type="text" name="content" placeholder="Content here..." />
  <button type="submit">Create Journal</button>

</form>


</>


)



};

export default NewJournalForm;
