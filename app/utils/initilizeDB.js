const moviesData = require('../mockData/moviesData.json')
const Movie = require('../models/Movie.model.js')

module.exports = () => {
  Movie.deleteMany().then(() => {
    for( var i = 0; i < moviesData.length; i++ ) {
		new Movie( moviesData[ i ] ).save();
    } 
  });
  
}