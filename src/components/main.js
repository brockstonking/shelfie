import React, { Component } from 'react';
import Add from './add/add_product'
import './main.css'

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            pPrice: 0,
            pName: '',
            pImgUrl: '',
            imageCheck: '',
            inventoryList: []
        }

        this.updatePrice = this.updatePrice.bind( this )
        this.updateName = this.updateName.bind( this )
        this.updateImgUrl = this.updateImgUrl.bind( this )
        this.reset = this.reset.bind( this )
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
            pImgUrl: '',
            imageCheck: ''
        })
    }


    render(){
        return(
            <div>
                <Add className='addBox' reset={this.reset} nameVal={ this.state.pName } priceVal={ this.state.pPrice } UrlVal={ this.state.pImgUrl } imageCheck={ this.state.imageCheck } updatePrice={this.updatePrice} updateName={this.updateName} updateImgUrl={this.updateImgUrl} />
                { this.state.pName }
            </div>
        )
    }
}

export default Main