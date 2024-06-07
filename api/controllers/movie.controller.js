const Movie = require("../models/movie.model");

const getAllMovies = async (request, response) => {
  
  try {
    const movies = await Movie.findAll(); 
    return response.status(200).json(movies); 
  } catch (error) {
    return response.status(501).send(error); 
  }
};

const getMovie = async (request, response) => {
  
  try {
    const movie = await Movie.findOne({
      
      where: {
        id: request.params.id, 
      },
    });
    return response.status(200).json(movie);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const createMovie = async (request, response) => {
  
  try {
    const movie = await Movie.create(request.body); 
    return response.status(200).json(movie);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const updateMovie = async (request, response) => {
  try {
    const movie = await Movie.update(request.body, {
      
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(movie);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const deleteMovie = async (request, response) => {
  try {
    await Movie.destroy({
      where: {
        id: request.params.id, 
      },
    });
    return response
      .status(200)
      .send(`Movie with id ${request.params.id} was deleted`); 
  } catch (error) {
    return response.status(501).send(error);
  }
};

module.exports = {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
