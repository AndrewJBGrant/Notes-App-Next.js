

import { editNoteAction } from "../_actions";


// import { NoteProps } from "./Note";



interface NoteEditProps {
  noteId: string;
  color: string;
  title: string;
  content: string;
  onChange: (e?: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const EditNote: React.FC<NoteEditProps> = (props: NoteEditProps) => {


  async function handleEditNote()  {
 await editNoteAction(props.color, props.title, props.content, props.noteId)

 console.log("Coming from the edit note page")
  }

return(
  <>
  <textarea {...props} onChange={handleEditNote} />

</>
);

};

export default EditNote;
