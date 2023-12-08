const session = require('express-session');
const {Blog} = require('../Models/Blog')
const {getAllRepliesByBlog} = require('../Controllers/ReponseController')
async function getAllBlogs(){
         try {
            const blogs = await Blog.find()
            const reponse = await getAllRepliesByBlog(blogs._id)
            console.log(reponse)
            const result = {
                    blogs : blogs,
                    reponses : reponse
            }
            return result;
        } catch (e) {
            console.log(e);
            throw e; 
        }
}
async function addBlogs(title,question,student){
    try {
        const date = new Date();
        const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false 
        };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        const newblog =  new Blog({
            Title: title,
            Date: formattedDate,
            Text: question,
            Student: student
        }) 
       const result = await newblog.save()
       return result;
   } catch (e) {
       console.log(e);
       throw e; 
   }
}
module.exports = {getAllBlogs,addBlogs}