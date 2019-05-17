import React, { Component } from 'react';
import './dashboard.css';
import Product from './product/product'
import axios from 'axios'

class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            inventory: []
        }
        this.delete = this.delete.bind( this )
        this.componentDidMount = this.componentDidMount.bind( this )
    }

    componentDidMount(){
        axios.get('/api/inventory').then( results => {
            this.setState({
                inventory: results.data
            })
        })
        
    }

    delete(product_id){
        axios.delete(`/api/inventory/${ product_id }`)
        .then( results => {
            this.setState({
                inventory: results.data
            })
        })
    }

    render(){
        const products = this.state.inventory.map( (e, i) => {
            return <Product key={ i } deleteButton={ this.delete } image={ e.image_url } price={ e.price } name={ e.name } product_id={ e.product_id }/>
        })
        return(
            <div className='dashboard'>
                { products }
            </div>
        )
    }
}

export default Dashboard