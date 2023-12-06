// import { prisma } from "../lib/prisma";
// import { Note, Journal } from "@prisma/client";


// // type PrismaModel = {
// //   findMany: (args: any) => Promise<Note[] | Journal[]>
// // }

// // type PrismaModel = {
// //   note: {
// //     findMany: (args: any) => Promise<Note[]>;
// //   };
// // journal: {
// //   findMany: (args: any) => Promise<Journal[]>;
// // }
// // };

// //  type PrismaModel<T> = {
// //  findMany: (args: any) => Promise<T[]>
// //  }

// // type NoteModel = {
// //   findMany: (args: any) => Promise<Note[]>;
// // };

// // type JournalModel = {
// //   findMany: (args: any) => Promise<Journal[]>;
// // };

// // type Note = {
// //   // Define your Note model fields here
// //   id: string;
// //   title: string;
// //   content: string;
// //   authorId?: string;
// //   createdAt: Date;
// //   color?: string;
// //   author?: User; // Assuming User is another model in your schema
// // };


// // type PrismaNoteModel = {
// //   findMany: (args: any) => Promise<Note[]>;
// //   // Add other methods as needed...
// // };

// // type PrismaNoteType = typeof prisma.note;

// // export default async function Search<T extends { findMany: (args: any) => Promise<any[]> }>(prismaModel: T, searchParams: any){

//   type PrismaModel<T> = {
//     findMany: (args: any) => Promise<T[]>;
//   };

// export default async function Search<T>(prismaModel: PrismaModel<T>, searchParams: any){

// const urlParams = new URLSearchParams(searchParams);
// const urlSearchParams = urlParams.get("search");
// const query = urlSearchParams?.toString().split(" ").join("");

// const searchResults = await prismaModel.findMany({
//   where: {
//     OR: [
//       {
//         content: {
//           contains: query,
//           mode: "insensitive",
//         },
//       },

//       {
//         title: {
//           contains: query,
//           mode: "insensitive",
//         },
//       },
//     ],
//   },
// });

// // const searchNoteResults = await Search<Note>(prisma.note, searchParams);

// // const noteSearchResults = await Search<PrismaNoteModel>(prisma.note, searchParams);
// //  console.log(noteSearchResults, "NOTES")


// // const searchJournalResults = await Search<JournalModel>({ findMany: prisma.journal.findMany}, searchParams);
// // console.log(searchJournalResults, "JOURNAL")

// const noteSearchResults = await Search<Note>(prisma.note as PrismaModel<Note>, searchParams);
// // const noteSearchResults = await Search(prisma.note, searchParams);
// console.log(noteSearchResults, "Maybe we have overcoded")

// const journalSearchResults = await Search<Journal>(prisma.journal as PrismaModel<Journal>, searchParams);
// console.log(journalSearchResults, "JOURANL RESULTS")



// console.log(searchResults, "coming from PRISMA SEARCH")
// return searchResults;



// // const notesSearchResults = await searchResults;
// // console.log(notesSearchResults, query, "we are looking for the NOTE results!!!")

// // const journalsSearchResults = await searchResults;
// // console.log(journalsSearchResults, query, "we are looking for the NOTE results!!!")

// };
