

import { editNoteAction } from "../_actions";


// import { NoteProps } from "./Note";



interface NoteEditProps {
  noteid: string;
  title: string;
  content: string;
  onChange: (e?: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const EditNote: React.FC<NoteEditProps> = (props: NoteEditProps) => {


  async function handleEditNote()  {
    console.log(props.title)
 await editNoteAction(props.title, props.content, props.noteid)

 console.log("Coming from the edit note page")
  }

return(
  <>
  <textarea {...props} onChange={handleEditNote} />

</>
);

};

export default EditNote;
