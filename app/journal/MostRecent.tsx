import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "../lib/prisma";

export default async function MostRecent() {
const session = await getServerSession(authOptions);
const lastJournalEntry = await prisma.journal.findMany({
  where: {
    author: { email: session?.user?.email },
    },
include: {
  author: {
    select: { name: true},
  },
},
  orderBy: {
    createdAt: "desc",
  },
  take: 1,
});

const currentUser = session?.user?.name;
  return (
<>
<h1 className="border-b p-4">The most recent journal?</h1>
{lastJournalEntry?.map((lastJournal) => {
  return <h2 key={lastJournal.id}>{lastJournal.title}//{lastJournal.content}</h2>
})}
</>
)}


