import { getServerSession } from "next-auth";
import { prisma } from "../lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NewJournalForm from "./CreateJournal";
import DeleteJournal from "./DeleteJournal";

export default async function JournalPage() {
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

  const currentUser = session?.user?.name;
  return (
    <>
      <NewJournalForm />
      <h1 className="border-b p-4"> JOURNAL PAGE</h1>
      <p>Here is where all the journal entries will go</p>
      {journalFeed?.map((journalFeed) => {
        return (
          <>
            <h2 key={journalFeed.id}>
              {journalFeed.title}//{journalFeed.content}
            </h2>
            <DeleteJournal journalId={journalFeed.id} />
          </>
        );
      })}
    </>
  );
}
