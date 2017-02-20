
import { combineReducers } 	from 'redux';
import catalogue 			from '../reducers/catalogue';
import categories 			from '../reducers/categories';
import filters 				from '../reducers/filters';
import routes 				from '../reducers/routes';
import taxonomy 			from '../reducers/taxonomy';

export default combineReducers ({
	catalogue 	,
	categories 	,
	filters 	,
	routes 		,
	taxonomy
});
