const {model, Schema} =require("mongoose")
const blog = new Schema({
    Title: String,
    Date: String,
    Text: String,
    Student: String,
  });
  
  const Blog = model('blog', blog);
  module.exports = {Blog}