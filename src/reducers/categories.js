
import constants 	from '../constants/categories';

export default function (

	state 	= {} , 
	action 	= {}

) {

	switch ( action.type ) {

		case constants.setup 	:


			return Object.assign (
				{} 		,
				state 	,
				action.categories
			);

		break;

		default :
			return state;
	}
};
