import PocketBase from "pocketbase";

const url = ('https://low-elephant.pockethost.io');
export const client = new PocketBase(url);

client.autoCancellation(false);

export async function getNotes() {
return await client.collection("Notes").getFullList();
}


export async function createNote(Title, Content) {
  const newNote  = {
    "Title": "",
    "Content": ""
};

await client.collection('Notes').create(newNote);
console.log(newNote, "working yet?")
}
