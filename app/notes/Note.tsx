"use client"
import { deleteNote, editNote } from "../lib/pocketbase";
import { revalidatePath } from "next/cache";

import styles from "./Notes.module.css";


interface NoteProps {
  note: {
    id: string;
    Title: string;
    Content: string;
    created: string;
  };

  //   color: {
  // backgroundColor: string;
  //   }
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const { id, Title, Content, created } = note;

  // let dateString = created;
  // let date = new Date(dateString);
  // let d = new Intl.DateTimeFormat("en-GB", {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric",
  // }).format(date);

const delete_note = async (formData: FormData) => {

  deleteNote(id);
  console.log(id)

  revalidatePath(`/notes/page`);
}

    const handleNoteEdit = async(e: {
      id: any;  currentTarget: { textContent: any; };
}) => {
editNote(( e.id, e.currentTarget.textContent));
 console.log(e.currentTarget.textContent);

};


  return (
    <div className={styles.note}>
      <h2>~{Title}</h2>
      <h3 contentEditable="true" onInput={handleNoteEdit} suppressContentEditableWarning={true}>{Content}</h3>
      <h4>{id}</h4>

      <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
        <p className="text-sm text-slate-500 truncate">{created}</p>
      </div>
<form action={delete_note}>
  <button type="submit">Delete</button></form>

    </div>
  );
};

export default Note;
