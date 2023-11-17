"use client";

import { useState } from "react";
import { editNoteAction } from "../_actions";

const EditNoteForm = ({
  noteId,
  initialTitle,
  initialContent,
}: {
  noteId: string;
  initialTitle: string;
  initialContent: string;
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSave = async () => {
    await editNoteAction(title, content, noteId);
    // console.log("NOTES", title, "edited title", content, "edited content");
  };

  return (
    <>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleSave}


      />

      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onBlur={handleSave}
      />
    </>
  );
};

export default EditNoteForm;
