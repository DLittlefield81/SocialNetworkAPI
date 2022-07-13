GET all users

GET a single user by its _id and populated thought and friend data

POST a new user:

PUT to update a user by its _id

DELETE to remove user by its _id



const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;