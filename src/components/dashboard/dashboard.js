import React, { Component } from 'react';
import './dashboard.css';
import Product from './product/product'

class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            inventory: this.props.inventory
        }
        this.delete = this.delete.bind( this )
        this.edit = this.edit.bind( this )
    }

    delete(val){
        this.props.delete(val)
    }

    edit(obj){
        this.props.edit(obj)
    }

    render(){
        const products = this.props.inventory.map( (e, i) => {
            return <Product key={ i } editButton={ this.edit } deleteButton={ this.delete } image={ e.image_url } price={ e.price } name={ e.name } product_id={ e.product_id }/>
        })
        return(
            <div>
                { products }
            </div>
        )
    }
}

export default Dashboard