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
        let button = this.props.addOrEdit === 'add' 
        ? <button className='button' onClick={ this.props.handleAdd }>Add to Inventory</button> 
        : <button className='button' onClick={ () => this.props.save(this.props.editId) }>Save Changes</button>
        let image_urlVal = this.props.UrlVal === 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg' ? '' : this.props.UrlVal
        return(
            <div className='addProductBox'>
                <div><img className='imageChecker' src={ this.props.UrlVal } alt='' /></div>
                <div>
                    <p>Image URL:</p>
                    <input value={ image_urlVal } onChange={ e => this.handleURL(e.target.value) }></input>
                    <p>Product Name</p>
                    <input value={ this.props.nameVal } onChange={ e => this.handleName(e.target.value) }></input>
                    <p>Price:</p>
                    <input value={this.props.priceVal } onChange={ e => this.handlePrice(e.target.value)}></input>
                </div>
                <div className='addCancelButtonDiv'>
                    <div><button className='button' onClick={ this.props.reset } >Cancel</button></div>
                    <div>{ button }</div>
                    
                </div>

            </div>
        )
    }
}

export default Add