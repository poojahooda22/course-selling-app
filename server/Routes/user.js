const express = require('express');
const {authenticateJwt, SECRET} = require('../middleware/auth');
const {User, Course, Admin} = require("../db");

const router = express.Router();

router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({ username});
    if(user) {
        res.status(403).json({message: 'User already exists'});
    } else {
        const newUser = new User({ username, password});
        await newUser.save();
        const token = jwt.sign({username, role: 'user'}, SECRET, {expiresIn: '1h'});
        res.json({message: 'User created successfully', token});
    }
});

router.post('/login', async(req, res) => {
    const {username, password} = req.headers;
    const user = await User.findOne({username, password});
    if(user) {
        const token = jwt.sign({username, role: 'user'}, SECRET, {expiresIn: '1h'});
        res.json({message: 'logged in seccessfully ', token});
    } else {
        res.status(403).json({message: 'Invalid username or password'});
    }
});


router.get('/users/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({published: true});
    res.json({ courses });
  });