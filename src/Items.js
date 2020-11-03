import React from 'react'

function Items() {

    function fetchItems(){
        fetch('http://localhost:4000/items')
        .then(response => response.json())
        .then(items => {
            console.log(items)
            items.map(item => (
                <div>
                    <h2>Name: item.name</h2>
                </div>
            ))
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
