"use client";

import DeleteNote from "./DeleteNote";
import styles from "./Notes.module.css";
// import { HighlightLinks } from "../HighlightLinks";
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

  let dateString = note.createdAt.toLocaleDateString();

  return (
      <section className={styles.note} style={{ backgroundColor: note.color! }}>
        <div className="w-full">
          <EditNoteForm
            noteId={note.id}
            initialContent={note.content}
            initialTitle={note.title}

          />

          {/* <HighlightLinks content={note.content} /> */}
        </div>

        {/* <textarea className="resize-none" wrap="off" style={{ backgroundColor: note.color }} name="content"
          defaultValue={note.content} /> */}

        <div className="text-base font-semibold leading-7 flex justify-between items-center">
          <span className="text-sm text-slate-900 truncate">{dateString}</span>
          <DeleteNote noteId={note.id} />
        </div>
      </section>

  );
};

export default Note;
