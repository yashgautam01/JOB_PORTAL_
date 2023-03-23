const express = require('express');
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser } = require('../controllers/userController');
const { isAuthenticated, isAdmin} = require('../middleware/auth');


//user routes

// /api/allusers
router.get('/allusers', isAuthenticated,isAdmin  ,allUsers);
// /api/user/:id
router.get('/user/:id', isAuthenticated,singleUser);
// api/user/edit/:id
router.get('/user/edit/:id', isAuthenticated,editUser);

router.get('/admin/user/delete/:id', isAuthenticated,isAdmin,deleteUser);
module.exports = router;