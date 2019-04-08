var AppActions = require('../actions/AppActions.js');
var ApiKey = 'dd45057f';
module.exports = {
	searchMovies: function(movie){
		$.ajax({
			url: 'https://www.omdbapi.com/?s='+movie.title+'&apikey='+ApiKey,
			dataType: 'json',
			cache: false,
			success: function(data){
				AppActions.recieveMovieResults(data.Search);
			}.bind(this),
			error: function(xhr,status, err){
				alert(err);
			}.bind(this)
		});

	}
}