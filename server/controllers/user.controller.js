const productService = require('../services/user.service');
const mongoose = require('mongoose');

const createUser = async (req, res) => {
  try {
    let payload = {
      _id: new mongoose.Types.ObjectId(),
      ...req.body
    };
    const response = await productService.createUser(payload);
    return res.status(200).send(response);
  } catch (e) {
    res.status(500).send(err);
  }
};

const getAllUser = async (req, res) => {
  try {
    const response = await productService.getAllUser();
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getUser = async (req, res) => {
  try {
    const payload = req.params;
    const response = await productService.getUser(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    let payload = {
      _id: req.params.id,
      ...req.body
    };
    const response = await productService.updateUser(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const payload = req.params;
    const response = await productService.deleteUser(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser
};
