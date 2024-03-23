
import React, { useEffect, useState } from 'react'


function MyForm({onSubmit}) {
    
    const [newItem, setNewItem] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === '') return

        onSubmit(newItem)
        setNewItem("")
    }
    
  return (
    
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
  )
}

export default MyForm