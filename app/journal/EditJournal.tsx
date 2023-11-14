"use client";

import { useState } from 'react';
import { editedJournalAction } from '../_actions';

const EditJournalForm = ({ journalId, initialContent }: {journalId: string, initialContent: string}) => {
  const [content, setContent] = useState(initialContent);
  const handleSave = async () => {
 await editedJournalAction(content, journalId)
 console.log(content, "is this edited??");
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value) }
        onBlur={handleSave}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditJournalForm;
