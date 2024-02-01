// import CreateNote from "./notes/CreateNote";
// // import AuthChecker from "./auth/AuthChecker";
// // import MostRecentJournal from "./journal/MostRecent";
// import { getServerSession } from "next-auth";
// // import AuthButton from "./AuthButtons";
// import { authOptions } from "./api/auth/[...nextauth]/route";


// async function HomePage() {
//   const session = await getServerSession(authOptions);

//   if (session) {
//     return (
//       <>
//         <h1>PLEASE SIGN IN HERE</h1>
//       </>
//     );
//   } else {
//     return (
//     <>
//         <h1>HELLOOOOO This is the Home page</h1>
//     </>
//     );
//   }
// }

// export default HomePage;

// import { getServerSession } from "next-auth";
// import { prisma } from "./lib/prisma";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import NewJournalForm from "../app/journal/CreateJournal";

// // import EditJournal from "./EditJournal";

// import Journal from "../app/journal/Journal";
// import SearchBar from "../app/search/SearchBar";

// async function Page({ searchParams }: { searchParams: any }) {
//   // const session = await getServerSession(authOptions);
//   const journalFeed = await prisma.journal.findMany({
//     where: {
//       // author: { email: session?.user?.email },
//     },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   const urlParams = new URLSearchParams(searchParams);
//   const urlSearchParams = urlParams.get("search");
//   const query = urlSearchParams?.toString().split(" ").join("");

//   const JournalSearch = await prisma.journal.findMany({
//     where: {
//       OR: [
//         {
//           content: {
//             contains: query,
//             mode: "insensitive",
//           },
//         },

//         {
//           title: {
//             contains: query,
//             mode: "insensitive",
//           },
//         },
//       ],
//     },
//   });

//   const searchResults = JournalSearch?.map((journalFeed: { id: any; }) => {
//     return <Journal key={journalFeed.id} journal={journalFeed} />;
//   });

//   const allJournals = journalFeed?.map((journalFeed) => {
//     return <Journal key={journalFeed.id} journal={journalFeed} />;
//   });

//   function JournalFeed() {
//     if (!query) {
//       return allJournals;
//     }
//     return searchResults;
  // }


export default function Page() {

  return (
    <>
      <section className="flex flex-col items-center px-3 border border-green-600">
        {/* <SearchBar type={"journal"} />
        <NewJournalForm />
        <JournalFeed /> */}
<h2>Helllllloooooo there </h2>
      </section>
    </>
  );
}


