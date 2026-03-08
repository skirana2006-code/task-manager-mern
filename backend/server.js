const  express = require("express");
const  cors = require("cors");
const  dotenv = require("dotenv");
const  connectDB= require("./config/db.js");
//this is the auth route for user authentication
const authRoutes = require("./routers/authRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);

app.get("/", (req,res) => {
    res.send("API running");
});

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
});
