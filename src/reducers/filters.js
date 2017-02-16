
import constants 	from '../constants/filters';

let _filters = {};

export default function (

	state 	= [] , 
	action 	= {}

) {

	switch ( action.type ) {

		case constants.reset 	:

			delete _filters [ action.filter.id ];

			return Object.assign (
				{} 		,
				state 	,
				 _filters
			);

		break;

		case constants.set 	:

			_filters [ action.filter.id ] = {
				id 		: action.filter.id 	,
				name 	: action.filter.name 
			}

			return Object.assign (
				{} 		,
				state 	,
				 _filters
			);

		break;

		default :
			return state;
	}
};
