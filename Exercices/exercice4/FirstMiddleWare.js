const FirstMiddleWare = (err,req,res,next) => {
        console.log("Bonjour")
        next();
}
module.exports = FirstMiddleWare