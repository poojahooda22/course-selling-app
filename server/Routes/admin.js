const mongoose = require("mongoose");
const express = require('express');
const { User, Course, Admin } = require("./db");
const jwt = require('jsonwebtoken');
const { authenticateJwt, SECRET } = require('./middleware/auth');

const router = express.Router();


router.get('/me', authenticateJwt, (req, res) => {
    const admin = 
    res.json({
      username: req.user.username
    })
  })

router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    const admin = await Admin.findOne({ username});
    if(admin) {
        res.status(403).json({message: 'Admin already exists'});
    } else {
        const newAdmin = new Admin({ username, password});
        await newAdmin.save();
        const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '1h'});
        res.json({message: 'Admin created successfully', token});
    }
});