
import { getData } from "../lib/pocketbase";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useSearchParams } from "next/navigation";

// async function getNotes() {

//   const res = await fetch(
//     'http://127.0.0.1:8090/api/collections/Notes/records',
//     {
//       cache: "no-store",
//     }
//   );
//   const data = await res.json();
//   return data?.items as any[];
//   //                      ^?
// }

// async function getData() {
// const res = await fetch('http://127.0.0.1:8090/api/collections/Notes/records')

// if(!res.ok) {
//   throw new Error("failed to fetch your data you stupid")
// }
// return res.json
// }






export default async function NotesPage() {
const notes = await getData()


// console.log(notes, "finally we have notes")
  // const [notes, setNotes] = useState([])

  // getNotes()
  // .then((res) => console.log(res, " is this better"));

  // const notes = await getNotes();
  // console.log(notes, "good god??");





  interface NoteProps {
    note: {
      Title: string;
      Content: string;
      created: string;
    };
  }

  return (
    <>

      <div className="row-span-3 grid gap-2 grid-cols-3">
        {notes?.map((note) => {
          // ^?
          return <Note key={note.id} note={note} />;
        })}

</div>

    </>
  );
}
