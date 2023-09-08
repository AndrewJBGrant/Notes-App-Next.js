 "use client";

import PocketBase from "pocketbase";
import { SetStateAction, useState } from "react";




// import { useRouter } from "next/navigation";
// // import ColorPicker from "./ColorPicker";

 export default function CreateNote({request}) {

   const [Title, setTitle] = useState("");
const [Content, setContent] = useState("");
//   // const router = useRouter();



//   const create = async () => {
//     await fetch('http://127.0.0.1:8090/api/collections/Notes/records', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Title,
//         Content,
//       }),
//     });

//     // router.refresh();
//   };

  const titleChangehandler = (e) => {
    // console.log(e);
    //console.log(e.target.value);
    setTitle(e.target.value);

  };




const pb = new PocketBase('http://127.0.0.1:8090');

const create = async () => {

const form = await request.formData();

const Title = form.get("Title")?? '';
const Content = form.get("Content")?? '';

const newNote = {
  Title,
  Content,
}

const record = await pb.collection('Notes').create(newNote)
console.log(record)
// example create data
// const data = {
//     "Title": "TESTING MY NOTE",
//     "Content": "I hope this works all I want to do is code frontend again"
// };


}

   return (

    <>
         {/* <ColorPicker /> */}
     <form className="border-2 border-indigo-600" onSubmit={create}>

      <h3>Create Note component</h3>

       <input
         type="text"
         placeholder="Title"
         value={Title}
         onChange={titleChangehandler}
       />
        <textarea
         // className="color-preview" style={{ backgroundColor: selectedColor }}
         placeholder="Share your toughts and musings..."
         value={Content}
         onChange={(e) => setContent(e.target.value)}
       />
       <button type="submit">New Note</button>
     </form>
  </> );
}
