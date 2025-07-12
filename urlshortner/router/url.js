const express = require('express');
const { handleGenrateNewSHortURL} = require('../controller/url')
const router = express.Router();
router.post('/')