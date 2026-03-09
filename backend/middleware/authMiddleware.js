const jwt = require("jasonwebtoken");
const protect = (req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startswitch("bearer")){
        try{
            token = req.headers.authorization.split("")[1];

            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user =decoded;
            next();
        }
        catch(error){
            res.status(401).json({message: "Not authorized ,token failed"});
        }
    }
    if(!token){
        res.status(401).json({message:"not authorized,no token"});
    }
};
module.exports = protect;