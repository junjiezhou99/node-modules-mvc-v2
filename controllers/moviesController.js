import moviesModel from '../models/moviesModel.js';

const getAllMovies = (data_movie) => {
    const movie = moviesModel.getMovies();
    if (typeof movie == "undefined"){
        throw new Error("Error");
    }
    data_movie.res = movie;
}

const getMovieById = (data_movie) => {
    if (!data_movie.req) throw new Error("Error");
    const movie = moviesModel.getMovieById(data_movie.req.id)
    if (typeof movie == "undefined"){
        throw new Error("Error");
    }
    data_movie.res.push(movie);
}

const removeMovie = (data_movie) => {
    if (!data_movie.req) throw new Error("Error");
    const index = moviesModel.removeMovie(data_movie.req.id);
    if (typeof index == "undefined"){
        throw new Error("Error");
    }
    data_movie.res = moviesModel.getMovies();
}

const createMovie = (data_movie) => {
    if (!data_movie.req) throw new Error("Error");
    const index = moviesModel.createMovie(data_movie.req);
    if (typeof index == "undefined"){
        throw new Error("Error");
    }
    data_movie.res = moviesModel.getMovies();
}

const updateMovie = (data_movie) => {
    if (!data_movie.req) throw new Error("Error");
    const index = moviesModel.updateMovie(data_movie.req);
    if (typeof index == "undefined"){
        throw new Error("Error");
    }
    data_movie.res = moviesModel.getMovies();
}

const getMovieBy = (data_movie) => {
    //Comprobación que el parametro que se pase no sea vacío
    if (!data_movie.req) throw new Error("Error");

    //Función principal, guardarlo en un const antes
    const movie = moviesModel.getMovieBy(data_movie.req)

    //Que el valor devuelto no sea vacío
    if (typeof movie == "undefined"){
        throw new Error("Error");
    }
    data_movie.res = movie;
}

export default {
   getAllMovies,
   getMovieById,
   removeMovie,
   createMovie,
   updateMovie,
   getMovieBy
}