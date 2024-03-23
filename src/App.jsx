import React, { useEffect, useState } from 'react'
import MyForm from './components/MyForm';
import TodoList from './components/TodoList';

function App() {
  
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
          ...currentTodos,
          { id: crypto.randomUUID(), title: title, completed: false },
      ]
      });
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
  
  function deleteTodo(id) {
    setTodos(currentTodos => {
     return currentTodos.filter(todo => todo.id !== id) 
    })
  
  }


  return (
    <div className='flex flex-col justify-center items-center h-screen max-w-3xl mx-auto px-4'>
    <MyForm onSubmit={addTodo}/>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    
</div>


    
  )
}

export default App