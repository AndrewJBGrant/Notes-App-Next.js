"use client";

import { useState } from 'react';
import { editedJournalAction } from '../_actions';

const EditJournalForm = ({ journalId, initialTitle, initialContent }: {initialTitle: string, journalId: string, initialContent: string}) => {
  const [content, setContent] = useState(initialContent);
    const [title, setTitle] = useState(initialTitle);
  const handleSave = async () => {
 await editedJournalAction(content, journalId)
 console.log(title, content, "JOURNAL is this edited??");
  };

  return (
    <div>
  <input className="text-slate-700 text-2xl font-bold pb-4"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleSave}

      />



      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value) }
        onBlur={handleSave}
      />
      {/* <button onClick={handleSave}>Save Edit</button> */}
    </div>
  );
};

export default EditJournalForm;
