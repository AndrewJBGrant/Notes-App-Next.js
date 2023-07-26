import Link from "next/link";
import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>NOTES</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, Title, Content, created } = note || {};

//   let d = created;
// d = d.split(' ')[0];

let dateString = created;
let date = new Date(dateString);
let d = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric', month: 'numeric', day: 'numeric',
}).format(date);




  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{Title}</h2>
        <h5>{Content}</h5>
        <p>{d}</p>
      </div>
    </Link>
  );
}
