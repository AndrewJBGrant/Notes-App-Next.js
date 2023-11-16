import CreateNote from "./CreateNote";
import { prisma } from "../lib/prisma";
import Note, { NoteProps } from "./Note";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SearchBar from "../SearchTest";

export default async function NotesPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const session = await getServerSession(authOptions);
  // console.log(session?.user?.name, "Hello there User!");
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

  // .split(' ').join(" & "), ???
  // let params = new URL(document.location).searchParams;
  // let name = params.get("name"); // is the string "Jonathan Smith".

  // const param = searchParams;
  // let newSearch = param.get("search");

  // console.log(newSearch, "MAYBE")

  const urlParams = new URLSearchParams(searchParams);
  const maybe = urlParams.get("search");

  const query = maybe?.toString().split(" ").join(" <-> ");

  //.replace(/[\s\n\t]/g, '_');

  // const newQ = JSON.parse(query);

  const NoteSearch = await prisma.note.findMany({
    where: {
      //     // title: {
      //     //   search: "test",
      //     // },
      content: {
        contains: query,
      },
      //   //  color: {
      //   //     search: "#FFD046",
      //   //   },
      //   },

      // orderBy: {
      //   _relevance: {
      //   fields: ['content'],
      //       search: query,
      //         }
    },
  });

  console.log(typeof searchParams, "have we a search??", searchParams);
  console.log(typeof NoteSearch, "a list?");
  console.log(typeof query, "here is a query?", query);

  type Props = {
    noteFeed: NoteProps[];
  };

  const currentUser = session?.user?.name;
  // const firstName = currentUser?.split(" ")

  return (
    <>
      <SearchBar />

      <div className="row-span-3 grid gap-2 grid-cols-3 m-4">
        <CreateNote />
        {noteFeed?.map((noteFeed) => {
          return <Note key={noteFeed.id} note={noteFeed} />;
        })}
      </div>

      <p>QUERY:{query}</p>

      {/* <p>SEARCHPARAMS:{searchParams}</p> */}

      {NoteSearch?.map((noteFeed) => {
        return <Note key={noteFeed.id} note={noteFeed} />;
      })}
    </>
  );
}
