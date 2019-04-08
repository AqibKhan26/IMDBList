var Dispatcher = require('flux').Dispatcher;
var Assign = require('object-assign');

var AppDispatcher = Assign(new Dispatcher(), {
	handleViewAction: function(action){
		var payload = {
			source: 'VIEW_ACTION',
			action: action
		}
		this.dispatch(payload);
	}
});

module.exports = AppDispatcher;