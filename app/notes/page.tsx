"use client";

import { useState } from 'react';

import { useRouter } from "next/navigation";

// import Link from "next/link";
import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data?.items as any[];
  //                      ^?
}

export default async function NotesPage() {


  const notes = await getNotes();

  return (
    <div>
      <h1>NOTES</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} onDelete={function (noteId: string): void {
            throw new Error("Function not implemented.");
          } } />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

async function deleteNote(noteId: string): Promise<void> {
  const [Content, setContent] = useState('');
  try {
    const apiUrl = `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`;
    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers you might need, like authorization headers
      },
    });

  const router = useRouter();

   router.refresh();
    if (response.ok) {
      console.log('Note deleted successfully');
    } else {
      throw new Error('Error deleting note');
    }
  } catch (error) {
    console.error(error);
  }

}










interface NoteProps {
  note: {
    id: string;
    Title: string;
    Content: string;
    created: string;
  };
  onDelete: (noteId: string) => void; // Prop to update UI after deletion
}

const Note: React.FC<NoteProps> = ({ note, onDelete }) => {
  const { id, Title, Content, created } = note


  const handleDeleteClick = async () => {
    try {
      await deleteNote(id); // Call deleteNote function
      onDelete(id); // Update UI locally
    } catch (error) {
      console.error('Error deleting note', error);
    }
  };



// function Note({ note }: any) {
//   const { id, Title, Content, created } = note || {};

  //   let d = created;
  // d = d.split(' ')[0];

  let dateString = created;
  let date = new Date(dateString);
  let d = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);

  return (

      <div className={styles.note}>
        <h2>~{Title}</h2>
        <h3>{Content}</h3>
        <p className="text-sm text-slate-500 truncate">{d}</p>
        <button onClick={handleDeleteClick}>Delete note</button>
      </div>
  );
}
