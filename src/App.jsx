import React from 'react'

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen max-w-3xl mx-auto'>
  <form className='bg-slate-200 p-4 rounded-lg w-full lg:w-3/4 xl:w-2/3 mb-4'>
    <label htmlFor='item' className='block text-xl font-semibold mb-4'>
      New item
    </label>
    <input type='text' id='item' placeholder='type here' className='block w-full border-stone-300 rounded-md p-2 mb-2'></input>
    <button type='submit' className='block w-full bg-purple-500 text-white font-semibold rounded-md py-2'>
      Add
    </button>
  </form>
  
  <div className="bg-slate-200 p-4 rounded-lg w-full lg:w-3/4 xl:w-2/3">
    <h1 className="text-2xl font-semibold mb-4 text-center py-4">My todo's</h1>
    <ul className="list-none pl-4">
      <li className="flex items-center justify-between mb-2">
        <label>
          <input type="checkbox" id='item' placeholder='type here' />
          <span className='mx-2'>Hey 1</span>
        </label>
        <button className="text-white bg-red-600 p-2 rounded-lg border-2 hover:bg-red-200 hover:text-red-800 hover:font-semibold">Delete</button>
      </li>
      <li className="flex items-center justify-between mb-2">
        <label>
          <input type="checkbox" id='item' placeholder='type here' />
          <span className='mx-2'>Hey 2</span>
        </label>
        <button className="text-white bg-red-600 p-2 rounded-lg border-2 hover:bg-red-200 hover:text-red-800 hover:font-semibold">Delete</button>
      </li>
      <li className="flex items-center justify-between mb-2">
        <label>
          <input type="checkbox" id='item' placeholder='type here' />
          <span className='mx-2'>Hey 3</span>
        </label>
        <button className="text-white bg-red-600 p-2 rounded-lg border-2 hover:bg-red-200 hover:text-red-800 hover:font-semibold">Delete</button>
      </li>
    </ul>
  </div>
</div>


    
  )
}

export default App