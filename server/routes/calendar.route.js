const express = require('express');
const router = express.Router();

const calendarController = require('../controllers/calendar.controller');

router.post('/', calendarController.createYear);
router.get('/', calendarController.getAllYear);
router.get('/:calendarId', calendarController.getYear);
router.patch('/:calendarId', calendarController.updateYear);
router.delete('/:calendarId', calendarController.deleteYear);
router.post('/createCalendar', calendarController.createCalendar);

module.exports = router;
