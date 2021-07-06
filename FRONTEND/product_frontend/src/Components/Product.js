import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            
            <div className="col-2 mb-4">
                <div className="card text-left border border-dark">
                    <img className="card-img-top" src={this.props.image} alt="" />
                    <div className="card-body border border-top">
                    <p className="card-title float-left mb-0">{this.props.product_name}</p>
                    <p className="card-text float-right">{this.props.product_price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;