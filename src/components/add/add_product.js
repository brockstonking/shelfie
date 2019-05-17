import React, { Component } from 'react';
import './add_product.css'
import axios from 'axios';

class Add extends Component {
    constructor(props){
        super(props);

        this.state = {
            pName: '',
            pPrice: 0,
            pImgUrl: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg',
            editItem: '',
            addOrEdit: 'add'
        }

        this.updatePrice = this.updatePrice.bind( this )
        this.updateName = this.updateName.bind( this ) 
        this.updateImgUrl = this.updateImgUrl.bind( this )
        this.reset = this.reset.bind( this )
        this.handleAdd = this.handleAdd.bind( this )
        this.componentDidMount = this.componentDidMount.bind( this )
        this.handleSave = this.handleSave.bind( this )
    } 

    componentDidMount(){
        if (this.props.match.params.id){
            axios.get(`/api/inventory/${ this.props.match.params.id }`)
            .then( results => {
                this.setState({
                    editItem: results.data,
                    addOrEdit: 'edit',
                    pImgUrl: results.data[0].image_url,
                    pName: results.data[0].name,
                    pPrice: results.data[0].price
                })
                console.log(results)

            })
            .catch( err => {
                console.log(err)
            })
        }
    }

    updatePrice(val){
        this.setState({
            pPrice: val
        })
    }

    updateName(val){
        this.setState({
            pName: val
        })
    }

    updateImgUrl(val){
        this.setState({
            pImgUrl: val
        })
    }

    reset(){
        this.setState({
            pPrice: 0,
            pName: '',
            pImgUrl: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg',
        })
        this.props.history.push('/')
    }

    handleAdd(){
        if (!this.state.pName) {
            window.alert('Please add a product name.')
        } else {
            axios.post('/api/inventory', {name: this.state.pName, price: this.state.pPrice, image_url: this.state.pImgUrl})
        .then( results => {
            this.setState({
                pPrice: 0,
                pImgUrl: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg',
                imageCheck: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg',
            })
            console.log(results.data)
        })
        this.props.history.push('/')
        }
        
    }

    handleSave(id){
        axios.put(`/api/inventory/${ id }`, {name: this.state.pName, price: this.state.pPrice, image_url: this.state.pImgUrl})
        .then( results => {
            console.log(results.data)
            this.reset()
            this.props.history.push('/')
        })
        .catch( err => {
            console.log(err)
        })
        
    }

    render(){
        let button = this.state.addOrEdit === 'add' 
        ? <button className='button' onClick={ this.handleAdd }>Add to Inventory</button> 
        : <button className='button' onClick={ () => this.handleSave(this.props.match.params.id) }>Save Changes</button>
        let image_urlVal = this.state.pImgUrl === 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg' ? '' : this.state.pImgUrl
        return(
            <div className='addProductBox'>
                <div><img className='imageChecker' src={ this.state.pImgUrl } alt='' /></div>
                <div>
                    <p>Image URL:</p>
                    <input value={ image_urlVal } onChange={ e => this.updateImgUrl(e.target.value) }></input>
                    <p>Product Name</p>
                    <input value={ this.state.pName } onChange={ e => this.updateName(e.target.value) }></input>
                    <p>Price:</p>
                    <input value={this.state.pPrice } onChange={ e => this.updatePrice(e.target.value)}></input>
                </div>
                <div className='addCancelButtonDiv'>
                    <div><button className='button' onClick={ this.reset } >Cancel</button></div>
                    <div>{ button }</div>
                    
                </div>

            </div>
        )
    }
}

export default Add