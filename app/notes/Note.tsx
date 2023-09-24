
import styles from "./Notes.module.css";



interface NoteProps {
  note: {
    user: string;
    title: string;
    content: string;
    id: string;
    createdAt: dateTime;
    color: string;
  };
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const { color, user, title, content, createdAt } = note;

  // console.log(createdAt, "date")


  console.log(createdAt.toLocaleDateString());
let dateString = createdAt.toLocaleDateString()



  return (
    <div className={styles.note} style={{ backgroundColor: note.color }}>
      <h4>{color}</h4>
      <h2>~{title}</h2>
      <h3>{content}</h3>
<h4>{user}</h4>

      <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
        <p className="text-sm text-slate-500 truncate">{dateString}</p>
      </div>

    </div>
  );
};

export default Note;
