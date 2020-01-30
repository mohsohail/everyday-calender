const userRepo = require('../repositories/user.repository');

const createUser = async payload => {
  try {
    let userData = await userRepo.createUser(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: userData
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const getAllUser = async () => {
  try {
    let users = await userRepo.getAllUser();
    return {
      err: false,
      message: 'success',
      status: 200,
      data: users
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const getUser = async payload => {
  try {
    let user = await userRepo.getUser(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: user
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const updateUser = async payload => {
  try {
    let user = await userRepo.updateUser(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: user
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const deleteUser = async payload => {
  try {
    let user = await userRepo.deleteUser(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: user
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser
};
