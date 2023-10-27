import { getServerSession } from "next-auth";
import { prisma } from "../lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NewJournalForm from "./CreateJournal";

// import EditJournal from "./EditJournal";

import SearchTest from "../SearchTest"
import Journal from "./Journal";

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

// async function handleSearch({ searchText }) {
//   const session = await getServerSession(authOptions);
//   const results = await prisma.journal.findMany({
//       where: {
//         OR: [
//           {
//             title: {
//               contains: searchText,
//             },
//           },
//           {
//             content: {
//               contains: searchText,
//             },
//           },
//         ],
//       },
//     });
// }

    const currentUser = session?.user?.name;

  return (
    <>
      <NewJournalForm />

<section className="w-full md:w-2/3 flex flex-col items-center px-3">
 {journalFeed?.map((journalFeed) => {
        return (
           <Journal
              key={journalFeed.id}
               journal={journalFeed}
             />


        );
      })}
</section>
    </>
  );
}
