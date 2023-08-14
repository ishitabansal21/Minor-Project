// personal profile route
const express = require('express');
const router = express.Router();

const{
    createProfile,
    getProfile,
    updateProfile,
    deleteProfile
} = require('../controllers/Profile');

router.route('/').post(createProfile);

module.exports = router;