const {model, Schema} =require("mongoose")
const blog = new Schema({
    Title: String,
    Date: String,
    Text: String,
    Student: String,
  });
  
  const Blog = model('blogs', blog);
  module.exports = {Blog}