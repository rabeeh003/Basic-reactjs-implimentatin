// // class PrintName extends React.Component{
// //     render(){
// //         return(
// //             <div>
// //                 <h1>hello</h1>
// //             </div>
// //         )
// //     }
// // }
// // export default PrintName

import { useState } from "react"

function NamePrint() {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const submition = (e) => {
        e.preventDefault(); // Corrected typo here
        setName(text);
    };
    return (
        <div className="mt-4">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <input onChange={(e) => setText(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                </div>
                <button onClick={submition} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >Show</button>
            </form>
            <h1 className="font-mono text-4xl">{name}</h1>
        </div>
    )
}

export default NamePrint












