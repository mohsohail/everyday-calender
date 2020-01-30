const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');
// endpoint - /api/v1/user/

router.post('/', user.createUser);
router.get('/', user.getAllUser);
router.get('/:userId', user.getUser);
router.patch('/:userId', user.updateUser);
router.delete('/:userId', user.deleteUser);

module.exports = router;
