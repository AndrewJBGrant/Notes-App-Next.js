"use client"

import { deleteJournalAction } from "../_actions";

interface JournalDeleteProps {
  journalId: string;
}

const DeleteJournal: React.FC<JournalDeleteProps> = ({ journalId }) => {
  async function handleJournalDelete() {
    await deleteJournalAction(journalId);
    //console.log("Deleting Journal...", journalId)
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleJournalDelete}
    >
      Delete Entry
    </button>
  );
};

export default DeleteJournal;
