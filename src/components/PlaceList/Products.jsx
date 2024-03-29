import React from 'react'
import Card from './Card'
import json from './placedata.json'
function Products() {
    return (
        <div className='mt-6 flex flex-wrap gap-3 justify-between'>
            {json.map(data => (
                <Card data={data} />
            ))}
        </div>
    )
}

export default Products