const User = require("../models/user");
const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req,res)=>{
    
    try{
    const { name, email, password}= req.body;

    
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({message:"User alredy exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({
           message: "User registration succesfull",
           user
        });
        } catch(error){
            res.status(500).json({message:error.message});
        }
    };
   module.exports = registerUser;
