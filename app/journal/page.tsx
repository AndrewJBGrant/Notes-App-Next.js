import { getServerSession } from "next-auth";
import { prisma } from "../lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NewJournalForm from "./CreateJournal";

// import EditJournal from "./EditJournal";

import Journal from "./Journal";
import SearchBarJournal from "./JournalSearch";

export default async function JournalPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const session = await getServerSession(authOptions);
  const journalFeed = await prisma.journal.findMany({
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

  // type Props = {
  //   journalFeed: JournalProps[];
  // };

  const urlParams = new URLSearchParams(searchParams);
  const urlSearchParams = urlParams.get("search");
  const query = urlSearchParams?.toString().split(" ").join("");

  const JournalSearch = await prisma.journal.findMany({
    where: {
      OR: [
        {
          content: {
            contains: query,
             mode: 'insensitive',
          },
        },

        {
          title: {
            contains: query,
             mode: 'insensitive',
          },
        },
      ],
    },
  });


const searchResults = JournalSearch?.map((journalFeed) => {
  return <Journal key={journalFeed.id} journal={journalFeed} />
})

const allJournals = journalFeed?.map((journalFeed) => {
  return <Journal key={journalFeed.id} journal={journalFeed} />
})


function JournalFeed() {
  if (!query) {
    return allJournals;
  }
  return searchResults;
}




  // const currentUser = session?.user?.name;

  return (
    <>
      <section className="flex flex-col items-center px-3 border border-green-600">

    <SearchBarJournal />
      <NewJournalForm />

      <JournalFeed />
      </section>
    </>
  );
}
