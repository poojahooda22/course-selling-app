const express = require('express');
const {authenticateJwt, SECRET} = require('../middleware/auth');