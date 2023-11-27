const session = require('express-session');
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