const TodoItem: React.FC<{ text: string; onDeleteTodo: () => void }> = (props) => {
  // props is always an object!!!
  //    ^?

  return(
<span className="text-rose-600 ">
  <li>{props.text}<button className="border-2 border-rose-600" onClick={props.onDeleteTodo}>delete</button></li>
</span>
)};

export default TodoItem;
