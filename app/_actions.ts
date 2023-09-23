"use server"

import { revalidatePath } from "next/cache";
import { createNote } from "./lib/notes"

export async function createnoteAction(title: string, content: string) {
  await createNote(title, content);
  revalidatePath('/app/notes/page')
}
