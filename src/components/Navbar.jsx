import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex gap-4 justify-center bg-white text-black rounded-md'>
            <div>
                <Link to={'/'} className='text-md font-mono'>Todo</Link>
            </div>
            <div>
                <Link to={'/list'} className='text-md font-mono'>Districts</Link>
            </div>
            <div>
                <Link to={'/counter'} className='text-md font-mono'>Counter</Link>
            </div>
            <div>
                <Link to={'/userlist'} className='text-md font-mono'>UserList</Link>
            </div>
            <div>
                <Link to={'/nameShow'} className='text-md font-mono'>NameShow</Link>
            </div>
        </div>
    )
}

export default Navbar