
import styles from "./Notes.module.css";



interface NoteProps {
  note: {
    authorId: string;
    title: string;
    content: string;
    id: string;
  };
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const { id, authorId, title, content } = note;

  // let dateString = created;
  // let date = new Date(dateString);
  // let d = new Intl.DateTimeFormat("en-GB", {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric",
  // }).format(date);



  return (
    <div className={styles.note}>
      <h2>~{title}</h2>
      <h3>{content}</h3>
      <h4>{id}</h4>

      <h5>{authorId}</h5>

      {/* <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
        <p className="text-sm text-slate-500 truncate">{created}</p>
      </div> */}

    </div>
  );
};

export default Note;
