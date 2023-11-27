const {model, Schema} =require("mongoose")
const student = new Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Field: String,
    Password: String,
    ProfilId: String,

  });
  
  const Student = model('students', student);
  module.exports = {Student}