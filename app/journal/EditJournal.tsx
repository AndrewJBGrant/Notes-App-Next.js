"use client";

// import React, { useState } from 'react';
// import DeleteJournal from "./DeleteJournal";

// function EditJournal({ journal, onUpdate }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedContent, setEditedContent] = useState(journal.content);

//   const toggleEditMode = () => {
//     setIsEditing((prev) => !prev);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setEditedContent(e.target.value);
//     onUpdate(editedContent); // Wil notify the parent of any changes
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <div>
//           <textarea value={editedContent} onChange={handleChange} />
//         </div>
//       ) : (
//         <div onClick={toggleEditMode}>
//           {journal.content}
//         </div>
//       )}
//           <DeleteJournal journalId={journal.id} />
//     </div>
//   );
// }

// export default EditJournal;
