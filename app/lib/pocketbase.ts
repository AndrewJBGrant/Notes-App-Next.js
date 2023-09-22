import { revalidatePath } from "next/cache";
import PocketBase from "pocketbase";
import { cache } from 'react'


const url = "https://low-elephant.pockethost.io";
export const client = new PocketBase(url);
client.autoCancellation(false);


// export const dynamic = "auto",
//   dynamicParams = true,
//   revaliadte = 0,
//   fetchCache = "auto",
//   runtime = "nodejs",
//   preferredRegion = "auto";


export const dynamic = 'force-dynamic'

export async function getData() {
  const res = await client.collection("Notes").getFullList();

  return res as any[];
}











export async function createNote(Title: string, Content: string) {
  const data = { Title: Title, Content: Content };

  await client.collection("Notes").create(data);
  // console.log(data, Title, Content, "Helllooo there pocketbase")
}

export async function deleteNote(id: string) {
  let confirm = window.confirm("delete this note??");
  if (!confirm) {
    return;
  }
  await client.collection("Notes").delete(id);
}

export async function editNote(id: string, Content: string) {
  const data = { Content: Content };

  await client.collection("Notes").update(id, data);
}
