const {Student} = require('../Models/Student')
async function Login(email, password) {
    try {
        const result = await Student.findOne({ Email: email, Password: password });
        return result;
    } catch (e) {
        console.log(e);
        throw e; 
    }
}

module.exports = { Login };
