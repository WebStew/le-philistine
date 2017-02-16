
import { combineReducers } 	from 'redux';
import routes 				from '../reducers/routes';
import taxonomy 			from '../reducers/taxonomy';

export default combineReducers ({
	routes ,
	taxonomy
});
