import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="bg-slate-200 p-4 rounded-lg w-full lg:w-3/4 xl:w-2/3">
      <h1 className="text-2xl font-semibold mb-4 text-center py-4">My todo's</h1>
      <ul className="list-none pl-4">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
              toggleTodo={toggleTodo} // Certifique-se de que toggleTodo está sendo passada corretamente
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
