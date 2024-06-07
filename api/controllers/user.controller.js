const User = require("../models/user.model");

const getAllUsers = async (request, response) => {
  try {
    let users;
    if (request.query && request.query.name) {
      users = await User.findAll({
        where: {
          name: request.query.name,
        },
      });
      return response.status(200).json(users);
    } else {
      users = await User.findAll();
      return response.status(200).json(users);
    }
  } catch (error) {
    return response.status(501).send(error);
  }
};

const getUser = async (request, response) => {
  
  try {
    const user = await User.findOne({
      
      where: {
        id: request.params.id, 
      },
    });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const createUser = async (request, response) => {
  
  try {
    const user = await User.create(request.body); 
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const updateUser = async (request, response) => {
  try {
    const user = await User.update(request.body, {
      
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const deleteUser = async (request, response) => {
  try {
    await User.destroy({
      where: {
        id: request.params.id, 
      },
    });
    return response
      .status(200)
      .send(`User with id ${request.params.id} was deleted`); 
  } catch (error) {
    return response.status(501).send(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
