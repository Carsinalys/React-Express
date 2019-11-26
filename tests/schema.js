const mongoose = require("mongoose");

const testResults = new mongoose.Schema({
  url: {
    type: String,
    trim: true
  },
  arrUrls: {
    type: Array
  },
  validShop: {
    type: Boolean
  },
  name: {
    type: Object
  },
  brand: {
    type: Object
  },
  image: {
    type: Object
  },
  price: {
    type: Object
  },
  originalPrice: {
    type: Object
  },
  multiple: {
    type: Object
  },
  jquery: {
    type: Boolean
  },
  error: {
    default: ""
  }
});

const Tests = mongoose.model("Tests", testResults);

module.exports = Tests;
