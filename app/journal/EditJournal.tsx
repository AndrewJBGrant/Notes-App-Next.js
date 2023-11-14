"use client";

import { useState } from 'react';
import { prisma } from "../lib/prisma";
import { editedJournalAction } from '../_actions';
import { title } from 'process';

const EditJournalForm = ({ journalId, initialContent }: {journalId: string, initialContent: string}) => {
  // const { data: session } = useSession();
  const [content, setContent] = useState(initialContent);

  const handleSave = async () => {

 await editedJournalAction(title, content, journalId)
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
