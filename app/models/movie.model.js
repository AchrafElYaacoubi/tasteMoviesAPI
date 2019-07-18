const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    poster: String,
    title: String,
    year: Number,
    genre:String,
    likes: Number,
    rating: Number,
    synopsis: String,
    directedBy: String,
    writtenBy: String,
    boxOffice: String,
    studio: String,
});

module.exports = mongoose.model('Movie', MovieSchema);