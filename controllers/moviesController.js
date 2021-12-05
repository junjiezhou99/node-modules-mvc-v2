import movies from '../data/movies.js';
import moviesModel from '../models/moviesModel.js';

const getAllMovies = (data_movie) => {
    data_movie.res = moviesModel.getMovies();
}

const getMovieById = (data_movie) => {
    data_movie.res.push(moviesModel.getMovieById(data_movie.req.id));
}

const removeMovie = (data_movie) => {
    moviesModel.removeMovie(data_movie.req.id);
    data_movie.res = movies;
}

const createMovie = (data_movie) => {
    moviesModel.createMovie(data_movie.req);
    data_movie.res = movies;
}

const updateMovie = (data_movie) => {
    moviesModel.updateMovie(data_movie.req)
    data_movie.res = movies;
}

const getMovieBy = (data_movie) => {
    data_movie.res = moviesModel.getMovieBy(data_movie.req)
}

export default {
   getAllMovies,
   getMovieById,
   removeMovie,
   createMovie,
   updateMovie,
   getMovieBy
}