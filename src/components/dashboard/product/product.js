import React, { Component } from 'react';
import './product.css';

class Product extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { name, image, price } = this.props
        return(
            <div className='productDisplay'>
                <div>
                    <img className='productImg' src={ image } alt='' />
                </div>
                <div className='productInfo'>
                    <div className='productName'>{ name }</div>
                    <div className='productPrice'>${ price }</div>
                </div>
            </div>
        )
    }
}

export default Product