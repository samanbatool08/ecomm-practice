import React from 'react';
import Item from './Item';

function Items() {

    
     const fetchItems = () => {
        fetch('http://localhost:4000/items')
        .then(response => response.json())
        .then(data => {
            data.map((item) => {
                return <Item item={item}/>

            })
        })
    }
    
    return (
        <div className='items'>
            <div className='items__list' style={{color: "red"}}>
                HELLO
                {fetchItems()}
            </div>
            
        </div>
    )
}


export default Items;
