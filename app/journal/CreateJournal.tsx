"use client";

import { useRef } from "react";
import { createJournalAction } from "../_actions";

const NewJournalForm = () => {
  const journalFormRef = useRef<HTMLFormElement>(null);
  async function journalAction(data: FormData) {
    const title = data.get("title");
    if (!title) {
     return {datePlaceholer}
    }
    const content = data.get("content");

    if (!content || typeof content !== "string") return;
    if (!title || typeof title !== "string") return;

    await createJournalAction(title, content);

    console.log(title, content, "coming from createNote.tsx");
    journalFormRef.current?.reset();
  }

  const datePlaceholer = new Date().toLocaleDateString()

  return (
    <>
      <form  className="w-full flex flex-col shadow my-4 p-3" ref={journalFormRef} action={journalAction}>
        <input
          type="text"
          name="title"
          id=""
          placeholder={datePlaceholer}
        />
        <textarea rows={10}  name="content" placeholder="What have you been working on..." />
        <button type="submit">Create Journal</button>
      </form>
    </>
  );
};

export default NewJournalForm;
