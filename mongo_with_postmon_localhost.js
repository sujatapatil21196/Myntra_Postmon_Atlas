let express = require('express');
let bodyParser=require('body-parser');
let app = express();
let port = 9500;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let MongoUrl ="mongodb://localhost:27017";
let db;

//middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
    res.send("</h1>Hii from Express");
})
//1)profile
//get
//http://localhost:9500/profile
app.get('/profile', (req, res) => {
    db.collection('profile').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/profile
app.post('/profile', (req, res) => {
    db.collection('profile').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Profile data inserted successfully!!");
    })
})

//2)wishlist
//get
//http://localhost:9500/wishlist
app.get('/wishlist', (req, res) => {
    db.collection('wishlist').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/wishlist
app.post('/wishlist', (req, res) => {
    db.collection('wishlist').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Wishlist data inserted successfully!!");
    })
})

//3)address
//get
//http://localhost:9500/address
app.get('/address', (req, res) => {
    db.collection('address').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/address
app.post('/address', (req, res) => {
    db.collection('address').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Address data inserted successfully!!");
    })
})

//4)payment
//get
//http://localhost:9500/payment
app.get('/payment', (req, res) => {
    db.collection('payment').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/payment
app.post('/payment', (req, res) => {
    db.collection('payment').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Payment data inserted successfully!!");
    })
})
//5)category
//get
//http://localhost:9500/category
app.get('/category', (req, res) => {
    db.collection('category').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/category
app.post('/category', (req, res) => {
    db.collection('category').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Category data inserted successfully!!");
    })
})

//6)bag
//get
//http://localhost:9500/bag
app.get('/bag', (req, res) => {
    db.collection('bag').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/bag
app.post('/bag', (req, res) => {
    db.collection('bag').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Bag data inserted successfully!!");
    })
})

//7)deal of the day
//get
//http://localhost:9500/deal_of_day
app.get('/deal_of_day', (req, res) => {
    db.collection('deal_of_day').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/deal_of_day
app.post('/deal_of_day', (req, res) => {
    db.collection('deal_of_day').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Deal of day inserted successfully!!");
    })
})

//8)login
//get
//http://localhost:9500/login
app.get('/login', (req, res) => {
    db.collection('login').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/login
app.post('/login', (req, res) => {
    db.collection('login').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Login successfully!!");
    })
})

//9)signup
//get
//http://localhost:9500/signup
app.get('/signup', (req, res) => {
    db.collection('signup').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/signup
app.post('/signup', (req, res) => {
    db.collection('signup').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Signup successfully!!");
    })
})

//10)payment options
//get
//http://localhost:9500/payment_options
app.get('/payment_options', (req, res) => {
    db.collection('payment_options').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/payment_options
app.post('/payment_options', (req, res) => {
    db.collection('payment_options').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Payment options data inserted successfully!!");
    })
})

//11)price detail
//get
//http://localhost:9500/price_detail
app.get('/price_detail', (req, res) => {
    db.collection('price_detail').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/price_detail
app.post('/price_detail', (req, res) => {
    db.collection('price_detail').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Price detail data inserted successfully!!");
    })
})
//12)product category
//get
//http://localhost:9500/product_category
app.get('/product_category', (req, res) => {
    db.collection('product_cat').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/product_category
app.post('/product_category', (req, res) => {
    db.collection('product_cat').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Product category data inserted successfully!!");
    })
})

//13)top picks
//get
//http://localhost:9500/top_picks
app.get('/top_picks', (req, res) => {
    db.collection('top_picks').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/top_picks
app.post('/top_picks', (req, res) => {
    db.collection('top_picks').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Top picks data inserted successfully!!");
    })
})

//14)placeorder
//get
//http://localhost:9500/placeorder
app.get('/placeorder', (req, res) => {
    db.collection('placeorder').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/placeorder
app.post('/placeorder', (req, res) => {
    db.collection('placeorder').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Placeorder successfully!!");
    })
})

//15)brands
//get
//http://localhost:9500/brands
app.get('/brands', (req, res) => {
    db.collection('brands').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/brands
app.post('/brands', (req, res) => {
    db.collection('brands').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Brands data inserted successfully!!");
    })
})

//16)men
//get
//http://localhost:9500/men
app.get('/men', (req, res) => {
    db.collection('men').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/men
app.post('/men', (req, res) => {
    db.collection('men').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Men data inserted successfully!!");
    })
})

//17)women
//get
//http://localhost:9500/women
app.get('/women', (req, res) => {
    db.collection('women').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/women
app.post('/women', (req, res) => {
    db.collection('women').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Women data inserted successfully!!");
    })
})

//18)kids
//get
//http://localhost:9500/kids
app.get('/kids', (req, res) => {
    db.collection('kids').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/kids
app.post('/kids', (req, res) => {
    db.collection('kids').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Kids data inserted successfully!!");
    })
})

//19)beauty
//get
//http://localhost:9500/beauty
app.get('/beauty', (req, res) => {
    db.collection('beauty').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/beauty
app.post('/beauty', (req, res) => {
    db.collection('beauty').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("Beauty data inserted successfully!!");
    })
})

//20)home and living
//get
//http://localhost:9500/home_living
app.get('/home_living', (req, res) => {
    db.collection('home_living').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//post
//http://localhost:9500/home_living
app.post('/home_living', (req, res) => {
    db.collection('home_living').insert(req.body,(err,result)=> {
        if (err) throw err;
        res.send("home And living data inserted successfully!!");
    })
})


app.get('/product', (req, res) => {
    let Product_cat=req.query.product_cat;
    let query={};
    if(Product_cat){
        query={product_detail:Product_cat}
    }
    db.collection('deal_of_day').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
/*
//list of quick search
app.get('/cuisine_type', (req, res) => {
    db.collection('cuisine_type').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//List Of Restaurants wrt to Meal
app.get('/restaurant', (req, res) => {
    let cuisineId=req.query.cuisine_type.cuisineId;
    let query={};
    if(cuisineId){
        query={cuisine_id:cuisineId}
    }
    db.collection('restaurant').find(cuisineId).pretty((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
*/
MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, dc) => {
    if (err) console.log("Error while connecting");
    db = dc.db('myntra_website');
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    })
})