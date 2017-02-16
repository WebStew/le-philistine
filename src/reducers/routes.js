
import constants from '../constants/routes';

export default function (
	state 	= {
		scene : null
	} , 
	action 	= {}
) {

	switch ( action.type ) {
		
		case constants.page:
			
			return Object.assign (
				{} 		,
				state 	,
				{
					scene : action.scene
				}
			);
		break;

		default:
			return state;
	}
};
