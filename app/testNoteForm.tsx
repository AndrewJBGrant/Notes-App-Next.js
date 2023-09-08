"use client"

interface FormElements extends HTMLFormControlsCollection {
title: HTMLInputElement
}

interface NoteFormElement extends HTMLFormElement {
  readonly elements: FormElements
}




function NoteForm({
  onSubmitNote,
} : {
  onSubmitNote: ( title: string) => void
}) {

const handleSubmit = async (event: React.FormEvent<NoteFormElement>) => {
event.preventDefault();
onSubmitNote(event.currentTarget.elements.title.value)
// console.log(event.currentTarget.elements.title.value) // returns <form>


 const form = event.currentTarget.elements.title.value;
 const formData = Object.fromEntries(form.entries());
 console.log(form, "///form");


}




// // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData

// // Convert Form data to OBJECT!!!


// const res = await fetch('./api/notes.js', {
// body: JSON.stringify(title),
// headers: {
//   'Content-Type' :
//    'application/json'
// },

// method: 'POST'

// });

// const result = await res.json();

// };

// lot of JSON errors?????



return (
<form onSubmit={handleSubmit}>
  <label htmlFor="title">Title</label>
<input name="title" type="text" />
{/* <textarea name="content"  /> */}

<button type="submit">NOTE TEST REDIS</button>


</form>



)



}

export default NoteForm;
