"use client";
import { useRef } from "react";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";
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

    // const NoteEditRef = useRef<HTMLTextAreaElement>({note.title});

    // const enteredText = (NoteEditRef.current! as HTMLTextAreaElement).value;

    // console.log(enteredText, "in Note.tsx looking at useRef")
  return (
    <>
      <div className={styles.note} style={{ backgroundColor: note.color }}>
        {/* <h4>{note.color}</h4> */}

        <div className="text-area">
        <EditNote noteid={note.id} title={note.title} content={note.content} onChange={function (e: any): void {
            throw new Error("Function not implemented.");
          } }/>
       </div>


        {/* <h3 contentEditable="true" suppressContentEditableWarning={true} >{note.content}</h3> */}
        <DeleteNote noteId={note.id} />



        <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
          {/* <p className="text-sm text-slate-500 truncate">{dateString}</p> */}
        </div>
      </div>
    </>
  );
};

export default Note;
