
import constants 	from '../constants/filters';

export default function (

	state 	= {} , 
	action 	= {}

) {

	switch ( action.type ) {

		case constants.setup :

			return Object.assign (
				{} 		,
				state 	,
				action.filters
			);

		break;

		case constants.reset :

			return Object.assign (
				{} 		,
				state 	,
				{
					[ action.id ] : {
						...state [ action.id ] ,
						on : false
					}
				}
			);

		break;

		case constants.set :

			return Object.assign (
				{} 		,
				state 	,
				{
					[ action.id ] : {
						...state [ action.id ] ,
						on : true
					}
				}
			);

		break;

		default :
			return state;
	}
};
