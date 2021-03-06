var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'product',
  password: '2308',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) {});

//api get data from postgreSQl
router.get('/getdata01', function(req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // //get data

  pool.query('SELECT * FROM product_info', (error, response) => {
    if(error){
      console.log(error)
    }else{
      res.send(response.rows);
    }
    // pool.end();
  }) 
});

router.get('/add', function(req, res, next){
  res.render('add', {});
})
router.post('/addData', function(req, res, next){
  var product_name = req.body.product_name;
  var product_price = req.body.product_price;
  var image = req.body.image;
  console.log(product_name)

  pool.query("INSERT INTO product_info (product_name, product_price, image) values ($1, $2, $3)", [product_name, product_price, image]), function(err, res2){
    if(err){
      res2.send(err)
      res2.send(0)

    }else{
      res2.send(1)
    }
  }
})

module.exports = router;
