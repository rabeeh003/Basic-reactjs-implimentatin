import React from 'react'

function Card({data}) {
    return (
        <div className="max-w-sm w-4/12 rounded bg-white overflow-hidden shadow-lg">
            <img className="w-full h-[200px]" src={data.image} alt={data.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-black text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">{data.dis}</p>
            </div>
        </div>
    )
}

export default Card