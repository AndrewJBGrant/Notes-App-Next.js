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

// Taking the search query from the url
  const urlParams = new URLSearchParams(searchParams);
  const urlSearchParams = urlParams.get("search");
  const query = urlSearchParams?.toString().split(" ").join(" ");

  //.replace(/[\s\n\t]/g, '_');
  // .split(' ').join(" & ");

  const NoteSearch = await prisma.note.findMany({
    where: {
      OR: [
        {
          content: {
            contains: query,
          },
        },

        {
          title: {
            contains: query,
          },
        },
      ],
    },
  });

  // (typeof searchParams) => object
  // (typeof query) => string

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

//   //  color: {
//   //     search: "#FFD046",
//   //   },
//   },

// orderBy: {
//   _relevance: {
//   fields: ['content'],
//       search: query,
//         }
