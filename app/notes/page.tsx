import CreateNote from "./CreateNote";
import { prisma } from '../lib/prisma';
import Note from "./Note";


  interface NoteProps {
    note: {
      title: string;
      content: string;
      authorId: string;
      id: string;
    };
  }


export default async function Notes() {
  const notes = await prisma.note.findMany();

  console.log(notes)

  return (
  <div className="row-span-3 grid gap-2 grid-cols-3">
      {notes.map((note) => {
        return(

          <Note key={note.id} note={note}  />


        )
      })}

      <CreateNote />
    </div>
  );
}


{/* <div className="row-span-3 grid gap-2 grid-cols-3">
<h4>author id:{note.authorId}</h4>
<h1>Title:{note.title}</h1>

<h3>Content:{note.content}</h3>

</div> */}
//   return (
//     <>
// <div>
//         <CreateNote />
//         </div>
//       <div className="row-span-3 grid gap-2 grid-cols-3">
//         {/* {notes?.map((note) => {

//           return <Note key={note.id} note={note} />;
//         })} */}


// </div>

//     </>
//   );
// }
