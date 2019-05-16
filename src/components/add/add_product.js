import React, { Component } from 'react';
import './add_product.css'

class Add extends Component {
    constructor(props){
        super(props);
    } 

    handleURL(val){
        this.props.updateImgUrl(val)
    }

    handleName(val){
        this.props.updateName(val)
    }

    handlePrice(val){
        this.props.updatePrice(val)
    }

    render(){
        return(
            <div>
                <div><img className='imageChecker' src={ this.props.imageCheck } alt='' /></div>
                <div>
                    <p>Image URL:</p>
                    <input value={ this.props.UrlVal } onChange={ e => this.handleURL(e.target.value) }></input>
                    <p>Product Name</p>
                    <input value={ this.props.nameVal } onChange={ e => this.handleName(e.target.value) }></input>
                    <p>Price:</p>
                    <input value={this.props.priceVal } onChange={ e => this.handlePrice(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={ this.props.reset } >Cancel</button>
                    <button>Add to Inventory</button>
                </div>

            </div>
        )
    }
}

export default Add