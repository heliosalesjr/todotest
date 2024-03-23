

function TodoItem( {completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li className="flex items-center justify-between mb-2" >
            <label>
              <input 
                type="checkbox" 
                checked={completed}
                onChange={ e => toggleTodo(id, e.target.checked)}
                id='item' 
                placeholder='type here' />
              <span className='mx-2'>{title}</span>
            </label>
            <button 
              onClick={() => deleteTodo(id)} 
              className="text-white bg-red-600 p-2 rounded-lg border-2 hover:bg-red-200 hover:text-red-800 hover:font-semibold">Delete</button>
          </li>
  )
}

export default TodoItem