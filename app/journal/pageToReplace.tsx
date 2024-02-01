import { getServerSession } from "next-auth";
import { prisma } from "../lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";

// import EditJournal from "./EditJournal";

import NewJournalForm from "./CreateJournal";
import Journal from "./Journal";
import SearchBar from "../search/SearchBar";

async function Page({ searchParams }: { searchParams: any }) {
  // const session = await getServerSession(authOptions);
  const journalFeed = await prisma.journal.findMany({
    where: {
      // author: { email: session?.user?.email },
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

  const urlParams = new URLSearchParams(searchParams);
  const urlSearchParams = urlParams.get("search");
  const query = urlSearchParams?.toString().split(" ").join("");

  const JournalSearch = await prisma.journal.findMany({
    where: {
      OR: [
        {
          content: {
            contains: query,
            mode: "insensitive",
          },
        },

        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  const searchResults = JournalSearch?.map((journalFeed) => {
    return <Journal key={journalFeed.id} journal={journalFeed} />;
  });

  const allJournals = journalFeed?.map((journalFeed) => {
    return <Journal key={journalFeed.id} journal={journalFeed} />;
  });

  function JournalFeed() {
    if (!query) {
      return allJournals;
    }
    return searchResults;
  }

  return (
    <>
      <section className="flex flex-col items-center px-3 border border-green-600">
        <SearchBar type={"journal"} />
        <NewJournalForm />

        <h2>HELLLLLOOOOOOOOOO</h2>

        <JournalFeed />
      </section>
    </>
  );
}

export default Page;
