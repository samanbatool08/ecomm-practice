import React from 'react'

class Items extends React.Component {

    state = {
        items: {}
    }

    
    // function displayItem(item) {
    //     return (
    //         <div>
    //             <h2>Name: {item.name}</h2>
    //             <h2>Image: {item.image}</h2>
    //             <h2>Description: {item.description}</h2>
    //             <h2>Price: {item.price}</h2>
    //         </div>
    //     )
    // }

    
     fetchItems() {
        fetch('http://localhost:4000/items')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState({items: data })
            //  items.map(item => (
            //    displayItem(item)
            // ))
        })
    }
    
    render() {
       
        console.log(this.state)


    return (
        <div className='items'>
            <div className='items__list' style={{color: "red"}}>
                HELLO
                {this.fetchItems}
            </div>
            
        </div>
    )
}
}

export default Items;
