const express=  require('express');
const router = express.Router();
const{createJob, singleJob, updateJob, showJobs} = require('../controllers/jobsController');
const{isAuthenticated, isAdmin} =require('../middleware/auth');


router.post('/job/create',isAuthenticated,createJob); //  ,isAdmin
router.get('/job/:id',singleJob);
router.put('/job/update/:job_id',isAuthenticated,updateJob); //,isAdmin
router.get('/jobs/show',showJobs); //,isAdmin

module.exports = router; 