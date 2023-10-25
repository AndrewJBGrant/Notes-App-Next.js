import CreateNote from "./CreateNote";
import { prisma } from "../lib/prisma";
import Note, { NoteProps } from "./Note";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SearchInput from "../SearchInput";
import SearchTest from "../SearchTest";

export default async function NotesPage() {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.name, "Hello there User!");
  const noteFeed = await prisma.note.findMany({
    where: {
      author: { email: session?.user?.email },
    },
    include: {
      author: {
        select: { name: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

const NoteSearch = await prisma.note.findMany({
 where: {
    // title: {
    //   search: "test",
    // },
    content: {
      search: "prisma",
    },
   // color: {
    //   search: searchTerm,
    // },
  },


})

  //console.log(noteFeed)

  type Props = {
    noteFeed: NoteProps[];
  };

  const currentUser = session?.user?.name;
  const firstName = currentUser?.split(" ")


  return (
    <>
      <h1>Welcome back {firstName![0]}'s notes all here</h1>
{/* <SearchInput /> */}

      <div className="row-span-3 grid gap-2 grid-cols-3">
        <CreateNote />
        {noteFeed?.map((noteFeed) => {
          return <Note key={noteFeed.id} note={noteFeed} />;
        })}

      </div>

      <h2>Search feed</h2>
{/* <SearchTest onSearch={}/> */}

      {NoteSearch?.map((noteFeed) => {
        return <Note key={noteFeed.id} note={noteFeed} />;
      })}
    </>
  );
};
