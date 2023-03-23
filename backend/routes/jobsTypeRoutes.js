const express = require('express');
const { createJobType, allJobsType } = require('../controllers/jobsTypeController');
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser } = require('../controllers/userController');
const { isAuthenticated, isAdmin} = require('../middleware/auth');


//user routes

// /api/type/create
router.post('/type/create',isAuthenticated,createJobType )
// // /api/type/create
router.get('/type/jobs',allJobsType)
module.exports = router;