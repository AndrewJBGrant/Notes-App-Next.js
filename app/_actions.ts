"use server"

import { revalidatePath } from "next/cache";
import { createTodo, deleteTodo } from "./lib/todos";
import { createJournal, deleteJournal, editJournal } from "./lib/journals";

// Todo Actions
export async function createTodoAction(content:string) {
await createTodo(content);
revalidatePath('/app/todo/TodoPage')
}

export async function deleteTodoAction(todoId: string) {
  await deleteTodo(todoId);
  revalidatePath('/app/notes/page')
}


// Journal Actions
export async function createJournalAction(title: string, content: string) {
  await createJournal(title, content);
  revalidatePath('/app/journal/page')
}

export async function deleteJournalAction(journalId: string) {
  await deleteJournal(journalId);
  revalidatePath('/app/journal/page')
}

export async function editedJournalAction(title: string, content: string, journalId: string) {
await editJournal(title, content, journalId);
revalidatePath('/app/journal/page')
}
