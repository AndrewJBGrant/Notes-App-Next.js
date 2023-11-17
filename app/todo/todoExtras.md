// import { prisma } from "../lib/prisma";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";

// export default async function TodoPage() {
//   const session = await getServerSession(authOptions);
//   console.log(session?.user?.name, "Hello there User!");
//   const todoFeed = await prisma.todo.findMany({
//     where: {
//       author: { email: session?.user?.email },
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

//   // console.log(noteFeed)

//   // type Props = {
//   //   noteFeed: NoteProps[];
//   // };

//   // const currentUser = session?.user?.name;
//   // const firstName = currentUser?.split(" ");

//   return (
//     <>
//       <h1>Welcome back {currentUser}'s Todos all here</h1>
//       <div className="row-span-3 grid gap-2 grid-cols-3">
//         {todoFeed?.map((todoFeed) => {
//           return (
//             <>
//               <p>{todoFeed.id}</p>
//               <p>{todoFeed.content}</p>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }
