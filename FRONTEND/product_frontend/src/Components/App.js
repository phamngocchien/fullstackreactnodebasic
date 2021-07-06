import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios';
import React, { Component } from 'react';
const getProductData = () => {
  return axios.get('/getdata01')
  .then(function(res){
    return res.data;
  })
}
const addProductAction = (product_name, product_price, image) => {
  return axios.post('/addData', {product_name, product_price, image}).then((resp)=>resp.data)
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null, // khoi taoj state de chuyen ddu lieu sang day
      product_name: '',
      product_price: '',
      image: ''
    }
  }
  //lay du lieu xong moi thuc hien cac thao tac khac
  componentDidMount = () => {
    if(this.state.data === null){
      getProductData().then((res) => {
        this.setState({
          data:res
        })
      })
    }
  }
  // map data va hien thi len
  printData = () => {
    if (this.state.data !== null){
      return this.state.data.map((value,key)=>{
        return <Product key = {key} product_name = {value.product_name} product_price= {value.product_price} image = {value.image}/>
      })
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
    var dataTemp = [];
    var item = {};
    item.product_name = this.state.product_name;
    item.product_price = this.state.product_price;
    item.image = this.state.image;
    dataTemp = this.state.data;
    if(item.product_name !== ''){
      dataTemp.push(item);
      this.setState({
        data:dataTemp
      })
    }

    addProductAction(this.state.product_name, this.state.product_price,this.state.image).then((respon) => {
        console.log(respon)
    })
  }
  
  render() {
    console.log(this.state.data)
    return (
      <div>
        <HeadTitle/>
        <div className="container-fluid">
          <div className="row">
            <div className ="col">
              <div className="row">
               {this.printData()}  
              </div>
            </div>
            <div className ="col-4">
              <div className="row">
                <div className="mx-auto">
                <h2 htmlFor="product_name" className="d-flex justify-content-center mb-4">Product Management</h2>
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
