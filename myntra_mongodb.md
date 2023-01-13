//1)Login collection
db.login.insert({
    "email/phone_no":"jamdade21196@gmail.com",
    "password":"Sujata@123"
})
 db.login.find().pretty()
{
        "_id" : ObjectId("63b6b11f30742c058a512aed"),
        "email/phone_no" : "jamdade21196@gmail.com",
        "password" : "Sujata@123"
}
//2)Signup collection
db.signup.insert([{
    "contact_details":[{
         "full_name":"Sujata Swapnil Patil",
         "phone_no":"9834628623",
         "email_id":"jamdade21196@gmail.com",
         "password":"Sujata@123"
    }]
}])
 db.signup.find().pretty()
{
        "_id" : ObjectId("63b6c6038ead30bf8ba6c1d2"),
        "contact_details" : [
                {
                        "full_name" : "Sujata Swapnil Patil",
                        "phone_no" : "9834628623",
                        "email_id" : "jamdade21196@gmail.com",
                        "password" : "Sujata@123"
                }
        ]
}
//3)address collection
db.address.insert({
    "house_no":"C-505,Eklingaji Parisar",
    "street":"Eklingaji Rd",
    "city":"Sanand",
    "pincode":"342121",
    "district":"Ahmedabad",
    "state":"Gujarat",
    "country":"India",
    "mobile_no":9834628613
})
  db.address.find().pretty()
{
        "_id" : ObjectId("63bfa9dec10a44380e9201f2"),
        "house_no" : "C-505,Eklingaji Parisar",
        "street" : "Eklingaji Rd",
        "city" : "Sanand",
        "pincode" : "342121",
        "district" : "Ahmedabad",
        "state" : "Gujarat",
        "country" : "India",
        "mobile_no" : 9834628613
}
//4)payment collection
db.payment.insert({
    "payment_id":456,
    "payment_option":"opt2",
    "price_detail":[{
             "order_id":1,
             "Tot_mrp":718,
             "discount":319,
             "total_amt":399
    }]
})
db.payment.find().pretty()
{
        "_id" : ObjectId("63bfb2a7c10a44380e9201f4"),
        "payment_id" : 456,
        "payment_option" : "opt2",
        "price_detail" : [
                {
                        "order_id" : 1,
                        "Tot_mrp" : 718,
                        "discount" : 319,
                        "total_amt" : 399
                }
        ]
}
//5)price detail collection
db.price_detail.insert([{
             "order_id":1,
             "product_id":1,
             "Tot_mrp":718,
             "discount":319,
             "total_amt":399
       },
       {
             "order_id":2,
             "product_id":2,
             "Tot_mrp":880,
             "discount":251,
             "total_amt":629
       }
])
  db.price_detail.find().pretty()
{
        "_id" : ObjectId("63bfb4d7c10a44380e9201f6"),
        "order_id" : 1,
        "product_id" : 1,
        "Tot_mrp" : 718,
        "discount" : 319,
        "total_amt" : 399
}
{
        "_id" : ObjectId("63bfb4d7c10a44380e9201f7"),
        "order_id" : 2,
        "product_id" : 2,
        "Tot_mrp" : 880,
        "discount" : 251,
        "total_amt" : 629
}
//6)payment options collection
db.payment_options.insert({
    "opt1":{
         "option":"Cash On Delivery",
         "capcha/img":"40347"   
       },
     "opt2":{
         "option":"Credit/Debit Card",
         "card_no":1234567891234345,
         "name_on_card":"Sujata Sunil Jamdade",
         "valid_thru":"10/23",
         "cvv":766
    },
    "opt3":{
         "option":"PhonePe/Google Pay/BHIM UPI",
         "upi":{
            "upi_id":123,
            "amazon_pay_upi":"-"
          }
       },
    "opt4":[{
         "option":"Net Banking",
         "main_bank_name":{
            "no1":"Axis Bank",
            "no2":"HDFC Bank",
            "no3":"ICICI Bank",
            "no4":"Kotak Bank",
            "no5":"SBI"
         },
         "other_bank":{
            "no1":"Andhra Bank",
            "no2":"Bank Of India",
            "no3":"Bank Of Maharashtra",
            "no4":"Canara Bank",
            "no5":"IDBI Bank",
            "no6":"IDFC Bank"
    }
   }],
      "opt5":{
           "option":"EMI/Pay Later",
           "emi_option":"Credit Card EMI/Debit Card EMI",
           "other":{
             "no1":"ZestMoney",
             "no2":"Lazypay",
             "no3":"ICICI Pay Later"
           }
}
})

  db.payment_options.find().pretty()
{
        "_id" : ObjectId("63bfd012bec758aabcbe8d07"),
        "opt1" : {
                "option" : "Cash On Delivery",
                "capcha/img" : "40347"
        },
        "opt2" : {
                "option" : "Credit/Debit Card",
                "card_no" : 1234567891234345,
                "name_on_card" : "Sujata Sunil Jamdade",
                "valid_thru" : "10/23",
                "cvv" : 766
        },
        "opt3" : {
                "option" : "PhonePe/Google Pay/BHIM UPI",
                "upi" : {
                        "upi_id" : 123,
                        "amazon_pay_upi" : "-"
                }
        },
        "opt4" : [
                {
                        "option" : "Net Banking",
                        "main_bank_name" : {
                                "no1" : "Axis Bank",
                                "no2" : "HDFC Bank",
                                "no3" : "ICICI Bank",
                                "no4" : "Kotak Bank",
                                "no5" : "SBI"
                        },
                        "other_bank" : {
                                "no1" : "Andhra Bank",
                                "no2" : "Bank Of India",
                                "no3" : "Bank Of Maharashtra",
                                "no4" : "Canara Bank",
                                "no5" : "IDBI Bank",
                                "no6" : "IDFC Bank"
                        }
                }
        ],
        "opt5" : {
                "option" : "EMI/Pay Later",
                "emi_option" : "Credit Card EMI/Debit Card EMI",
                "other" : {
                        "no1" : "ZestMoney",
                        "no2" : "Lazypay",
                        "no3" : "ICICI Pay Later"
                }
        }
}
//7)category collection
db.category.insert({
    "cat1":"Men",
    "cat2":"Women",
    "cat3":"Kids",
    "cat4":"Beauty",
    "cat5":"Home & Living"
})
  db.category.find().pretty()
{
        "_id" : ObjectId("63bfbdd0bec758aabcbe8cff"),
        "cat1" : "Men",
        "cat2" : "Women",
        "cat3" : "Kids",
        "cat4" : "Beauty",
        "cat5" : "Home & Living"
}
//8)wishlist collection
 db.wishlist.insert([{
        "product_id" : 5,
        "product_name" : "Sassafras printed one piece",
        "product_img" : "https://i.ibb.co/znZd7PW/img1.jpg",
        "product_detail" : "Sassafras Off-White & Brown Leopard printed one piece",
        "mrp":1899,
        "price" : 1044,
        "offer" : "45% off"
},
{
        "product_id" : 7,
        "product_name" : "Taavi Printed Mules",
        "product_img" : "https://i.ibb.co/KW0BLby/mules.jpg",
        "product_detail" : "Taavi Women Grey & Off-White Printed Mules",
        "mrp":1599,
        "price" :1599,
        "offer" : "-"
  }
])

