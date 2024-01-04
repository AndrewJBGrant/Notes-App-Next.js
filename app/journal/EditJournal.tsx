"use client";

import { useState } from "react";
import { editedJournalAction } from "../_actions";
// import { HighlightLinks } from '../HighlightLinks';
// import Journal from "./Journal";

const EditJournalForm = ({
  journalId,
  initialTitle,
  initialContent,
}: {
  initialTitle: string;
  journalId: string;
  initialContent: string;
}) => {
  const [content, setContent] = useState(initialContent);
  const [title, setTitle] = useState(initialTitle);
  const handleSave = async () => {
    await editedJournalAction(title, content, journalId);
    //  console.log(title, content, "JOURNAL is this edited??");
  };

  // const Component = ({
  //   children,
  // }: {
  //   children: React.ReactNode;
  // }) => {
  //   return <div>{children}</div>;
  // };

  // const linkableContent = ({ children, } : {children: React.ReactNode }) => {
  // return (
  //  <HighlightLinks content={content} />
  //       )
  // }

  return (
    <div>
      <input
      spellCheck={true}
      
        className="text-slate-700 text-2xl font-bold pb-4"
        // type="text"
        // id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleSave}
      />

      <textarea
      spellCheck={true}
      value={content}
      onChange={(e) => setContent(e.target.value)}
      onBlur={handleSave}
      />
    </div>
  );
};

export default EditJournalForm;
