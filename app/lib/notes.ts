import { prisma } from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function createNote(
  title: string,
  content: string,
  color: string,
) {
  const session = await getServerSession(authOptions);
  try {

    const note = await prisma.note.create({
      data: {
        title,
        content,
        color,
         author: { connect: { email: session?.user?.email! } },
      },
    });

    //console.log(note, "coming from notes.ts")
    return { note };
  } catch (error) {
    console.log(error, "check the methods");
    return { error };
  }
}


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
// export async function handleNewNote(req, res) {
//   console.log(req, res, "are we seeing anything here??")
//   const { title, content, color } = req.body;

//   const session = await getSession({ req });
//   const result = await prisma.note.create({
//     data: {
//       title: title,
//       content: content,
//       color: color,
//       author: { connect: { name: session?.user?.name } },
//     },
//   });
//   res.json(result);
//   console.log(result, "trying to add user id on creation")
// }