> db.wishlist.find().pretty()
{
        "_id" : ObjectId("63bfc407bec758aabcbe8d04"),
        "product_id" : 5,
        "product_name" : "Sassafras printed one piece",
        "product_img" : "https://i.ibb.co/znZd7PW/img1.jpg",
        "product_detail" : "Sassafras Off-White & Brown Leopard printed one piece",
        "mrp" : 1899,
        "price" : 1044,
        "offer" : "45% off"
}
{
        "_id" : ObjectId("63bfc407bec758aabcbe8d05"),
        "product_id" : 7,
        "product_name" : "Taavi Printed Mules",
        "product_img" : "https://i.ibb.co/KW0BLby/mules.jpg",
        "product_detail" : "Taavi Women Grey & Off-White Printed Mules",
        "mrp" : 1599,
        "price" : 1599,
        "offer" : "-"
}
//9)profile collection
db.profile.insert({
        "profile_id":21196,
        "profile_name":"Sujata",
        "mobile_no":9834628613,
        "orders":[{
                "prod_id":1,
                "order_id":1,
                "prod_name":"Shinning diva",
                "prod_detail":"Women Silver-Plated Oxidised Jewellery",
                "mrp":718,
                "price":399,
                "order_status":"Pending",
                "offer":"80% OFF",
                "qty":1,
                "size":"OneSize"
        },
        { 
                "prod_id":2,
                "order_id":2,
                "prod_name":"Kurti",
                "prod_detail":"Indian style colorful kurti",
                "mrp":880,
                "price":629,
                "order_status":"Delivered",
                "offer":"40% OFF",
                "qty":3,
                "size":"S"

        }
        ],
        "wishlist":[
                { 
                "prod_id":3,
                "prod_name":"libas kurta with palazzos & Dupatta",
                "prod_detail":"Women Navy Blue Pure Cotton Floral Print Kurta with Palazzos & Dupatta",
                "mrp":2655,
                "price":1475,
                "offer":"80% OFF",
                "qty":1,
                "size":"M"
                },
                {
                "prod_id":4,
                "prod_name":"SheWill Kurta with Skirt",
                "prod_detail":"Women Printed Kurta with Skirt",
                "mrp":1848,
                "price":1100,
                "offer":"68% OFF",
                "qty":3,
                "size":"S"
                }
        ],
        "Address":[
                {
                      "house_no":"C-505,Eklingaji Parisar",
                      "street":"Eklingaji Rd",
                      "city":"Sanand",
                      "pincode":"342121",
                      "district":"Ahmedabad",
                      "state":"Gujarat",
                      "country":"India",
                      "mobile_no":9834628613  
                }
        ]
})


   db.profile.find().pretty()
{
        "_id" : ObjectId("63bfafb8c10a44380e9201f3"),
        "profile_id" : 21196,
        "profile_name" : "Sujata",
        "mobile_no" : 9834628613,
        "orders" : [
                {
                        "prod_id" : 1,
                        "order_id" : 1,
                        "prod_name" : "Shinning diva",
                        "prod_detail" : "Women Silver-Plated Oxidised Jewellery",
                        "mrp" : 718,
                        "price" : 399,
                        "order_status" : "Pending",
                        "offer" : "80% OFF",
                        "qty" : 1,
                        "size" : "OneSize"
                },
                {
                        "prod_id" : 2,
                        "order_id" : 2,
                        "prod_name" : "Kurti",
                        "prod_detail" : "Indian style colorful kurti",
                        "mrp" : 880,
                        "price" : 629,
                        "order_status" : "Delivered",
                        "offer" : "40% OFF",
                        "qty" : 3,
                        "size" : "S"
                }
        ],
        "wishlist" : [
                {
                        "prod_id" : 3,
                        "prod_name" : "libas kurta with palazzos & Dupatta",
                        "prod_detail" : "Women Navy Blue Pure Cotton Floral Print Kurta with Palazzos & Dupatta",
                        "mrp" : 2655,
                        "price" : 1475,
                        "offer" : "80% OFF",
                        "qty" : 1,
                        "size" : "M"
                },
                {
                        "prod_id" : 4,
                        "prod_name" : "SheWill Kurta with Skirt",
                        "prod_detail" : "Women Printed Kurta with Skirt",
                        "mrp" : 1848,
                        "price" : 1100,
                        "offer" : "68% OFF",
                        "qty" : 3,
                        "size" : "S"
                }
        ],
        "Address" : [
                {
                        "house_no" : "C-505,Eklingaji Parisar",
                        "street" : "Eklingaji Rd",
                        "city" : "Sanand",
                        "pincode" : "342121",
                        "district" : "Ahmedabad",
                        "state" : "Gujarat",
                        "country" : "India",
                        "mobile_no" : 9834628613
                }
        ]
}

