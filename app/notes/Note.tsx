"use client"
import { getSession, useSession } from 'next-auth/react';
import styles from "./Notes.module.css";



interface NoteProps {
  note: {
    title: string;
    content: string;
    id: string;
    createdAt: Date;
    color: string;
  };
}


const Note: React.FC<NoteProps> = ( { note }, props ) => {
 const { data: session, status } = useSession();
 // console.log( session, "taken from getSession")
  const { color, title, content, createdAt } = note;

  // console.log(createdAt, "date")


//   console.log(createdAt.toLocaleDateString());
 let dateString = createdAt.toLocaleDateString()

  const noteBelongsToUser = session?.user?.email === props.author?.email;



  return (
    <div className={styles.note} style={{ backgroundColor: note.color }}>
      <h4>{color}</h4>
      <h2>~{title}</h2>
      <h3>{content}</h3>
       <p>By {props?.author?.name || 'Unknown author'}</p>

 {noteBelongsToUser && (
          <p>{props.author?.email}</p>
        )}



{/* <h4>{session?.user?.name}</h4> */}


      <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
        {/* <p className="text-sm text-slate-500 truncate">{dateString}</p> */}
      </div>

    </div>
  );
};

export default Note;
