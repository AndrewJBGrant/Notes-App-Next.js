import { prisma } from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export async function createJournal(
  title: string,
  content: string,
) {
try {
  const session = await getServerSession(authOptions);

  const journal = await prisma.journal.create({
data: {
  title,
  content,
  author: { connect: { email: session?.user?.email! }},
},
  });
return { journal };
} catch (error) {
  console.log(error, "No journal entry");
  return { error };
  }
}


export async function deleteJournal(journalId: string) {
  // First, check if the note exists
  const journal = await prisma.journal.findUnique({
    where: {
      id: journalId,
    },
  });

  // If the Journal entry doesn't exist, throw an error or handle this case as needed
  if (!journal) {
    throw new Error('journal entry not found');

  }
// If the entry exists, proceed with the deletion
const deletedJournal = await prisma.journal.delete({

  where: {
    id: journalId,
    },
  })
return { deletedJournal }
}


export async function editJournal(content: string, journalId: string) {
  try {
    const editedJournal = await prisma.journal.update({
        where: { id: journalId },
        data: { content },
      });

        console.log(editedJournal, "edited coming from journal.ts");
    return { editedJournal };
  } catch (error) {
    console.log(error, "check the methods");
    return { error };
  }
}








// export default async function searchJournalhandler(req: { query: { q: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: string; title: string; content: string | null; authorId: string | null; createdAt: Date; color: string | null; }[]): void; new(): any; }; }; }) {
//   const { q } = req.query; // 'q' is the query parameter for the search term

//   try {
//     const results = await prisma.journal.findMany({
//       where: {
//         OR: [
//           {
//             title: {
//               contains: q,
//             },
//           },
//           {
//             content: {
//               contains: q,
//             },
//           },
//         ],
//       },
//     });

//     res.status(200).json(results);
//   } catch (error) {
//     console.error('Error performing search:', error);
//   }
// }
