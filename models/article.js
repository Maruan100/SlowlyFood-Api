const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AticleSchema = Schema({
  name: String,
  price: Number,
  image: String,
  image_xl: String,
  title: String,
  category: String,
  description: String,
  cantidad: String,
});

module.exports = mongoose.model("Article", AticleSchema);
