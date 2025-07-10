const express = require("express");
const router = express.Router();
const User = require('../models/user');
const {getAllUsers,getUserById,updateUserById,deleteUserById,createUser} = require('../controllers/user');

router.get('/',getAllUsers);

router.route('/:id')
.get(getUserById)
.patch(updateUserById)
.delete(deleteUserById);
router.post('/',createUser);
 
module.exports = router;
