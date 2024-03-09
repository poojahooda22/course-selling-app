const mongoose = require("mongoose");
const express = require('express');
const { User, Course, Admin } = require("./db");
const jwt = require('jsonwebtoken');

const router = express.Router;

app.post('/admin/signup', async (req, res) => {
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