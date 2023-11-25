async function Login(collection, email, password) {
    try {
        const result = await collection.findOne({ Email: email, Password: password });
        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
        throw e; 
    }
}

module.exports = { Login };
