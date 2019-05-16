import React, { Component } from 'react';
import './dashboard.css';
import Product from './product/product'

class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            inventory: this.props.inventory
        }
    }

    render(){
        const products = this.props.inventory.map( (e, i) => {
            return <Product key={ i } image={ e.image_url } price={ e.price } name={ e.name }/>
        })
        return(
            <div>
                { products }
            </div>
        )
    }
}

export default Dashboard