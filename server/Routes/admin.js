const mongoose = require("mongoose");
const express = require('express');
const { User, Course, Admin } = require("./db");
const jwt = require('jsonwebtoken');

const router = express.Router;