//10)placeorder collection
db.placeorder.insert([{
   "order_id":1,
   "prod_id" : 2,
   "prod_name" : "Kurti",
   "prod_detail" : "Indian style colorful kurti",
   "mrp":880,
   "price" : 629,
   "order_status" : "delivered",
   "offer" : "40% OFF" ,
   "qty" : 3,
   "size" : "S",
   "Address":[{
            "house_no" : "c-505,Eklingaji parisar",
            "street" : "Eklingaji Rd",
            "city" : "sanand",
            "pincode" : "342121",
            "district" : "Ahmedabad",
            "state" : "gujrat",
            "country" : "India",
            "mobile_no" : 9834628613
   }],
   "price_details":[{
           "tot_mrp":880,
           "dis":"40%",
           "totamt":629
   }],
   "payment":{
            "payment_options":
            {
            "option" : "opt1"
            }
         }    
}])
> 
> db.placeorder.find().pretty()
{
        "_id" : ObjectId("63be42e405b3897d9dc88542"),
        "order_id" : 1,
        "prod_id" : 2,
        "prod_name" : "Kurti",
        "prod_detail" : "Indian style colorful kurti",
        "Price" : 629,
        "order_status" : "delivered",
        "offer" : "40%",
        "qty" : 3,
        "size" : "S",
        "Address" : [
                {
                        "house_no" : "c-505,Eklingaji parisar",
                        "street" : "Eklingaji Rd",
                        "city" : "sanand",
                        "pincode" : "342121",
                        "district" : "Ahmedabad",
                        "state" : "gujrat",
                        "country" : "India",
                        "mobile_no" : 9834628613
                }
        ],
        "price_details" : [
                {
                        "tot_mrp" : 1799,
                        "dis" : "65%",
                        "totamt" : 629
                }
        ],
        "payment" : {
                "payment_options" : {
                        "opt1" : "cash on delivery",
                        "opt2" : "credit/debit card",
                        "opt3" : "phone pay/google pay",
                        "opt4" : "paytm/wallets",
                        "opt5" : "net banking"
                }
        }
}
{
        "_id" : ObjectId("63c123117ad798fdc04bca88"),
        "order_id" : 1,
        "prod_id" : 2,
        "prod_name" : "Kurti",
        "prod_detail" : "Indian style colorful kurti",
        "mrp" : 880,
        "price" : 629,
        "order_status" : "delivered",
        "offer" : "40% OFF",
        "qty" : 3,
        "size" : "S",
        "Address" : [
                {
                        "house_no" : "c-505,Eklingaji parisar",
                        "street" : "Eklingaji Rd",
                        "city" : "sanand",
                        "pincode" : "342121",
                        "district" : "Ahmedabad",
                        "state" : "gujrat",
                        "country" : "India",
                        "mobile_no" : 9834628613
                }
        ],
        "price_details" : [
                {
                        "tot_mrp" : 880,
                        "dis" : "40%",
                        "totamt" : 629
                }
        ],
        "payment" : {
                "payment_options" : {
                        "option" : "opt1"
                }
        }
}
//11)deal of the day collection
db.deal_of_day.insert([{
    "category":"cat2",
    "product_cat":"Prod_cat1",
    "product_img":"abscdd.jpeg",
    "price_range":"under 799",
    "offer":"30-50% Off",
    "product_detail":[{
                 "prod_id":13,
                 "prod_name":"Jaipuri Kurti",
                 "prod_detail":"Women Sea Green Angrakha Pure Cotton Kurta",
                 "mrp":700,
                 "price":500,
                 "offer":"40% OFF",
                 "material":"Pure Cotton",
                 "color":"Sea Green",
                 "qty":1,
                 "size":"S",
                 "img":"xvbsfg.jpeg"
    }]
 },
 {
    "category":"cat2",
    "product_cat":"Prod_cat1",
    "product_img":"abscdd.jpeg",
    "price_range":"under 999",
    "offer":"40-50% Off",
    "product_detail":[{
                 "prod_id":14,
                 "prod_name":"Aspora Maxi Dress",
                 "prod_detail":"Women Black & Red Floral Fit And Flare Maxi Dress",
                 "mrp":850,
                 "price":500,
                 "offer":"40% OFF",
                 "material":"Georgette",
                 "color":"Black & Red",
                 "qty":2,
                 "size":"M",
                 "img":"xvbsfg.jpeg",
                 "rating":4.5
    }]
 },
 {
     "category":"cat2",
    "product_cat":"Prod_cat9",
    "product_img":"abscdd.jpeg",
    "price_range":"under 899",
    "offer":"20-30% Off",
    "product_detail":[{
                 "prod_id":15,
                 "prod_name":"Shezone Ballerinas",
                 "prod_detail":"Women Beige Solid Ballerinas",
                 "mrp":1499,
                 "price":699,
                 "offer":"Rs.800 OFF",
                 "material":"Synthetic",
                 "color":"Beige",
                 "qty":1,
                 "size":"37",
                 "img":"xvbsfg.jpeg",
                 "rating":4.5
    }]
 },
 {
     "category":"cat2",
    "product_cat":"Prod_cat11",
    "product_img":"abscdd.jpeg",
    "price_range":"under 699",
    "offer":"10-20% Off",
    "product_detail":[{
                 "prod_id":16,
                 "prod_name":"DressBerry Analogue Watch",
                 "prod_detail":"Women Mauve Analogue Watch",
                 "mrp":1200,
                 "price":600,
                 "offer":"50% OFF",
                 "material":"Leather",
                 "color":"Purple",
                 "qty":1,
                 "size":"18mm",
                 "img":"xvbsfg.jpeg",
                 "rating":4.5
    }]
 },
 {
     "category":"cat2",
    "product_cat":"Prod_cat2",
    "product_img":"abscdd.jpeg",
    "price_range":"under 599",
    "offer":"30-40% Off",
    "product_detail":[{
                 "prod_id":16,
                 "prod_name":"Lino Perros",
                 "prod_detail":"Off-White Solid Sling Bag",
                 "mrp":1000,
                 "price":600,
                 "offer":"40% OFF",
                 "material":"Synthetic Leather",
                 "color":"White",
                 "qty":1,
                 "size":"Large",
                 "img":"xvbsfg.jpeg",
                 "rating":4.5
    }]
 },
 {
     "category":"cat2",
    "product_cat":"Glasses",
    "product_img":"abscdd.jpeg",
    "price_range":"under 699",
    "offer":"10-50% Off",
    "product_detail":[{
                 "prod_id":16,
                 "prod_name":"Optify",
                 "prod_detail":"White Computer Glasses",
                 "mrp":1499,
                 "price":699,
                 "offer":"Rs.800 OFF",
                 "material":"Polycarbonate",
                 "color":"White",
                 "qty":1,
                 "size":"M",
                 "img":"xvbsfg.jpeg",
                 "rating":4
    }]
 }    
 ])
 db.deal_of_day.find().pretty()
{
        "_id" : ObjectId("63b80c8872c775e4119864d8"),
        "category" : "cat1",
        "product_cat" : "kurta",
        "product_img" : "abscdd.jpeg",
        "price_range" : -100,
        "offer" : "40% Off",
        "product_detail" : [
                {
                        "prod_id" : 1,
                        "prod_name" : "Shinning diva",
                        "prod_detail" : "Women Silver-Plated Oxidised Jewellery",
                        "Price" : 399,
                        "offer" : "80% OFF",
                        "qty" : 1,
                        "size" : "onesize",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4
                }
        ]
}
{
        "_id" : ObjectId("63be3b3cb79d3de9fd7879c8"),
        "category" : "cat1",
        "product_cat" : "kurta",
        "product_img" : "abscdd.jpeg",
        "price_range" : -100,
        "offer" : "40% Off",
        "product_detail" : [
                {
                        "prod_id" : 1,
                        "prod_name" : "Shinning diva",
                        "prod_detail" : "Women Silver-Plated Oxidised Jewellery",
                        "Price" : 399,
                        "offer" : "80% OFF",
                        "qty" : 1,
                        "size" : "onesize",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4
                }
        ]
}
{
        "_id" : ObjectId("63be3b3cb79d3de9fd7879c9"),
        "category" : "cat1",
        "product_cat" : "dresses",
        "product_img" : "abscdd.jpeg",
        "price_range" : -400,
        "offer" : "20% Off",
        "product_detail" : [
                {
                        "prod_id" : 1,
                        "prod_name" : "diva shine",
                        "prod_detail" : "beautiful dresses variety",
                        "Price" : 700,
                        "offer" : "20% OFF",
                        "qty" : 1,
                        "size" : "S",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4
                }
        ]
}
{
        "_id" : ObjectId("63c029e8d6a870678157c23d"),
        "category" : "cat2",
        "product_cat" : "Prod_cat1",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 799",
        "offer" : "30-50% Off",
        "product_detail" : [
                {
                        "prod_id" : 13,
                        "prod_name" : "Jaipuri Kurti",
                        "prod_detail" : "Women Sea Green Angrakha Pure Cotton Kurta",
                        "mrp" : 700,
                        "price" : 500,
                        "offer" : "40% OFF",
                        "material" : "Pure Cotton",
                        "color" : "Sea Green",
                        "qty" : 1,
                        "size" : "S",
                        "img" : "xvbsfg.jpeg"
                }
        ]
}
{
        "_id" : ObjectId("63c029e8d6a870678157c23e"),
        "category" : "cat2",
        "product_cat" : "Prod_cat1",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 999",
        "offer" : "40-50% Off",
        "product_detail" : [
                {
                        "prod_id" : 14,
                        "prod_name" : "Aspora Maxi Dress",
                        "prod_detail" : "Women Black & Red Floral Fit And Flare Maxi Dress",
                        "mrp" : 850,
                        "price" : 500,
                        "offer" : "40% OFF",
                        "material" : "Georgette",
                        "color" : "Black & Red",
                        "qty" : 2,
                        "size" : "M",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4.5
                }
        ]
}
{
        "_id" : ObjectId("63c029e8d6a870678157c23f"),
        "category" : "cat2",
        "product_cat" : "Prod_cat9",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 899",
        "offer" : "20-30% Off",
        "product_detail" : [
                {
                        "prod_id" : 15,
                        "prod_name" : "Shezone Ballerinas",
                        "prod_detail" : "Women Beige Solid Ballerinas",
                        "mrp" : 1499,
                        "price" : 699,
                        "offer" : "Rs.800 OFF",
                        "material" : "Synthetic",
                        "color" : "Beige",
                        "qty" : 1,
                        "size" : "37",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4.5
                }
        ]
}
{
        "_id" : ObjectId("63c029e8d6a870678157c240"),
        "category" : "cat2",
        "product_cat" : "Prod_cat11",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 699",
        "offer" : "10-20% Off",
        "product_detail" : [
                {
                        "prod_id" : 16,
                        "prod_name" : "DressBerry Analogue Watch",
                        "prod_detail" : "Women Mauve Analogue Watch",
                        "mrp" : 1200,
                        "price" : 600,
                        "offer" : "50% OFF",
                        "material" : "Leather",
                        "color" : "Purple",
                        "qty" : 1,
                        "size" : "18mm",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4.5
                }
        ]
}
{
        "_id" : ObjectId("63c029e8d6a870678157c241"),
        "category" : "cat2",
        "product_cat" : "Prod_cat2",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 599",
        "offer" : "30-40% Off",
        "product_detail" : [
                {
                        "prod_id" : 16,
                        "prod_name" : "Lino Perros",
                        "prod_detail" : "Off-White Solid Sling Bag",
                        "mrp" : 1000,
                        "price" : 600,
                        "offer" : "40% OFF",
                        "material" : "Synthetic Leather",
                        "color" : "White",
                        "qty" : 1,
                        "size" : "Large",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4.5
                }
        ]
}
{
        "_id" : ObjectId("63c029e8d6a870678157c242"),
        "category" : "cat2",
        "product_cat" : "Glasses",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 699",
        "offer" : "10-50% Off",
        "product_detail" : [
                {
                        "prod_id" : 16,
                        "prod_name" : "Optify",
                        "prod_detail" : "White Computer Glasses",
                        "mrp" : 1499,
                        "price" : 699,
                        "offer" : "Rs.800 OFF",
                        "material" : "Polycarbonate",
                        "color" : "White",
                        "qty" : 1,
                        "size" : "M",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4
                }
        ]
}
//12)top_picks
db.top_picks.insert([{
    "category":"cat2",
    "product_cat":"Prod_cat1",
    "product_img":"abscdd.jpeg",
    "price_range":"under 799",
    "offer":"30-50% Off",
    "product_detail":[{
                 "prod_id":14,
                 "prod_name":"Libas Kurta Set",
                 "prod_detail":"Cotton Floral Print Kurta Sets",
                 "mrp":1200,
                 "price":840,
                 "offer":"30% OFF",
                 "material":"Pure Cotton",
                 "color":"Navy Blue",
                 "qty":1,
                 "size":"M",
                 "img":"xvbsfg.jpeg"
    }]
 },
 {
    "category":"cat2",
    "product_cat":"Prod_cat1",
    "product_img":"abscdd.jpeg",
    "price_range":"under 999",
    "offer":"40-50% Off",
    "product_detail":[{
                 "prod_id":15,
                 "prod_name":"V & M Crepe Dress",
                 "prod_detail":"V & M Self Design Flared Crepe Dress",
                 "mrp":1800,
                 "price":1080,
                 "offer":"40% OFF",
                 "material":"Polyester",
                 "color":"Black",
                 "qty":2,
                 "size":"M",
                 "img":"xvbsfg.jpeg",
                 "rating":4.5
    }]
 },
 {
     "category":"cat2",
    "product_cat":"Prod_cat9",
    "product_img":"abscdd.jpeg",
    "price_range":"under 899",
    "offer":"5-10% Off",
    "product_detail":[{
                 "prod_id":16,
                 "prod_name":"Shoetopia Flats",
                 "prod_detail":"Shoetopia Women Peach-Coloured Printed Ballerians Flats",
                 "mrp":999,
                 "price":899,
                 "offer":"10% OFF",
                 "material":"Synthetic",
                 "color":"Peach",
                 "qty":1,
                 "size":"37",
                 "img":"xvbsfg.jpeg",
                 "rating":4.5
    }]
 },
 {
     "category":"cat1",
    "product_cat":"Prod_cat11",
    "product_img":"abscdd.jpeg",
    "price_range":"under 699",
    "offer":"10-50% Off",
    "product_detail":[{
                 "prod_id":17,
                 "prod_name":"DressBerry Analogue Watch",
                 "prod_detail":"mens Mauve Analogue Watch",
                 "mrp":1100,
                 "price":550,
                 "offer":"50% OFF",
                 "material":"Leather",
                 "color":"brown",
                 "qty":1,
                 "size":"18mm",
                 "img":"xvbsfg.jpeg",
                 "rating":4.5
    }]
   }
 ])
