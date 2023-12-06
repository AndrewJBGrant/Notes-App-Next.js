import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "../lib/prisma";

export default async function MostRecentJournal() {
const session = await getServerSession(authOptions);
const lastJournalEntry = await prisma.journal.findFirst({
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

// console.log(typeof(lastJournalEntry))
// console.log(lastJournalEntry?.content,"do we get to see it?")

const currentUser = session?.user?.name;
  return (
<>
<h1 className="border border-slate-800 p-4">The most recent journal?</h1>

<h3>hopefully we are seeing something</h3>

<p className="text-lg border border-slate-800">
  {lastJournalEntry?.title}{lastJournalEntry?.content}</p>

</>
)}
