"use client";
import { useRef } from "react";
import DeleteNote from "./DeleteNote";
import styles from "./Notes.module.css";
import { HighlightLinks } from "../HighlightLinks";
import EditNoteForm from "./EditNote";

export type NoteProps = {
  id: string;
  title: string;
  author?: {
    name?: string | null;
  } | null;
  content: string;
  color?: string | null;
  createdAt: Date;
};

const Note: React.FC<{ note: NoteProps }> = ({ note }) => {
  const authorName = note.author ? note.author.name : "Unknown author";

  //   console.log(createdAt.toLocaleDateString());
  let dateString = note.createdAt.toLocaleDateString();

  return (
    <>
      <div className={styles.note} style={{ backgroundColor: note.color! }}>
        <div>
          <EditNoteForm
            noteId={note.id}
            initialContent={note.content}
            initialTitle={note.title}
          />

          {/* <HighlightLinks content={note.content} /> */}
        </div>

        {/* <textarea className="resize-none" wrap="off" style={{ backgroundColor: note.color }} name="content"
          defaultValue={note.content} /> */}

        <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
          <p className="text-sm text-slate-500 truncate">{dateString}</p>
          <DeleteNote noteId={note.id} />
        </div>
      </div>
    </>
  );
};

export default Note;
