"use client"
// import { useRouter } from "next/router";


interface NoteDeleteProps {
  noteId: string;
  onDelete: (noteId: string) => void;
}

function DeleteNote: React.FC<NoteDeleteProps> = ({ noteId: string, onDelete }) {

  // const router = useRouter();
const handleDeleteClick = () => {
  onDelete(noteId);
}



const handleNoteDelete = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8090/api/collections/Notes/records/${noteId}`, {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
  },

})


   if (response.ok) {
      console.log('Note deleted successfully');
    } else {
      console.error('Error deleting note Christ');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};



return (
  <button onClick={handleDeleteClick}>DeleteNOTETESTING</button>
)
}


export default DeleteNote;
