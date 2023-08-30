import CreateNote from "./CreateNote";
import Note from "./Note";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data?.items as any[];
  //                      ^?
}

export default async function NotesPage() {
const notes = await getNotes();
  // console.log(notes)

  return (


      <div className="row-span-3 grid gap-x-4 gap-y-4 grid-cols-3">
        {notes?.map((note) => {
          // ^?
          return (
            <Note

              key={note.id}
              note={note}
            />
          );
        })}

        <CreateNote />
      </div>

  );
}












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

// const Note: React.FC<NoteProps> = ({ note }) => {
//   const { id, Title, Content, created } = note;


//   let dateString = created;
//   let date = new Date(dateString);
//   let d = new Intl.DateTimeFormat("en-GB", {
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//   }).format(date);

//   return (
//     <div className={styles.note}>
//       <h2>~{Title}</h2>
//       <h3>{Content}</h3>

//       <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
//         <p className="text-sm text-slate-500 truncate">{d}</p>

//       </div>
//     </div>
//   );
// };
