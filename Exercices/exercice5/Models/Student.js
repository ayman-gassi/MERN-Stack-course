const {model, Schema} =require("mongoose")
const student = new Schema({
    FirstName: String,
    LastName: String,
    Email: {
        type : String,
        unique : true
    },
    Field: String,
    Password: String,
    ProfilId: String,

  });
  
  const Student = model('student', student);
  module.exports = {Student}