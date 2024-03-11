const mongoose = require("mongoose");
const express = require('express');
const { User, Course, Admin } = require("../db");
const jwt = require('jsonwebtoken');
const { authenticateJwt, SECRET } = require('../middleware/auth');

const router = express.Router();


router.get('/me', authenticateJwt, async (req, res) => {
    const admin = await Admin.findOne({username: req.user.username});
    if(!admin) {
      res.status(403).json({message: 'Admin doesnt exist'});
    }
    res.json({
      username: admin.username
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


router.post('/login', async(req, res) => {
  const {username, password} = req.headers;
  const admin = await Admin.findOne({username, password});
  if(admin) {
      const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '1h'});
      res.json({message: 'Logged in successfully', token});
  } else {
      res.status(403).json({message: 'Invalid or password'});
  }
});

router.post('/courses', authenticateJwt, async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json({message: 'Course created successfully', courseId: course.id });    
})



router.get('/courses', authenticateJwt, async(req, res) => {
  const courses = await Course.find({});

  res.json({courses});
});

router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true});
  if(course) {
      res.json({message: 'course updated successfully'});
  } else {
      res.status(404).json({ message: 'course not found'});
  }
});


router.get('/course/:courseId', authenticateJwt, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  res.json({course});
});

module.exports = router;