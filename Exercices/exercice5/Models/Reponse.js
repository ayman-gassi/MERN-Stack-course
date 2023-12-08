const { ObjectId } = require("mongodb");
const {model, Schema} =require("mongoose")
const reponse = new Schema({
    BlogId: ObjectId,
    Date: String,
    Text: String,
    Student: String,
  });
  
  const Reponse = model('reponse', reponse);
  module.exports = {Reponse}