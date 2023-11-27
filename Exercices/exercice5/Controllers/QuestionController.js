const {Blog} = require('../Models/Blog')
async function getAllBlogs(){
         try {
            const result = await Blog.find()
            return result;
        } catch (e) {
            console.log(e);
            throw e; 
        }
}
module.exports = {getAllBlogs}