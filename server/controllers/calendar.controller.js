const calendarService = require('../services/calendar.service');
const mongoose = require('mongoose');

const createYear = async (req, res) => {
  try {
    let payload = {
      _id: new mongoose.Types.ObjectId(),
      ...req.body
    };
    const response = await calendarService.createYear(payload);
    return res.status(200).send(response);
  } catch (e) {
    res.status(500).send(err);
  }
};

const getAllYear = async (req, res) => {
  try {
    const response = await calendarService.getAllYear();
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getYear = async (req, res) => {
  try {
    const payload = req.params;
    const response = await calendarService.getYear(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateYear = async (req, res) => {
  try {
    let payload = {
      _id: req.params.id,
      ...req.body
    };
    const response = await calendarService.updateYear(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteYear = async (req, res) => {
  try {
    const payload = req.params;
    const response = await calendarService.deleteYear(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createCalendar = async (req, res) => {
  try {
    const response = await calendarService.createCalendar();
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createYear,
  getAllYear,
  getYear,
  updateYear,
  deleteYear,
  createCalendar
};
