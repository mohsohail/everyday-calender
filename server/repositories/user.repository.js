const UserModel = require('../models/User.model');

const createUser = async payload => {
  try {
    const userData = new UserModel(payload);
    return await userData.save();
  } catch (err) {
    throw err;
  }
};

const getAllUser = async () => {
  try {
    return await UserModel.find({});
  } catch (e) {
    throw e;
  }
};

const getUser = async ({ userId }) => {
  try {
    return await UserModel.findById(userId);
  } catch (e) {
    throw e;
  }
};

const getUserViaUrl = async ({ urlId }) => {
  try {
    return await UserModel.findOne({ urlId });
  } catch (e) {
    throw e;
  }
};

const updateUser = async ({ userId }) => {
  try {
    return await UserModel.update(
      { _id: userId },
      {
        $set: {}
      }
    );
  } catch (e) {
    throw e;
  }
};

const deleteUser = async ({ userId }) => {
  try {
    return await UserModel.remove({ _id: userId });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
  getUserViaUrl,
  updateUser,
  deleteUser
};
