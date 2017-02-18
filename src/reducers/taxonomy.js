
import constants 		from '../constants/taxonomy';

export default function (

	state 	= {
		error 		: null ,
		loading 	: false
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.error 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: action.error ,
					loading : false
				}
			);

		break;

		case constants.receive 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					loading 	: false 
				}
			);

		break;

		case constants.request 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : true
				}
			);

		break;

		default :
			return state;
	}
};
