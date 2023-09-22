import { prisma } from "../lib/prisma";
import { NextResponse } from "next/server";




import { getData } from "../lib/pocketbase";
import CreateNote from "./CreateNote";
import Note from "./Note";










// export const dynamic = 'force-dynamic'
export default async function NotesPage() {









// const notes = await getData()
// console.log(notes)

  interface NoteProps {
    note: {
      Title: string;
      Content: string;
      created: string;
    };
  }
  

  return (
    <>
<div>
        <CreateNote />
        </div>
      <div className="row-span-3 grid gap-2 grid-cols-3">
        {/* {notes?.map((note) => {

          return <Note key={note.id} note={note} />;
        })} */}


</div>

    </>
  );
}
