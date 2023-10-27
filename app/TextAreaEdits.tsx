import React, { useState } from 'react';

function TextViewer({ value }: {value: any}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(value);

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e: { target: { value: any; }; }) => {
    setContent(e.target.value)
    console.log(e.target.value)
  };


  return (
    <div onClick={toggleEditMode}>
      {isEditing ? (
        <textarea onChange={handleChange} />
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
}

export default TextViewer;
