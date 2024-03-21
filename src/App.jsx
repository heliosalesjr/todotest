import React, { useState } from 'react'

function App() {
  
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    });
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
        
        
      })
    }
  

  return (
    <div className='flex flex-col justify-center items-center h-screen max-w-3xl mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-200 p-4 rounded-lg w-full lg:w-3/4 xl:w-2/3 mb-4'>
        <label htmlFor='item' className='block text-xl font-semibold mb-4'>
          New item
        </label>
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type='text' 
          id='item' placeholder='type here' 
          className='block w-full border-stone-300 rounded-md p-2 mb-2'>
        </input>
        <button type='submit' className='block w-full bg-purple-500 text-white font-semibold rounded-md py-2'>
          Add
        </button>
      </form>
  
    <div className="bg-slate-200 p-4 rounded-lg w-full lg:w-3/4 xl:w-2/3">
      <h1 className="text-2xl font-semibold mb-4 text-center py-4">My todo's</h1>
      <ul className="list-none pl-4">
        {todos.map((todo) => {
          return(
          <li className="flex items-center justify-between mb-2" key={todo.id}>
            <label>
              <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={ e => toggleTodo(todo.id, e.target.checked)}
                id='item' 
                placeholder='type here' />
              <span className='mx-2'>{todo.title}</span>
            </label>
            <button className="text-white bg-red-600 p-2 rounded-lg border-2 hover:bg-red-200 hover:text-red-800 hover:font-semibold">Delete</button>
          </li>)
        }
        
        )}
        
        
      </ul>
    </div>
</div>


    
  )
}

export default App