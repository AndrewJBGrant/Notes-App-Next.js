"use client"
import { deleteJournalAction } from "../_actions";
import DeleteButton from "../DeleteButton";

interface JournalDeleteProps {
  journalId: string;
}

const DeleteJournal: React.FC<JournalDeleteProps> = ({ journalId }) => {
  async function handleJournalDelete() {
    await deleteJournalAction(journalId);
    //console.log("Deleting Journal...", journalId)
  };

  return (
    <>
    <button
      className=" bg-[#4F5480] hover:bg-accent text-[#FBF6EE] font-bold py-2 px-4 rounded"
      onClick={handleJournalDelete}
    >
      Delete
    </button>

    <DeleteButton
      onClick={handleJournalDelete} />
</>
  );
};

export default DeleteJournal;
