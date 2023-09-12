
import DeleteNote from "./DeleteNote";
import styles from "./Notes.module.css";
// import DeleteNote from "./DeleteNote";


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

  return (
    <div className={styles.note}>
      <h2>~{Title}</h2>
      <h3>{Content}</h3>

      <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
        <p className="text-sm text-slate-500 truncate">{created}</p>
      </div>

    </div>
  );
};

export default Note;
