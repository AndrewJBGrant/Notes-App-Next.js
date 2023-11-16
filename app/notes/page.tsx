import CreateNote from "./CreateNote";
import { prisma } from "../lib/prisma";
import Note, { NoteProps } from "./Note";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SearchBar from "../SearchTest";


export default async function NotesPage( { searchParams } : { searchParams: string }) {
  const session = await getServerSession(authOptions);
  // console.log(session?.user?.name, "Hello there User!");
  // const noteFeed = await prisma.note.findMany({
  //   where: {
  //     author: { email: session?.user?.email },
  //   },
  //   include: {
  //     author: {
  //       select: { name: true },
  //     },
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

const query = searchParams.toString().replace(/[\s\n\t]/g, '_');

console.log(query, "here is a query?")

const NoteSearch = await prisma.note.findMany({
 where: {
    // title: {
    //   search: "test",
    // },
    content: {
      search: query,
    },
  //  color: {
  //     search: "#FFD046",
  //   },
  },
})


  console.log(searchParams, "have we a search??")
  console.log(NoteSearch, "a list?")

  type Props = {
    noteFeed: NoteProps[];
  };

  const currentUser = session?.user?.name;
  // const firstName = currentUser?.split(" ")


  return (
    <>
 <SearchBar />

      {/* <div className="row-span-3 grid gap-2 grid-cols-3 m-4">
        <CreateNote />
        {noteFeed?.map((noteFeed) => {
          return <Note key={noteFeed.id} note={noteFeed} />;
        })}

      </div> */}

      <h2>Search feed</h2>


      {NoteSearch?.map((noteFeed) => {
        return <Note key={noteFeed.id} note={noteFeed} />;
      })}
    </>
  );
};
