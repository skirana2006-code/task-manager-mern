const mongoose = required("mongoose");

const userschema = mongoose.schema{
    {
        name:{
            type:String,
            required: true;
        },
        email:{
            type:String,
            required: true;
            unique: true;
        },
        password:{
            type:String,
            required: true;
        }
    },
    {
    timestamps: true;
    }
};

module.exports = mongoose.model("User",userschema);