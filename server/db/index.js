const mongoose = require("mongoose");


//define mongoose schemas

const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});