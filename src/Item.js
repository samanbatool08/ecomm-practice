import React from 'react'

function Item(props) {
    console.log(props)
    return (
        <div style={{color: 'white'}}>
            {props.items.map((item) => {
                return <div>
                    <h1>{item.name}</h1>
                </div>
            })}
        </div>
    )
}

export default Item
