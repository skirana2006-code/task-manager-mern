const express = require("express");
const Router = express.Router();
const{ registerUser}= require("../controllers/authcontroller");
router.post("/register",registerUser);

module.export = router;