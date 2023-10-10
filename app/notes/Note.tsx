"use client";

import DeleteNote from "./DeleteNote";
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

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log(e.target.value);
  }
  return (
    <>
      <div className={styles.note} style={{ backgroundColor: note.color }}>
        {/* <h4>{note.color}</h4> */}

        <div className="text-area">
        <textarea   style={{ backgroundColor: note.color }} contentEditable="true" suppressContentEditableWarning={true} onChange={handleChange}>{note.title}</textarea>
       </div>
        <h3 contentEditable="true" suppressContentEditableWarning={true} >{note.content}</h3>
        <DeleteNote noteId={note.id} />



        <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
          {/* <p className="text-sm text-slate-500 truncate">{dateString}</p> */}
        </div>
      </div>
    </>
  );
};

export default Note;
