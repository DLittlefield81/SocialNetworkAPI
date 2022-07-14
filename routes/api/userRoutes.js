const router = require('express').Router();


const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/usersController');

// /api/users get all user
// router.route('/').get(getUsers);

// /api/users //Create User
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).get(updateUser).get(deleteUser);

// /api/users/:userId
router.route('/:userId')




module.exports = router;