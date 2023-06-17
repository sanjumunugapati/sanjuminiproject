/*
 Navicat Premium Data Transfer

 Source Server         : mongodb
 Source Server Type    : MongoDB
 Source Server Version : 60006 (6.0.6)
 Source Host           : localhost:27017
 Source Schema         : shopping_management

 Target Server Type    : MongoDB
 Target Server Version : 60006 (6.0.6)
 File Encoding         : 65001

 Date: 17/06/2023 18:24:46
*/


// ----------------------------
// Collection structure for addresses
// ----------------------------
db.getCollection("addresses").drop();
db.createCollection("addresses");

// ----------------------------
// Documents of addresses
// ----------------------------

// ----------------------------
// Collection structure for banners
// ----------------------------
db.getCollection("banners").drop();
db.createCollection("banners");

// ----------------------------
// Documents of banners
// ----------------------------

// ----------------------------
// Collection structure for categories
// ----------------------------
db.getCollection("categories").drop();
db.createCollection("categories");

// ----------------------------
// Documents of categories
// ----------------------------
db.getCollection("categories").insert([ {
    _id: ObjectId("648da72511a53f2f11b86de4"),
    name: "men",
    isAvailable: NumberInt("1"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("648da72c11a53f2f11b86de9"),
    name: "women",
    isAvailable: NumberInt("1"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("648da871ab27cdf53d74b106"),
    name: "kids",
    isAvailable: NumberInt("1"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for offers
// ----------------------------
db.getCollection("offers").drop();
db.createCollection("offers");

// ----------------------------
// Documents of offers
// ----------------------------

// ----------------------------
// Collection structure for orders
// ----------------------------
db.getCollection("orders").drop();
db.createCollection("orders");

// ----------------------------
// Documents of orders
// ----------------------------
db.getCollection("orders").insert([ {
    _id: ObjectId("648da78d11a53f2f11b86e1a"),
    userId: ObjectId("648da6bc11a53f2f11b86dac"),
    firstname: "hjhj",
    lastname: "hjhjh",
    payment: "COD",
    country: "India",
    address: "hjhjhj",
    city: "Hyderabad",
    state: "hjhj",
    pin: "hjhjhj",
    products: {
        item: [
            {
                productId: ObjectId("648da76411a53f2f11b86def"),
                qty: NumberInt("1"),
                price: NumberInt("1500"),
                _id: ObjectId("648da77711a53f2f11b86e08")
            }
        ],
        totalPrice: NumberInt("1500"),
        totalqty: NumberInt("0")
    },
    productReturned: [
        NumberInt("0")
    ],
    status: "Comfirmed",
    sellingPrice: NumberInt("1500"),
    createdAt: ISODate("2023-06-17T12:31:09.509Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("648da921ab27cdf53d74b14b"),
    userId: ObjectId("648da8e1ab27cdf53d74b117"),
    firstname: "hjhj",
    lastname: "hjhjh",
    payment: "COD",
    country: "India",
    address: "hjhjhj",
    city: "Hyderabad",
    state: "hjhj",
    pin: "hjhjhj",
    products: {
        item: [
            {
                productId: ObjectId("648da76411a53f2f11b86def"),
                qty: NumberInt("1"),
                price: NumberInt("1500"),
                _id: ObjectId("648da90aab27cdf53d74b12e")
            }
        ],
        totalPrice: NumberInt("1500"),
        totalqty: NumberInt("0")
    },
    productReturned: [
        NumberInt("0")
    ],
    status: "Build",
    sellingPrice: NumberInt("1500"),
    createdAt: ISODate("2023-06-17T12:37:53.35Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for products
// ----------------------------
db.getCollection("products").drop();
db.createCollection("products");

// ----------------------------
// Documents of products
// ----------------------------
db.getCollection("products").insert([ {
    _id: ObjectId("648da76411a53f2f11b86def"),
    productname: "shirt",
    sales: NumberInt("2"),
    stock: NumberInt("8"),
    price: NumberInt("1500"),
    rating: NumberInt("5"),
    image: [
        "uploaded_file-1687005028896-274045388.jpg"
    ],
    isAvailable: NumberInt("1"),
    category: "men",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("648da89aab27cdf53d74b10c"),
    productname: "pant",
    sales: NumberInt("0"),
    stock: NumberInt("10"),
    price: NumberInt("2000"),
    rating: NumberInt("5"),
    image: [
        "uploaded_file-1687005338189-749539711.jpg"
    ],
    isAvailable: NumberInt("1"),
    category: "men",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("648da6bc11a53f2f11b86dac"),
    name: "sanjumunugapati",
    email: "sanjumunugapati@gmail.com",
    mobile: 9876565230,
    password: "$2b$10$jHRFP71QXZpJvo4KQ2rtReaKim3m1z.g6gXQgk/nN9ia57VNSxeym",
    isVerified: NumberInt("1"),
    is_admin: NumberInt("1"),
    address: {
        Details: [ ]
    },
    cart: {
        totalPrice: NumberInt("0"),
        item: [ ]
    },
    wishlist: {
        item: [ ]
    },
    __v: NumberInt("1")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("648da8e1ab27cdf53d74b117"),
    name: "sita",
    email: "sita@gmail.com",
    mobile: NumberInt("1234657890"),
    password: "$2b$10$Hcz5DfpjNWMqOfUKH5p3ZOXmrVhsxXIYPUSYiZk7/nsez4nsEvU9i",
    isVerified: NumberInt("1"),
    is_admin: NumberInt("0"),
    address: {
        Details: [ ]
    },
    cart: {
        totalPrice: NumberInt("0"),
        item: [ ]
    },
    wishlist: {
        item: [
            {
                productId: ObjectId("648da76411a53f2f11b86def"),
                price: NumberInt("1500"),
                _id: ObjectId("648da906ab27cdf53d74b125")
            }
        ]
    },
    __v: NumberInt("2")
} ]);
