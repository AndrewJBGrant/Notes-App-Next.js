import PocketBase from "pocketbase";



const url = ('https://low-elephant.pockethost.io');
export const client = new PocketBase(url);

client.autoCancellation(false);

// export async function getNotes() {

//   try {
// return await client.collection("Notes").getFullList();
// console.log("Notes are here!")
//   } catch (error) {

//   }
// }


export async function getData() {



const res =  await client.collection("Notes").getFullList();

// console.log(res, "22.06 we have a list?")

return res as any[];

// const res = await fetch('http://127.0.0.1:8090/api/collections/Notes/records' ,
//      {
//        cache: "no-store",
//      }
//    );
  //  const data = await res.json();
  //  return data?.items as any[];
   //                      ^?

// if(!res.ok) {
//   throw new Error("failed to fetch your data you stupid")
// console.log(res.json);
// return res.json
// }

 }










export async function createNote(Title: string, Content: string) {
  const data = {Title: Title, Content: Content}

await client.collection('Notes').create(data);
console.log(data, Title, Content, "Helllooo there pocketbase")
}


// export async function deleteNote(id) {
//   let confirm = window.confirm("delete this note??")
//   if(!confirm) {
//     return;
//   }
// await client.collection("Notes").delete(id);
// window.location.reload();

// }
