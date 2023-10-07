"use client";
import { getSession, useSession } from "next-auth/react";
import styles from "./Notes.module.css";
export type NoteProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  color: string;
};

const Note: React.FC<{ note: NoteProps }> = ({ note }) => {
  const authorName = note.author ? note.author.name : "Unknown author";

  //   console.log(createdAt.toLocaleDateString());
  // let dateString = createdAt.toLocaleDateString()

  return (
    <>
      <div className={styles.note} style={{ backgroundColor: note.color }}>
        <h4>{note.color}</h4>
        <h2>~{note.title}</h2>
        <h3>{note.content}</h3>
        <p>By {authorName}</p>

        <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
          {/* <p className="text-sm text-slate-500 truncate">{dateString}</p> */}
        </div>
      </div>
    </>
  );
};

export default Note;
