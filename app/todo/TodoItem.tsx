const TodoItem: React.FC<{ text: string; onDeleteTodo: () => void }> = (props) => {
  // props is always an object!!!
  //    ^?

  return(

  <li>{props.text}<button onClick={props.onDeleteTodo}>delete</button></li>

)};

export default TodoItem;
