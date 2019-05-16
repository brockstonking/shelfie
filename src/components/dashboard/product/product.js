import React, { Component } from 'react';
import './product.css';

class Product extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { name, image, price } = this.props
        return(
            <div>
                <div>
                    <img className='productImg' src={ image } alt='' />
                </div>
                <div>
                    <div className='productName'>{ name }</div>
                    <div className='productPrice'>${ price }</div>
                </div>
            </div>
        )
    }
}

export default Product