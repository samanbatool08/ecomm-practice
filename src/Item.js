import React from 'react'

function Item(props) {
    console.log('in item')
    return (
        <div style={{color: 'white'}}>
            <h2>{props.items.map((item) => {
                return <div>
                    <h1>{item.name}</h1>
                </div>
            })}</h2>
            <h2>ITEM</h2>
        </div>
    )
}

export default Item
