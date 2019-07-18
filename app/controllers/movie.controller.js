const Movie = require('../models/Movie.model.js')

// Retrieve and return all Movies from the database.
exports.findAll = (req, res) => {
    if(req.query.movieTaste) 
        Movie.find({ 'synopsis' : { '$regex' : req.query.movieTaste, '$options' : 'i' } })
        .then(movies => {
            if(!movies) 
                return res.status(404).send({
                    message: "Movie not found with this taste "
                });            
    
            res.send(movies);
        })
        .catch(err => {
            return res.status(500).send({
                message: "Error retrieving movies with taste  " + req.params.movieTaste
            });
        });
    else Movie.find()
        .then(movies => 
            res.send(movies)
        ).catch(err => 
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Movies."
            })
        )
};

// Find a single Movie with a MovieId
exports.findOne = (req, res) => {
    Movie.findById(req.params.movieId)
    .then(movie => {
        if(!movie) {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.movieId
            });            
        }
        res.send(movie);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.movieId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving movie with id " + req.params.movieId
        });
    });
};



