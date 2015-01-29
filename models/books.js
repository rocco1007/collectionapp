var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var bookSchema = new Schema({
  title: String,
  price: String
});
 
module.exports = mongoose.model('Book', bookSchema);