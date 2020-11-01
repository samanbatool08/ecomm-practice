import React from 'react'

function Items() {

    function fetchItems(){
        fetch('http://localhost:4000/items')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className='items'>
            <div className='items__list'>
                {fetchItems()}
            </div>
            
        </div>
    )
}

export default Items;
