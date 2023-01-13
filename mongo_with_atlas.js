let express = require('express');
let app = express();
let port = 9300;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let MongoUrl = "mongodb+srv://Sujatapatil:Sujata21196@cluster0.dqyo1.mongodb.net/?retryWrites=true&w=majority";
let db;

app.get('/', (req, res) => {
    res.send("</h1>Hii from Express");
})
//profile
app.get('/profile', (req, res) => {
    db.collection('profile').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//wishlist
app.get('/wishlist', (req, res) => {
    db.collection('wishlist').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//address
app.get('/address', (req, res) => {
    db.collection('address').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//payment
app.get('/payment', (req, res) => {
    db.collection('payment').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//category
app.get('/category', (req, res) => {
    db.collection('category').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//bag
app.get('/bag', (req, res) => {
    db.collection('bag').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//deal of the day
app.get('/deal_of_day', (req, res) => {
    db.collection('deal_of_day').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//login
app.get('/login', (req, res) => {
    db.collection('login').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//signup
app.get('/signup', (req, res) => {
    db.collection('signup').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//payment options
app.get('/payment_options', (req, res) => {
    db.collection('payment_options').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//price detail
app.get('/price_detail', (req, res) => {
    db.collection('price_detail').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//product category
app.get('/product_category', (req, res) => {
    db.collection('product_cat').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//top picks
app.get('/top_picks', (req, res) => {
    db.collection('top_picks').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//placeorder
app.get('/placeorder', (req, res) => {
    db.collection('placeorder').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//brand category
app.get('/brands', (req, res) => {
    db.collection('brands').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//men
app.get('/men', (req, res) => {
    db.collection('men').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//women
app.get('/women', (req, res) => {
    db.collection('women').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//kids
app.get('/kids', (req, res) => {
    db.collection('kids').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//beauty
app.get('/beauty', (req, res) => {
    db.collection('beauty').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//home and living
app.get('/home_living', (req, res) => {
    db.collection('home_living').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
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
MongoClient.connect(MongoUrl, { useNewUrlParser: true,useUnifiedTopology:true }, (err, dc) => {
    if (err) console.log("Error while connecting");
    db = dc.db('myntra_website');
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    })
})