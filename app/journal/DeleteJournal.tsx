"use client";
import { deleteJournalAction } from "../_actions";
import DeleteButton from "../buttons/DeleteButton";

interface JournalDeleteProps {
  journalId: string;
}

const DeleteJournal: React.FC<JournalDeleteProps> = ({ journalId }) => {
  async function handleJournalDelete() {
    await deleteJournalAction(journalId);
    //console.log("Deleting Journal...", journalId)
  }

  return (
    <>
        <DeleteButton onClick={handleJournalDelete} />
    </>
  );
};

export default DeleteJournal;
