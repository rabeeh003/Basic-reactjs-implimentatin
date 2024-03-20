import React, { useState } from 'react'

function Todo() {

  const [todoList, setList] = useState([])
  const [text, setText] = useState('')

  const add = (event) => {
    event.preventDefault()
    if (text.length != 0) {
      const newItem = { id: Date.now().toString(), value: text }
      setList(todoList => [...todoList, newItem])
      setText('');
      console.log(todoList);
    }
  }

  const removeItem = (id) => {
    setList(prev => prev.filter(data => data.id != id))
  }
  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={add}>
        <h1 className='text-[3rem] font-semibold' >Todo</h1>
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter anything...'
          value={text}
          className="px-2 outline outline-offset-2 mr-3 py-2 outline-blue-500 rounded-md"
        />
        <button
          type='submit'
          className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md px-3 py-3">
          Add
        </button>
      </form>
      <div className="mt-4 w-[350px] h-[60vh] overflow-y-auto">
        {todoList.map((data, num) => (
          <div key={data.id} className='flex justify-between bg-slate-700 p-3 rounded-sm mt-1'>
            <span className="pr-2">{num + 1}</span>
            <span className="text-left font-mono text-2md w-[80%]">{data.value}</span>
            <button onClick={() => removeItem(data.id)} className='bg-slate-500 rounded-md px-2'>
              {/* <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete" className="w-6" /> */}
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo