const User = require("../models/user");
const bcrypt =request("bcryptjs");

const register User = async (req,res)=>{
    const { name,email,password}=req.body;

    try{
        const userExists = await User.findOne({email});

        if(UserEXists){
            return res.status(400).json({message:"User alredy exists"});
        }
        const salt = await bcrypt.gensalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await User.create({
            name,
            email,
            Password: hashedPassword
        });
        res.status(201).json({
            _id: user.id;
            name: user.name;
            email: user.email;
        });
        } catch(error){
            res.status(500).json({message:error.message});
        }
    };
   module.export = { registerUser};
