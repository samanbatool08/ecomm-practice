import React, { useState } from 'react';
import Item from './Item';

function Items() {


    const [items, setItems] = useState([])

    let fetchData = () => {
    fetch('http://localhost:4000/items')
    .then(response => response.json())
    .then(data => {
            setItems({items: data})
        })
    }
 
    return (
        <div className='items'>
            <div className='items__list' style={{color: "red"}}>
            {/* {this.state.items.map((item) => {
                return <div>
                    <h1>{item.name}</h1>
                </div>
            })} */}
                <Item items={setItems}/>
            </div>
        </div>
    )
}
        



export default Items;
