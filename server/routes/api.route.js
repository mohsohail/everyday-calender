const express = require('express');
const router = express.Router();

const userRoutes = require('../routes/user.route');
const calendarRoutes = require('../routes/calendar.route');

router.use('/users/', userRoutes);
router.use('/calendars', calendarRoutes);

module.exports = router;
