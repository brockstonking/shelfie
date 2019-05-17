import React, { Component } from 'react';
import './product.css';
import { HashRouter as Router, Link } from 'react-router-dom';

class Product extends Component{
    constructor(props){
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind( this )
    }

    handleDeleteClick(){
        this.props.deleteButton(this.props.product_id)
    }

    render(){
        const { name, image, price } = this.props
        return(
            <div className='productDisplay'>
                <div>
                    <img className='productImg' src={ image } alt='' />
                </div>
                <div className='infoAndEditDelete'>
                    <div className='productInfo'>
                        <div className='productName'>{ name }</div>
                        <div className='productPrice'>${ price }</div>
                    </div>
                    
                </div>
                <div className='bottomer'>
                    <div className='buttonContainer'>
                        <div className='smallerButtonContainer'><button className='editDeleteButton delete' onClick={ this.handleDeleteClick }>Delete</button></div>
                        <Link to={`/edit/${ this.props.product_id }`} ><div className='smallerButtonContainer'><button className='editDeleteButton edit' >Edit</button></div></Link>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Product