const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Product name must be provided"]
  },
  price:{
    type:Number,
    required:[true,"Looking to freeload , ain't ya ?"]
  },
  featured:{
    type:Boolean,
    default:false
  },
  rating:{
    type:Number,
    default:4
  },
  createdAt:{
    type:Date,
    default:Date.now()
  },
  company:{
    type:String,

    enum:{
      values:['ikea','liddy','caressa','marcos'],
      message:'{VALUE} is not supported'
    }
  }
})

const Product = new mongoose.model("Product",productSchema);

module.exports = Product
