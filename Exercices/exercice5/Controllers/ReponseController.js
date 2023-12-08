const {Reponse} = require('../Models/Reponse')
async function getAllRepliesByBlog(BlogId){
         try {
            const result = await Reponse.find({BlogId : BlogId})
            return result;
        } catch (e) {
            console.log(e);
            throw e; 
        }
}
async function addReplieToBlog(BlogId,reponse,student){
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
        const newReponse =  new Reponse({
            BlogId: BlogId,
            Date: formattedDate,
            Text: reponse,
            Student: student,
        })
       const result = await newReponse.save()
       return result;
   } catch (e) {
       console.log(e);
       throw e; 
   }
}
module.exports = {getAllRepliesByBlog,addReplieToBlog}