const TodoItem: React.FC<{ text: string; onDeleteTodo: () => void }> = (props) => {
  // props is always an object!!!
  //    ^?

  return(

  <li onClick={props.onDeleteTodo}>{props.text}</li>

)};

export default TodoItem;
