module.exports = (app) => {
    const movies = require('../controllers/movie.controller.js');

    // Retrieve all movies
    app.get('/movies', movies.findAll);

    // Retrieve a single movie with movieId
    app.get('/movies/:movieId', movies.findOne);

}