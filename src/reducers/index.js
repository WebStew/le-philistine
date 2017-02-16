
import { combineReducers } 	from 'redux';
import filters 				from '../reducers/filters';
import routes 				from '../reducers/routes';
import taxonomy 			from '../reducers/taxonomy';

export default combineReducers ({
	filters ,
	routes 	,
	taxonomy
});
