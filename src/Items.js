import React from 'react';
import Item from './Item';

class Items extends React.Component {

    state = {
        items: []
    }

    componentDidMount(){
        fetch('http://localhost:4000/items')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
                this.setState({items: data})
            })
    
    }
 

    render() {

    return (
        <div className='items'>
            <div className='items__list' style={{color: "red"}}>
                HELLO
                <Item items={this.state.items}/>
            </div>
        </div>
    )
}
}


export default Items;
