import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const plus = () => setCount(count + 1)
    const mines = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className='mt-8 h-[100px]'>
            <div className='flex justify-center'>
                <div className='w-[150px] h-[100px] rounded-lg mb-4 bg-slate-400 flex justify-center align-middle'>
                    <span className='text-[50px]'>{count}</span>
                </div>
            </div>
            <div class="inline-flex">
                <button onClick={mines} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Mines
                </button>
                <button onClick={plus} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Plus
                </button>
            </div>
        </div>
    )
}

export default Counter