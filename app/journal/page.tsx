import { getServerSession } from "next-auth";
import { prisma } from "../lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NewJournalForm from "./CreateJournal";

// import EditJournal from "./EditJournal";

import SearchTest from "../SearchTest"

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

<div className="border-solid border-2 border-indigo-600">
    {/* <SearchTest onSearch={handleSearch}/>
{results.map((result: any) => (
<li key={result.id}>{result}</li>
))} */}
</div>




      <h1 className="border-b p-4"> JOURNAL PAGE</h1>
      <p>Here is where all the journal entries will go</p>
      {/* {journalFeed?.map((journalFeed) => {
        return (
          // <EditJournal
          //    key={journalFeed.id}
          //     {journalFeed}//{journalFeed.content}
          //   />


        );
      })} */}
    </>
  );
}
