const {Student} = require('../Models/Student')
const {getStudentByEmail,getStudentByEmail_Password,addStudent} = require('../Controllers/UserController')
async function Login(email, password) {
    try {
        const result = await getStudentByEmail_Password(email,password);
        return result;
    } catch (e) {
        console.log(e);
        throw e; 
    }
}
async function Register(Fname,Lname,field,email,password){
    try {
        const result = await addStudent(Fname,Lname,field,email,password)
        return result;
    } catch (e) {
        console.log(e);
        throw e; 
    }
}


module.exports = { Login , Register };
