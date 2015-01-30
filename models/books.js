var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var bookSchema = new Schema({
  title: String,
  price: String,
  inCollection: Boolean,
  inWishlist: Boolean
});
 
module.exports = mongoose.model('Book', bookSchema);