import React, { Component } from 'react';
import './product.css';

class Product extends Component{
    constructor(props){
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind( this )
        this.handleEditClick = this.handleEditClick.bind( this )
    }

    handleDeleteClick(){
        this.props.deleteButton(this.props.product_id)
    }

    handleEditClick(){
        this.props.editButton({
            product_id: this.props.product_id,
            name: this.props.name,
            price: this.props.price,
            url: this.props.image
        })
    }

    render(){
        const { name, image, price } = this.props
        return(
            <div className='productDisplay'>
                <div>
                    <img className='productImg' src={ image } alt='' />
                </div>
                <div>
                    <div className='productInfo'>
                        <div className='productName'>{ name }</div>
                        <div className='productPrice'>${ price }</div>
                    </div>
                    <div>
                        <div><button onClick={ this.handleDeleteClick }>Delete</button></div>
                        <div><button onClick={ this.handleEditClick }>Edit</button></div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Product