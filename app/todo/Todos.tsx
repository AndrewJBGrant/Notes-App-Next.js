"use client";
import DeleteTodo from "./DeleteTodo";


export type TodoProps = {
  id: string;
  content: string;
    author: {
    name: string;
    email: string;
  } | null;
}

const Todo: React.FC<{ todo: TodoProps }> = ({ todo }) => {



return (
  <>


      <div className="row-span-3 grid gap-2 grid-cols-3">


            <div className="todo gap-2">
              <p>{todo.content}</p>
              <DeleteTodo todoId={todo.id} />
              </div>

      </div>
  </>
)


};

export default Todo;
