import React, { Component } from 'react';
import Add from './add/add_product';
import Dashboard from './dashboard/dashboard';
import './main.css';
import axios from 'axios';

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            pPrice: 0,
            pName: '',
            pImgUrl: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg',
            imageCheck: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg',
            inventoryList: [],
            display: 'add',
            editId: null
        }

        this.updatePrice = this.updatePrice.bind( this )
        this.updateName = this.updateName.bind( this )
        this.updateImgUrl = this.updateImgUrl.bind( this )
        this.reset = this.reset.bind( this )
        this.componentDidMount = this.componentDidMount.bind( this )
        this.handleAdd = this.handleAdd.bind( this )
        this.handleDelete = this.handleDelete.bind( this )
        this.handleEdit = this.handleEdit.bind( this )
        this.handleSave = this.handleSave.bind( this )
    }

    componentDidMount(){
        axios.get('/api/inventory').then( results => {
            this.setState({
                inventoryList: results.data
            })
        })
        
    }

    handleAdd(){
        if (!this.state.pName) {
            window.alert('Please add a product name.')
        } else {
            axios.post('/api/inventory', {name: this.state.pName, price: this.state.pPrice, image_url: this.state.pImgUrl})
        .then( results => {
            this.setState({
                inventoryList: results.data,
                pPrice: 0,
                pImgUrl: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg',
                imageCheck: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg',
            })
            console.log(results.data)
        })
        }
        
    }

    handleDelete(product_id){
        axios.delete(`/api/inventory/${ product_id }`)
        .then( results => {
            this.setState({
                inventoryList: results.data
            })
        })
    }

    handleEdit(obj){
        this.setState({
            pName: obj.name,
            pPrice: obj.price,
            pImgUrl: obj.url,
            editId: obj.product_id,
            display: 'edit'
        })
    }

    handleSave(id){
        axios.put(`/api/inventory/${ id }`, {name: this.state.pName, price: this.state.pPrice, image_url: this.state.pImgUrl})
        .then( results => {
            this.setState({
                inventoryList: results.data
            })
        })
        .catch( err => {
            console.log(err)
        })
        this.reset()
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
            imageCheck: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg',
            display: 'add'
        })
    }


    render(){

        return(
            <div className='mainDiv'>
            
                <div className='dashboardDiv'>
                    <Dashboard edit={ this.handleEdit } delete={ this.handleDelete } inventory={ this.state.inventoryList } />
                </div>
                <div className='addBoxDiv'>
                    <div className='addBox'>
                    <Add save={ this.handleSave } editId={ this.state.editId } addOrEdit={ this.state.display } reset={this.reset} handleAdd={ this.handleAdd } nameVal={ this.state.pName } priceVal={ this.state.pPrice } UrlVal={ this.state.pImgUrl } imageCheck={ this.state.imageCheck } updatePrice={this.updatePrice} updateName={this.updateName} updateImgUrl={this.updateImgUrl} />

                    </div>
                </div>
                
            </div>
        )
    }
}

export default Main