
import { combineReducers } 	from 'redux';
import categories 			from '../reducers/categories';
import filters 				from '../reducers/filters';
import routes 				from '../reducers/routes';
import taxonomy 			from '../reducers/taxonomy';

export default combineReducers ({
	categories 	,
	filters 	,
	routes 		,
	taxonomy
});
