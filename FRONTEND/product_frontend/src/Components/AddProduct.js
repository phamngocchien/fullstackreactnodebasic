import React, { Component } from 'react';
import axios from 'axios';

const addProductAction = (product_name, product_price, image) => {
    return axios.post('/addData', {product_name, product_price, image}).then((resp)=>resp.data)
}
class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_price: '',
            image: ''
        }
    }
    
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        console.log(name + ": " + value);
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        addProductAction(this.state.product_name, this.state.product_price,this.state.image).then((respon) => {
            console.log(respon)
        })
    }

    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-8 mx-auto">
                    <h1 htmlFor="product_name" className="d-flex justify-content-center mb-4">Product Management</h1>
                    <form action="" method="">                 
                        <div className="form-group">
                            <label htmlFor="product_name">The name of the product: </label>
                            <input onChange = {(event) => {this.isChange(event)}} type="text" className="form-control" name="product_name" id="product_name" placeholder="Tên sản phẩm" aria-describedby="name_text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product_price">The price of the product: </label>
                            <input onChange = {(event) => {this.isChange(event)}} type="text" className="form-control" name="product_price" id="product_price" placeholder="Giá sản phẩm" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">The link image of the product: </label>
                            <input onChange = {(event) => {this.isChange(event)}} type="text" className="form-control" name="image" id="image" placeholder="link ảnh" />
                        </div>
                        <button onClick = {() => {this.handleClick()}} type="reset" className="btn btn-info btn-block">Submit</button>
                    </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddProduct;