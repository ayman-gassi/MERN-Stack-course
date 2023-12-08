const {Student} = require('../Models/Student')
async function getStudentByEmail(email){
         try {
            const result = await Student.findOne({Email : email})
            return result;
        } catch (e) {
            console.log(e);
            throw e; 
        }
}
async function getStudentByEmail_Password(email,password){
    try {
       let result = await Student.findOne({Email : email,Password : password})
       return result;
   } catch (e) {
       console.log(e);
       throw e; 
   }
}
async function addStudent(firstname,lastname,field,email,password){
    try {
        const result = new Student ({ FirstName:firstname, LastName:lastname,Field : field,Email: email, Password: password ,ProfilId : '1' })
       result.save();
        return result;
   } catch (e) {
       console.log(e);
       throw e; 
   }
}
module.exports = {getStudentByEmail,getStudentByEmail_Password,addStudent}