> db.top_picks.find().pretty()
{
        "_id" : ObjectId("63be3b87b79d3de9fd7879ca"),
        "category" : "cat1",
        "product_cat" : "kurta",
        "product_img" : "abscdd.jpeg",
        "price_range" : -100,
        "offer" : "40% Off",
        "product_detail" : [
                {
                        "prod_id" : 1,
                        "prod_name" : "Shinning diva",
                        "prod_detail" : "Women Silver-Plated Oxidised Jewellery",
                        "Price" : 399,
                        "offer" : "80% OFF",
                        "qty" : 1,
                        "size" : "onesize",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4
                }
        ]
}
{
        "_id" : ObjectId("63be3b87b79d3de9fd7879cb"),
        "category" : "cat1",
        "product_cat" : "dresses",
        "product_img" : "abscdd.jpeg",
        "price_range" : -400,
        "offer" : "20% Off",
        "product_detail" : [
                {
                        "prod_id" : 1,
                        "prod_name" : "diva shine",
                        "prod_detail" : "beautiful dresses variety",
                        "Price" : 700,
                        "offer" : "20% OFF",
                        "qty" : 1,
                        "size" : "S",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4
                }
        ]
}
{
        "_id" : ObjectId("63c107377ad798fdc04bca71"),
        "category" : "cat2",
        "product_cat" : "Prod_cat1",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 799",
        "offer" : "30-50% Off",
        "product_detail" : [
                {
                        "prod_id" : 14,
                        "prod_name" : "Libas Kurta Set",
                        "prod_detail" : "Cotton Floral Print Kurta Sets",
                        "mrp" : 1200,
                        "price" : 840,
                        "offer" : "30% OFF",
                        "material" : "Pure Cotton",
                        "color" : "Navy Blue",
                        "qty" : 1,
                        "size" : "M",
                        "img" : "xvbsfg.jpeg"
                }
        ]
}
{
        "_id" : ObjectId("63c107377ad798fdc04bca72"),
        "category" : "cat2",
        "product_cat" : "Prod_cat1",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 999",
        "offer" : "40-50% Off",
        "product_detail" : [
                {
                        "prod_id" : 15,
                        "prod_name" : "V & M Crepe Dress",
                        "prod_detail" : "V & M Self Design Flared Crepe Dress",
                        "mrp" : 1800,
                        "price" : 1080,
                        "offer" : "40% OFF",
                        "material" : "Polyester",
                        "color" : "Black",
                        "qty" : 2,
                        "size" : "M",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4.5
                }
        ]
}
{
        "_id" : ObjectId("63c107377ad798fdc04bca73"),
        "category" : "cat2",
        "product_cat" : "Prod_cat9",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 899",
        "offer" : "5-10% Off",
        "product_detail" : [
                {
                        "prod_id" : 16,
                        "prod_name" : "Shoetopia Flats",
                        "prod_detail" : "Shoetopia Women Peach-Coloured Printed Ballerians Flats",
                        "mrp" : 999,
                        "price" : 899,
                        "offer" : "10% OFF",
                        "material" : "Synthetic",
                        "color" : "Peach",
                        "qty" : 1,
                        "size" : "37",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4.5
                }
        ]
}
{
        "_id" : ObjectId("63c107377ad798fdc04bca74"),
        "category" : "cat1",
        "product_cat" : "Prod_cat11",
        "product_img" : "abscdd.jpeg",
        "price_range" : "under 699",
        "offer" : "10-50% Off",
        "product_detail" : [
                {
                        "prod_id" : 17,
                        "prod_name" : "DressBerry Analogue Watch",
                        "prod_detail" : "mens Mauve Analogue Watch",
                        "mrp" : 1100,
                        "price" : 550,
                        "offer" : "50% OFF",
                        "material" : "Leather",
                        "color" : "brown",
                        "qty" : 1,
                        "size" : "18mm",
                        "img" : "xvbsfg.jpeg",
                        "rating" : 4.5
                }
        ]
}
//13)brands collection
db.brands.insert([{
    "brand1":"Max",
    "brand2":"Levi's",
    "brand3":"H & M",
    "brand4":"Metro",
    "brand5":"Nike",
    "brand6":"Biba"
}])
db.brands.find().pretty()
{
        "_id" : ObjectId("63c01af9d6a870678157c23c"),
        "brand1" : "Max",
        "brand2" : "Levi's",
        "brand3" : "H & M",
        "brand4" : "Metro",
        "brand5" : "Nike",
        "brand6" : "Biba"
}
14)bag collection
db.bag.insert([{
        "delivery_time":"9 am to 9pm",
        "Address":{
                "house_no" : "C-505,Eklingaji Parisar",
                "street" : "Eklingaji Rd",
                "city" : "Sanand",
                "pincode" : "342121",
                "district" : "Ahmedabad",
                "state" : "Gujarat",
                "country" : "India",
                "mobile_no" : 9834628613
        },
        "product_detail":[{
                "prod_id":10,
                "prod_name":"Antheaa Dress",
                "prod_detail":"Black & Rust Orange Floral Print Tiered Midi Fit & Flare Dress With Ruffles",
                "mrp":2459,
                "Price":1254,
                "offer":"49% OFF",
                "qty":1,
                "size":"M",
                "color":"Black",
                "delivered_by":"Mon,16 Jan",
                "material":"Poly chiffon",
                "img":"https://i.ibb.co/VvzCWTJ/dress1.jpg",
                "rating":4,
                "price_details":{
                                "tot_mrp":2459,
                                "dis":1205,
                                "totamt":1254
                        }
        },
        {
                "prod_id":11,
                "prod_name":"Sassafras Maxi Dress",
                "prod_detail":"Women White & Red Printed Pure Cotton Tiered Maxi Dress",
                "mrp":2099,
                "Price":734,
                "offer":"65% OFF",
                "qty":1,
                "size":"S",
                "color":"White",
                "delivered_by":"Sun,22 Jan",
                "material":"100% Cotton",
                "img":"https://i.ibb.co/VvzCWTJ/dress1.jpg",
                "rating":4.3,
                "price_details":{
                                "tot_mrp":2099,
                                "dis":1365,
                                "totamt":734
                        }
        }]
}])
db.bag.find().pretty()
{
        "_id" : ObjectId("63bfce3ebec758aabcbe8d06"),
        "delivery_time" : "9 am to 9pm",
        "Address" : {
                "house_no" : "C-505,Eklingaji Parisar",
                "street" : "Eklingaji Rd",
                "city" : "Sanand",
                "pincode" : "342121",
                "district" : "Ahmedabad",
                "state" : "Gujarat",
                "country" : "India",
                "mobile_no" : 9834628613
        },
        "product_detail" : [
                {
                        "prod_id" : 10,
                        "prod_name" : "Antheaa Dress",
                        "prod_detail" : "Black & Rust Orange Floral Print Tiered Midi Fit & Flare Dress With Ruffles",
                        "mrp" : 2459,
                        "Price" : 1254,
                        "offer" : "49% OFF",
                        "qty" : 1,
                        "size" : "M",
                        "color" : "Black",
                        "delivered_by" : "Mon,16 Jan",
                        "material" : "Poly chiffon",
                        "img" : "https://i.ibb.co/VvzCWTJ/dress1.jpg",
                        "rating" : 4,
                        "price_details" : {
                                "tot_mrp" : 2459,
                                "dis" : 1205,
                                "totamt" : 1254
                        }
                },
                {
                        "prod_id" : 11,
                        "prod_name" : "Sassafras Maxi Dress",
                        "prod_detail" : "Women White & Red Printed Pure Cotton Tiered Maxi Dress",
                        "mrp" : 2099,
                        "Price" : 734,
                        "offer" : "65% OFF",
                        "qty" : 1,
                        "size" : "S",
                        "color" : "White",
                        "delivered_by" : "Sun,22 Jan",
                        "material" : "100% Cotton",
                        "img" : "https://i.ibb.co/VvzCWTJ/dress1.jpg",
                        "rating" : 4.3,
                        "price_details" : {
                                "tot_mrp" : 2099,
                                "dis" : 1365,
                                "totamt" : 734
                        }
                }
        ]
}
15)product_category collection
db.product_cat.insert([{
        "Prod_cat1":"Kurtas Sets",
        "Prod_cat2":"Handbags",
        "Prod_cat3":"T-Shirts",
        "Prod_cat4":"Sarees",
        "Prod_cat5":"Shirts",
        "Prod_cat6":"Jewellery",
        "Prod_cat7":"Beauty",
        "Prod_cat8":"Shoes",
        "Prod_cat9":"Heels & Flats",
        "Prod_cat10":"Tops",
        "Prod_cat11":"Watches",
        "Prod_cat12":"Jeans",
        "Prod_cat13":"Indian Wear",
        "Prod_cat14":"Western Wear",
        "Prod_cat15":"Sports Wear",
        "Prod_cat16":"Inner Wear",
        "Prod_cat17":"Kids Wear",
        "Prod_cat18":"Home & Furnishing"
}])
 db.product_cat.find().pretty()
{
        "_id" : ObjectId("63bfd441bec758aabcbe8d08"),
        "Prod_cat1" : "Kurtas Sets",
        "Prod_cat2" : "Handbags",
        "Prod_cat3" : "T-Shirts",
        "Prod_cat4" : "Sarees",
        "Prod_cat5" : "Shirts",
        "Prod_cat6" : "Jewellery",
        "Prod_cat7" : "Beauty",
        "Prod_cat8" : "Shoes",
        "Prod_cat9" : "Heels & Flats",
        "Prod_cat10" : "Tops",
        "Prod_cat11" : "Watches",
        "Prod_cat12" : "Jeans",
        "Prod_cat13" : "Indian Wear",
        "Prod_cat14" : "Western Wear",
        "Prod_cat15" : "Sports Wear",
        "Prod_cat16" : "Inner Wear",
        "Prod_cat17" : "Kids Wear",
        "Prod_cat18" : "Home & Furnishing"
}
16)men collection
db.men.insert([{
   "deal_of_the_day":[{
   "category":"cat1",
   "product_cat":"Prod_cat3",
   "product_img":"abscdd.jpeg",
   "price_range":"under 799",
   "offer":"30-50% Off",
   "product_detail":[{
                "prod_id":30,
                "prod_name":"Formal T-Shirt",
                "prod_detail":"Men Green Color Synthetic T-Shirt",
                "mrp":900,
                "price":450,
                "offer":"50% OFF",
                "material":"Synthetic",
                "color":"Green",
                "qty":1,
                "size":"M",
                "img":"xvbsfg.jpeg"
   }]
},
{
   "category":"cat1",
   "product_cat":"Prod_cat8",
   "product_img":"abscdd.jpeg",
   "price_range":"under 999",
   "offer":"40-50% Off",
   "product_detail":[{
                "prod_id":31,
                "prod_name":"Bata Basketball Shoes",
                "prod_detail":"Men Black Basketball Shoes",
                "mrp":850,
                "price":500,
                "offer":"40% OFF",
                "material":"Leather",
                "color":"Black",
                "qty":1,
                "size":8,
                "img":"xvbsfg.jpeg",
                "rating":4.5
   }]
},
{
    "category":"cat1",
   "product_cat":"Prod_cat12",
   "product_img":"abscdd.jpeg",
   "price_range":"under 1200",
   "offer":"20-30% Off",
   "product_detail":[{
                "prod_id":32,
                "prod_name":"Fever Strechable Jeans",
                "prod_detail":"Men Blue Slim Fit Light Fade Strechable Jeans",
                "mrp":1488,
                "price":1000,
                "offer":"Rs.488 OFF",
                "material":"Elastane",
                "color":"Blue",
                "qty":1,
                "size":"36",
                "img":"xvbsfg.jpeg",
                "rating":4.5
   }]
},
{
    "category":"cat1",
   "product_cat":"Prod_cat11",
   "product_img":"abscdd.jpeg",
   "price_range":"under 799",
   "offer":"10-20% Off",
   "product_detail":[{
                "prod_id":33,
                "prod_name":"DressBerry Analogue Watch",
                "prod_detail":"Men Mauve Analogue Watch",
                "mrp":800,
                "price":700,
                "offer":"10% OFF",
                "material":"Leather",
                "color":"Purple",
                "qty":1,
                "size":"18mm",
                "img":"xvbsfg.jpeg",
                "rating":4.5
   }]
},
{
   "top_picks":[{
   "category":"cat1",
   "product_cat":"Prod_cat5",
   "product_img":"abscdd.jpeg",
   "price_range":"under 999",
   "offer":"30-50% Off",
   "product_detail":[{
                "prod_id":34,
                "prod_name":"PeterEngland Mens Shirt",
                "prod_detail":"Cotton Blue and white colored Shirt",
                "mrp":1200,
                "price":840,
                "offer":"30% OFF",
                "material":"Pure Cotton",
                "color":"Blue & White",
                "qty":1,
                "size":"M",
                "img":"xvbsfg.jpeg"
   }]
},
{
   "category":"cat1",
   "product_cat":"Prod_cat15",
   "product_img":"abscdd.jpeg",
   "price_range":"under 999",
   "offer":"40-50% Off",
   "product_detail":[{
                "prod_id":15,
                "prod_name":"V & M Sports T-shirt",
                "prod_detail":"V & M Self Design Blue T-Shirt",
                "mrp":1000,
                "price":600,
                "offer":"40% OFF",
                "material":"Polyester",
                "color":"Black",
                "qty":2,
                "size":"M",
                "img":"xvbsfg.jpeg",
                "rating":4.5
   }]
}  ,
{
    "category":"cat1",
   "product_cat":"Prod_cat11",
   "product_img":"abscdd.jpeg",
   "price_range":"under 699",
   "offer":"10-50% Off",
   "product_detail":[{
                "prod_id":17,
                "prod_name":"DressBerry Analogue Watch",
                "prod_detail":"mens Mauve Analogue Watch",
                "mrp":1100,
                "price":550,
                "offer":"50% OFF",
                "material":"Leather",
                "color":"brown",
                "qty":1,
                "size":"18mm",
                "img":"xvbsfg.jpeg",
                "rating":4.5
   }]
}
]},
{ 
   "brand_category":[{
        "category":"cat1",
        "product_cat":"Prod_cat15",
        "product_img":"abscdd.jpeg",
        "price_range":"under 999",
        "offer":"40-50% Off",
        "product_detail":[{
                "prod_id":15,
                "prod_name":"V & M Sports T-shirt",
                "prod_detail":"V & M Self Design Blue T-Shirt",
                "mrp":1000,
                "price":600,
                "offer":"40% OFF",
                "material":"Polyester",
                "color":"Black",
                "qty":2,
                "size":"M",
                "img":"xvbsfg.jpeg",
                "rating":4.5
   }]
 }]
}
]
)
> db.men.find().pretty()
{
        "_id" : ObjectId("63c117257ad798fdc04bca7e"),
        "deal_of_the_day" : [
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat3",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 799",
                        "offer" : "30-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 30,
                                        "prod_name" : "Formal T-Shirt",
                                        "prod_detail" : "Men Green Color Synthetic T-Shirt",
                                        "mrp" : 900,
                                        "price" : 450,
                                        "offer" : "50% OFF",
                                        "material" : "Synthetic",
                                        "color" : "Green",
                                        "qty" : 1,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg"
                                }
                        ]
                },
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat8",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 999",
                        "offer" : "40-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 31,
                                        "prod_name" : "Bata Basketball Shoes",
                                        "prod_detail" : "Men Black Basketball Shoes",
                                        "mrp" : 850,
                                        "price" : 500,
                                        "offer" : "40% OFF",
                                        "material" : "Leather",
                                        "color" : "Black",
                                        "qty" : 1,
                                        "size" : 8,
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat12",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 1200",
                        "offer" : "20-30% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 32,
                                        "prod_name" : "Fever Strechable Jeans",
                                        "prod_detail" : "Men Blue Slim Fit Light Fade Strechable Jeans",
                                        "mrp" : 1488,
                                        "price" : 1000,
                                        "offer" : "Rs.488 OFF",
                                        "material" : "Elastane",
                                        "color" : "Blue",
                                        "qty" : 1,
                                        "size" : "36",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat11",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 799",
                        "offer" : "10-20% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 33,
                                        "prod_name" : "DressBerry Analogue Watch",
                                        "prod_detail" : "Men Mauve Analogue Watch",
                                        "mrp" : 800,
                                        "price" : 700,
                                        "offer" : "10% OFF",
                                        "material" : "Leather",
                                        "color" : "Purple",
                                        "qty" : 1,
                                        "size" : "18mm",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63c117257ad798fdc04bca7f"),
        "top_picks" : [
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat5",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 999",
                        "offer" : "30-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 34,
                                        "prod_name" : "PeterEngland Mens Shirt",
                                        "prod_detail" : "Cotton Blue and white colored Shirt",
                                        "mrp" : 1200,
                                        "price" : 840,
                                        "offer" : "30% OFF",
                                        "material" : "Pure Cotton",
                                        "color" : "Blue & White",
                                        "qty" : 1,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg"
                                }
                        ]
                },
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat15",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 999",
                        "offer" : "40-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 15,
                                        "prod_name" : "V & M Sports T-shirt",
                                        "prod_detail" : "V & M Self Design Blue T-Shirt",
                                        "mrp" : 1000,
                                        "price" : 600,
                                        "offer" : "40% OFF",
                                        "material" : "Polyester",
                                        "color" : "Black",
                                        "qty" : 2,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat11",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 699",
                        "offer" : "10-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 17,
                                        "prod_name" : "DressBerry Analogue Watch",
                                        "prod_detail" : "mens Mauve Analogue Watch",
                                        "mrp" : 1100,
                                        "price" : 550,
                                        "offer" : "50% OFF",
                                        "material" : "Leather",
                                        "color" : "brown",
                                        "qty" : 1,
                                        "size" : "18mm",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63c117257ad798fdc04bca80"),
        "brand_category" : [
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat15",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 999",
                        "offer" : "40-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 15,
                                        "prod_name" : "V & M Sports T-shirt",
                                        "prod_detail" : "V & M Self Design Blue T-Shirt",
                                        "mrp" : 1000,
                                        "price" : 600,
                                        "offer" : "40% OFF",
                                        "material" : "Polyester",
                                        "color" : "Black",
                                        "qty" : 2,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                }
        ]
}
17)women collection
db.women.insert({
        "deal_of_the_day" : [
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat1",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 799",
                        "offer" : "30-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 13,
                                        "prod_name" : "Jaipuri Kurti",
                                        "prod_detail" : "Women Sea Green Angrakha Pure Cotton Kurta",
                                        "mrp" : 700,
                                        "price" : 500,
                                        "offer" : "40% OFF",
                                        "material" : "Pure Cotton",
                                        "color" : "Sea Green",
                                        "qty" : 1,
                                        "size" : "S",
                                        "img" : "xvbsfg.jpeg"
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat1",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 999",
                        "offer" : "40-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 14,
                                        "prod_name" : "Aspora Maxi Dress",
                                        "prod_detail" : "Women Black & Red Floral Fit And Flare Maxi Dress",
                                        "mrp" : 850,
                                        "price" : 500,
                                        "offer" : "40% OFF",
                                        "material" : "Georgette",
                                        "color" : "Black & Red",
                                        "qty" : 2,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat9",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 899",
                        "offer" : "20-30% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 15,
                                        "prod_name" : "Shezone Ballerinas",
                                        "prod_detail" : "Women Beige Solid Ballerinas",
                                        "mrp" : 1499,
                                        "price" : 699,
                                        "offer" : "Rs.800 OFF",
                                        "material" : "Synthetic",
                                        "color" : "Beige",
                                        "qty" : 1,
                                        "size" : "37",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat11",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 699",
                        "offer" : "10-20% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 16,
                                        "prod_name" : "DressBerry Analogue Watch",
                                        "prod_detail" : "Women Mauve Analogue Watch",
                                        "mrp" : 1200,
                                        "price" : 600,
                                        "offer" : "50% OFF",
                                        "material" : "Leather",
                                        "color" : "Purple",
                                        "qty" : 1,
                                        "size" : "18mm",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat2",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 599",
                        "offer" : "30-40% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 16,
                                        "prod_name" : "Lino Perros",
                                        "prod_detail" : "Off-White Solid Sling Bag",
                                        "mrp" : 1000,
                                        "price" : 600,
                                        "offer" : "40% OFF",
                                        "material" : "Synthetic Leather",
                                        "color" : "White",
                                        "qty" : 1,
                                        "size" : "Large",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Glasses",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 699",
                        "offer" : "10-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 16,
                                        "prod_name" : "Optify",
                                        "prod_detail" : "White Computer Glasses",
                                        "mrp" : 1499,
                                        "price" : 699,
                                        "offer" : "Rs.800 OFF",
                                        "material" : "Polycarbonate",
                                        "color" : "White",
                                        "qty" : 1,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63c110577ad798fdc04bca79"),
        "top_picks" : [
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat1",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 799",
                        "offer" : "30-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 14,
                                        "prod_name" : "Libas Kurta Set",
                                        "prod_detail" : "Cotton Floral Print Kurta Sets",
                                        "mrp" : 1200,
                                        "price" : 840,
                                        "offer" : "30% OFF",
                                        "material" : "Pure Cotton",
                                        "color" : "Navy Blue",
                                        "qty" : 1,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg"
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat1",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 999",
                        "offer" : "40-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 15,
                                        "prod_name" : "V & M Crepe Dress",
                                        "prod_detail" : "V & M Self Design Flared Crepe Dress",
                                        "mrp" : 1800,
                                        "price" : 1080,
                                        "offer" : "40% OFF",
                                        "material" : "Polyester",
                                        "color" : "Black",
                                        "qty" : 2,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat9",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 899",
                        "offer" : "5-10% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 16,
                                        "prod_name" : "Shoetopia Flats",
                                        "prod_detail" : "Shoetopia Women Peach-Coloured Printed Ballerians Flats",
                                        "mrp" : 999,
                                        "price" : 899,
                                        "offer" : "10% OFF",
                                        "material" : "Synthetic",
                                        "color" : "Peach",
                                        "qty" : 1,
                                        "size" : "37",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat11",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 699",
                        "offer" : "10-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 17,
                                        "prod_name" : "DressBerry Analogue Watch",
                                        "prod_detail" : "mens Mauve Analogue Watch",
                                        "mrp" : 1100,
                                        "price" : 550,
                                        "offer" : "50% OFF",
                                        "material" : "Leather",
                                        "color" : "brown",
                                        "qty" : 1,
                                        "size" : "18mm",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63c110577ad798fdc04bca7a"),
        "brand_category" : [
                {
                        "category" : "cat2",
                        "product_cat" : "Product_cat1",
                        "brand_name" : "brand1",
                        "brand_img" : "abscdd.jpeg",
                        "product_detail" : [
                                {
                                        "prod_id" : 4,
                                        "prod_name" : "Max kurti",
                                        "prod_detail" : "Blue and red colored kurti",
                                        "mrp" : 1000,
                                        "Price" : 500,
                                        "material" : "Pure Cotton",
                                        "color" : "Blue and red",
                                        "offer" : "50% OFF",
                                        "qty" : 1,
                                        "size" : "S",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
})
>
>db.women.find().pretty()
{
        "_id" : ObjectId("63c110577ad798fdc04bca78"),
        "deal_of_the_day" : [
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat1",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 799",
                        "offer" : "30-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 13,
                                        "prod_name" : "Jaipuri Kurti",
                                        "prod_detail" : "Women Sea Green Angrakha Pure Cotton Kurta",
                                        "mrp" : 700,
                                        "price" : 500,
                                        "offer" : "40% OFF",
                                        "material" : "Pure Cotton",
                                        "color" : "Sea Green",
                                        "qty" : 1,
                                        "size" : "S",
                                        "img" : "xvbsfg.jpeg"
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat1",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 999",
                        "offer" : "40-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 14,
                                        "prod_name" : "Aspora Maxi Dress",
                                        "prod_detail" : "Women Black & Red Floral Fit And Flare Maxi Dress",
                                        "mrp" : 850,
                                        "price" : 500,
                                        "offer" : "40% OFF",
                                        "material" : "Georgette",
                                        "color" : "Black & Red",
                                        "qty" : 2,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat9",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 899",
                        "offer" : "20-30% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 15,
                                        "prod_name" : "Shezone Ballerinas",
                                        "prod_detail" : "Women Beige Solid Ballerinas",
                                        "mrp" : 1499,
                                        "price" : 699,
                                        "offer" : "Rs.800 OFF",
                                        "material" : "Synthetic",
                                        "color" : "Beige",
                                        "qty" : 1,
                                        "size" : "37",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat11",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 699",
                        "offer" : "10-20% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 16,
                                        "prod_name" : "DressBerry Analogue Watch",
                                        "prod_detail" : "Women Mauve Analogue Watch",
                                        "mrp" : 1200,
                                        "price" : 600,
                                        "offer" : "50% OFF",
                                        "material" : "Leather",
                                        "color" : "Purple",
                                        "qty" : 1,
                                        "size" : "18mm",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat2",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 599",
                        "offer" : "30-40% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 16,
                                        "prod_name" : "Lino Perros",
                                        "prod_detail" : "Off-White Solid Sling Bag",
                                        "mrp" : 1000,
                                        "price" : 600,
                                        "offer" : "40% OFF",
                                        "material" : "Synthetic Leather",
                                        "color" : "White",
                                        "qty" : 1,
                                        "size" : "Large",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Glasses",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 699",
                        "offer" : "10-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 16,
                                        "prod_name" : "Optify",
                                        "prod_detail" : "White Computer Glasses",
                                        "mrp" : 1499,
                                        "price" : 699,
                                        "offer" : "Rs.800 OFF",
                                        "material" : "Polycarbonate",
                                        "color" : "White",
                                        "qty" : 1,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63c110577ad798fdc04bca79"),
        "top_picks" : [
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat1",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 799",
                        "offer" : "30-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 14,
                                        "prod_name" : "Libas Kurta Set",
                                        "prod_detail" : "Cotton Floral Print Kurta Sets",
                                        "mrp" : 1200,
                                        "price" : 840,
                                        "offer" : "30% OFF",
                                        "material" : "Pure Cotton",
                                        "color" : "Navy Blue",
                                        "qty" : 1,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg"
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat1",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 999",
                        "offer" : "40-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 15,
                                        "prod_name" : "V & M Crepe Dress",
                                        "prod_detail" : "V & M Self Design Flared Crepe Dress",
                                        "mrp" : 1800,
                                        "price" : 1080,
                                        "offer" : "40% OFF",
                                        "material" : "Polyester",
                                        "color" : "Black",
                                        "qty" : 2,
                                        "size" : "M",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat2",
                        "product_cat" : "Prod_cat9",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 899",
                        "offer" : "5-10% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 16,
                                        "prod_name" : "Shoetopia Flats",
                                        "prod_detail" : "Shoetopia Women Peach-Coloured Printed Ballerians Flats",
                                        "mrp" : 999,
                                        "price" : 899,
                                        "offer" : "10% OFF",
                                        "material" : "Synthetic",
                                        "color" : "Peach",
                                        "qty" : 1,
                                        "size" : "37",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                },
                {
                        "category" : "cat1",
                        "product_cat" : "Prod_cat11",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "under 699",
                        "offer" : "10-50% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 17,
                                        "prod_name" : "DressBerry Analogue Watch",
                                        "prod_detail" : "mens Mauve Analogue Watch",
                                        "mrp" : 1100,
                                        "price" : 550,
                                        "offer" : "50% OFF",
                                        "material" : "Leather",
                                        "color" : "brown",
                                        "qty" : 1,
                                        "size" : "18mm",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4.5
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63c110577ad798fdc04bca7a"),
        "brand_category" : [
                {
                        "category" : "cat2",
                        "product_cat" : "Product_cat1",
                        "brand_name" : "brand1",
                        "brand_img" : "abscdd.jpeg",
                        "product_detail" : [
                                {
                                        "prod_id" : 4,
                                        "prod_name" : "Max kurti",
                                        "prod_detail" : "Blue and red colored kurti",
                                        "mrp" : 1000,
                                        "Price" : 500,
                                        "material" : "Pure Cotton",
                                        "color" : "Blue and red",
                                        "offer" : "50% OFF",
                                        "qty" : 1,
                                        "size" : "S",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
}
>

//18)kids
db.kids.insert([{
    "deal_of_the_day":[{
        "category":"cat3",
        "product_cat":"Prod_cat5",
        "product_img":"abscdd.jpeg",
        "price_range":"400-700",
        "offer":"60% Off",
        "product_detail":[{
                "prod_id":40,
                "prod_name":"Rikidoos-shirt",
                "prod_detail":"blue shirt",
                "mrp":800,
                "Price":400,
                "offer":"50% OFF",
                "material":"cotton",
                "color":"Blue",
                "qty":1,
                "size":"S",
                "img":"xvbsfg.jpeg",
                "rating":4
    }]
 }],
    "top_picks":[{
        "category":"cat3",
        "product_cat":"Prod_cat3",
        "product_img":"abscdd.jpeg",
        "price_range":"400-500",
        "offer":"40% Off",
        "product_detail":[{
                "prod_id":41,
                "prod_name":"here & now",
                "prod_detail":"Animataed T-Shirts For Kids",
                "mrp":1000,
                "price":600,
                "material":"Synthetic",
                "color":"white",
                "offer":"30% OFF",
                "qty":1,
                "size":"S",
                "img":"xvbsfg.jpeg",
                "rating":4
   }]
  }
], 
{ 
    "brand_category":[{
         "category":"cat3",
         "product_cat":"Prod_cat1",
         "brand_name":"H & M",
         "brand_img":"abscdd.jpeg",
         "product_detail":[{
               "prod_id":42,
                "prod_name":"levis dress",
                "prod_detail":"pink dress for girls",
                "mrp":500,
                "Price":399,
                "material":"Cotton",
                "color":"Pink",
                "offer":"30% OFF",
                "qty":1,
                "size":"S",
                "img":"xvbsfg.jpeg",
                "rating":4
    }]
   }   
  }]
}])
 db.kids.find().pretty()
{
        "_id" : ObjectId("63be4548d86b92b68bae7d4b"),
        "deal_of_the_day" : [
                {
                        "category" : "cat3",
                        "product_cat" : "shirts",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "400-700",
                        "offer" : "60% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 5,
                                        "prod_name" : "Rikidoos-shirt",
                                        "prod_detail" : "blue shirt",
                                        "Price" : 674,
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "onesize",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ],
        "top_picks" : [
                {
                        "category" : "cat3",
                        "product_cat" : "pants",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "400-500",
                        "offer" : "40% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 4,
                                        "prod_name" : "here & now",
                                        "prod_detail" : "khaki pants",
                                        "Price" : 600,
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "onesize",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                },
                {
                        "category" : "cat3",
                        "product_cat" : "glasses",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : -400,
                        "offer" : "20% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 4,
                                        "prod_name" : "lenskart",
                                        "prod_detail" : "glasses",
                                        "Price" : 399,
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "onesize",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ],
        "brand_category" : [
                {
                        "category" : "cat3",
                        "product_cat" : "dress",
                        "brand_name" : "H & M",
                        "brand_img" : "abscdd.jpeg",
                        "product_detail" : [
                                {
                                        "prod_id" : 4,
                                        "prod_name" : "levis dress",
                                        "prod_detail" : "pink dress for girls",
                                        "Price" : 399,
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "onesize",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63c11acd7ad798fdc04bca81"),
        "deal_of_the_day" : [
                {
                        "category" : "cat3",
                        "product_cat" : "Prod_cat5",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : -300,
                        "offer" : "60% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 40,
                                        "prod_name" : "Rikidoos-shirt",
                                        "prod_detail" : "blue shirt",
                                        "mrp" : 800,
                                        "Price" : 400,
                                        "offer" : "50% OFF",
                                        "material" : "cotton",
                                        "color" : "Blue",
                                        "qty" : 1,
                                        "size" : "S",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63c11acd7ad798fdc04bca82"),
        "top_picks" : [
                {
                        "category" : "cat3",
                        "product_cat" : "Prod_cat3",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : -100,
                        "offer" : "40% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 41,
                                        "prod_name" : "here & now",
                                        "prod_detail" : "Animataed T-Shirts For Kids",
                                        "mrp" : 1000,
                                        "price" : 600,
                                        "material" : "Synthetic",
                                        "color" : "white",
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "S",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63c11acd7ad798fdc04bca83"),
        "brand_category" : [
                {
                        "category" : "cat3",
                        "product_cat" : "Prod_cat1",
                        "brand_name" : "H & M",
                        "brand_img" : "abscdd.jpeg",
                        "product_detail" : [
                                {
                                        "prod_id" : 42,
                                        "prod_name" : "levis dress",
                                        "prod_detail" : "pink dress for girls",
                                        "mrp" : 500,
                                        "Price" : 399,
                                        "material" : "Cotton",
                                        "color" : "Pink",
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "S",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
}
//19)beauty
db.beauty.insert([{
    "deal_of_the_day":[{
        "category":"cat4",
        "product_cat":"Prod_cat7",
        "product_img":"abscdd.jpeg",
        "price_range":"400-700",
        "offer":"40% Off",
        "product_detail":[{
                "prod_id":50,
                "prod_name":"lakme lipstick",
                "prod_detail":"matte lipstick",
                "mrp":400,
                "price":550,
                "color":"Red",
                "offer":"30% OFF",
                "qty":1,
                "size":"-",
                "img":"xvbsfg.jpeg",
                "rating":4
    }]
 }],
    "top_picks":[{
        "category":"cat4",
        "product_cat":"Prod_cat7",
        "product_img":"abscdd.jpeg",
        "price_range":"400-500",
        "offer":"40% Off",
        "product_detail":[{
                "prod_id":51,
                "prod_name":"hair dryer",
                "prod_detail":"white & pink hair dryer",
                "mrp":450,
                "price":602,
                "offer":"33% OFF",
                "qty":1,
                "color":"white & pink",
                "size":"-",
                "img":"xvbsfg.jpeg",
                "rating":4
   }]
  },
   {
        "category":"cat4",
        "product_cat":"Prod_cat7",
        "product_img":"abscdd.jpeg",
        "price_range":"60-100",
        "offer":"20% Off",
        "product_detail":[{
                "prod_id":52,
                "prod_name":"lakme cc cream",
                "prod_detail":"lakme cc cream 9ml",
                "mrp":150,
                "Price":99,
                "offer":"30% OFF",
                "qty":1,
                "size":"-",
                "img":"xvbsfg.jpeg",
                "rating":4
   }]
}],  
    "brand_category":[{
         "category":"cat4",
         "product_cat":"Prod_cat7",
         "brand_name":"Lakme",
         "brand_img":"abscdd.jpeg",
         "product_detail":[{
               "prod_id":53,
                "prod_name":"French rose oil",
                "prod_detail":"french rose oil",
                "mrp":350,
                "Price":269,
                "offer":"30% OFF",
                "qty":1,
                "size":"-",
                "img":"xvbsfg.jpeg",
                "rating":4
    }]   
  }]
}])

> db.beauty.find().pretty()
{
          "_id" : ObjectId("63c11dad7ad798fdc04bca85"),
        "deal_of_the_day" : [
                {
                        "category" : "cat4",
                        "product_cat" : "Prod_cat7",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "400-700",
                        "offer" : "40% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 50,
                                        "prod_name" : "lakme lipstick",
                                        "prod_detail" : "matte lipstick",
                                        "mrp" : 400,
                                        "price" : 550,
                                        "color" : "Red",
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "-",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ],
        "top_picks" : [
                {
                        "category" : "cat4",
                        "product_cat" : "Prod_cat7",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "400-500",
                        "offer" : "40% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 51,
                                        "prod_name" : "hair dryer",
                                        "prod_detail" : "white & pink hair dryer",
                                        "mrp" : 450,
                                        "price" : 602,
                                        "offer" : "33% OFF",
                                        "qty" : 1,
                                        "color" : "white & pink",
                                        "size" : "-",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                },
                {
                        "category" : "cat4",
                        "product_cat" : "Prod_cat7",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "60-100",
                        "offer" : "20% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 52,
                                        "prod_name" : "lakme cc cream",
                                        "prod_detail" : "lakme cc cream 9ml",
                                        "mrp" : 150,
                                        "Price" : 99,
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "-",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ],
        "brand_category" : [
                {
                        "category" : "cat4",
                        "product_cat" : "Prod_cat7",
                        "brand_name" : "Lakme",
                        "brand_img" : "abscdd.jpeg",
                        "product_detail" : [
                                {
                                        "prod_id" : 53,
                                        "prod_name" : "French rose oil",
                                        "prod_detail" : "french rose oil",
                                        "mrp" : 350,
                                        "Price" : 269,
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "-",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
}
//20)home and living
db.home_living.insert([{
   "deal_of_the_day":[{
       "category":"cat5",
       "product_cat":"Prod_cat18",
       "product_img":"abscdd.jpeg",
       "price_range":"400-700",
       "offer":"40% Off",
       "product_detail":[{
               "prod_id":60,
               "prod_name":"bedsheets",
               "prod_detail":"white and blue bedsheets",
               "mrp":600,
               "price":500,
               "color":"white and blue",
               "offer":"20% OFF",
               "qty":1,
               "size":"king",
               "img":"xvbsfg.jpeg",
               "rating":4
   }]
}]
},
{
   "top_picks":[{
       "category":"cat5",
       "product_cat":"Prod_cat18",
       "product_img":"abscdd.jpeg",
       "price_range":"400-1000",
       "offer":"30% Off",
       "product_detail":[{
               "prod_id":61,
               "prod_name":"wall watches",
               "prod_detail":"titan watches",
               "mrp":1300,
               "Price":1000,
               "offer":"30% OFF",
               "qty":1,
               "size":"-",
               "img":"xvbsfg.jpeg",
               "rating":4
  }]
 },
  {
       "category":"cat5",
       "product_cat":"Prod_cat18",
       "product_img":"abscdd.jpeg",
       "price_range":"60-1000",
       "offer":"60% Off",
       "product_detail":[{
               "prod_id":62,
               "prod_name":"golden peacock",
               "prod_detail":"Ganesha showpiece",
               "mrp":1086,
               "price":679,
               "offer":"60% OFF",
               "qty":1,
               "size":"-",
               "img":"xvbsfg.jpeg",
               "rating":4
  }]
}]
},
{
   "brand_category":[{
        "category":"cat5",
        "product_cat":"Prod_cat18",
        "brand_name":"craftvatika",
        "brand_img":"abscdd.jpeg",
        "product_detail":[{
              "prod_id":63,
               "prod_name":"wall frames",
               "prod_detail":"set of 3 wall frames",
               "mrp":750,
               "Price":600,
               "offer":"25% OFF",
               "qty":1,
               "size":"-",
               "img":"xvbsfg.jpeg",
               "rating":4
   }]   
 }]
}])

 db.home_living.find().pretty()
{
        "_id" : ObjectId("63c121307ad798fdc04bca87"),
        "deal_of_the_day" : [
                {
                        "category" : "cat5",
                        "product_cat" : "Prod_cat18",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "400-700",
                        "offer" : "40% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 60,
                                        "prod_name" : "bedsheets",
                                        "prod_detail" : "white and blue bedsheets",
                                        "mrp" : 600,
                                        "price" : 500,
                                        "color" : "white and blue",
                                        "offer" : "20% OFF",
                                        "qty" : 1,
                                        "size" : "king",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ],
        "top_picks" : [
                {
                        "category" : "cat5",
                        "product_cat" : "Prod_cat18",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : "400-1000",
                        "offer" : "30% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 61,
                                        "prod_name" : "wall watches",
                                        "prod_detail" : "titan watches",
                                        "mrp" : 1300,
                                        "Price" : 1000,
                                        "offer" : "30% OFF",
                                        "qty" : 1,
                                        "size" : "-",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                },
                {
                        "category" : "cat5",
                        "product_cat" : "Prod_cat18",
                        "product_img" : "abscdd.jpeg",
                        "price_range" : 60-1000,
                        "offer" : "60% Off",
                        "product_detail" : [
                                {
                                        "prod_id" : 62,
                                        "prod_name" : "golden peacock",
                                        "prod_detail" : "Ganesha showpiece",
                                        "mrp" : 1086,
                                        "price" : 679,
                                        "offer" : "60% OFF",
                                        "qty" : 1,
                                        "size" : "-",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ],
        "brand_category" : [
                {
                        "category" : "cat5",
                        "product_cat" : "Prod_cat18",
                        "brand_name" : "craftvatika",
                        "brand_img" : "abscdd.jpeg",
                        "product_detail" : [
                                {
                                        "prod_id" : 63,
                                        "prod_name" : "wall frames",
                                        "prod_detail" : "set of 3 wall frames",
                                        "mrp" : 750,
                                        "Price" : 600,
                                        "offer" : "25% OFF",
                                        "qty" : 1,
                                        "size" : "-",
                                        "img" : "xvbsfg.jpeg",
                                        "rating" : 4
                                }
                        ]
                }
        ]
}