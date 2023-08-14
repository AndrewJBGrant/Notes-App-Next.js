"use client";
import styles from "./Notes.module.css";
// import Link from "next/link";
import CreateNote from "./CreateNote";
import { useState, useEffect } from "react";

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

  const [newNotes, setNewNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const fetchedNotes: any = await getNotes();
      setNewNotes(fetchedNotes);
    }

    fetchNotes();
  }, []);







const notes = await getNotes();
  //  console.log(notes)

  return (
    <div className="border-solid border-2 border-green-600 w-1/2">
      <h1>NOTE Componet</h1>
      <div className="grid gap-x-8 gap-y-8 grid-cols-3">
        {notes?.map((note) => {
          // ^?
          return (
            <Note
              key={note.id}
              note={note}
             onDelete={() => handleNoteDelete(note.id)}
            />
          );
        })}
      </div>
      <CreateNote />
    </div>
  );
}

async function deleteNote(noteId: string): Promise<void> {
  try {
    const apiUrl = `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`;
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you might need, like authorization headers
      },
    });

    if (response.ok) {
      console.log("Note deleted successfully");
    } else {
      throw new Error("Error deleting note");
    }
  } catch (error) {
    console.log(error);
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
  const { id, Title, Content, created } = note;

  const handleDeleteClick = async () => {
    try {
      await deleteNote(id); // Call deleteNote function
      onDelete(id); // Update UI locally
    } catch (error) {
      console.error("Error deleting note", error);
    }
  };

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

      <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
        <p className="text-sm text-slate-500 truncate">{d}</p>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};
