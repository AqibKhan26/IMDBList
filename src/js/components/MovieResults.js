var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');
var Movie = require('./Movie.js');

var MovieResults = React.createClass({
	render: function(){
		console.log(this.props.movies);
		return(
			<div>
				<h3 className="text-center">Results</h3>
				{
					this.props.movies.map( function (movie,i) {
						return(
							<Movie movie={movie} key={i} />
						)
					})
				}
				<br />
				<br />
			</div>
		)
	},
});

module.exports = MovieResults;
