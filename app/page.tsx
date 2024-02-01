import { prisma } from "../app/lib/prisma";

import NewJournalForm from "../app/journal/CreateJournal";
import Journal from "../app/journal/Journal";
import SearchBar from "../app/search/SearchBar";

export default async function Page({ searchParams }: { searchParams: any }) {
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
        <SearchBar type={"/"} />
        <NewJournalForm />
        <JournalFeed />

        <section className="border border-slate-800">{searchResults}</section>
      </section>
    </>
  );
}
