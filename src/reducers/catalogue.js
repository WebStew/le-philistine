
import constants 		from '../constants/catalogue';

export default function (

	state 	= {
		error 		: null 	,
		loading 	: false ,
		offset 		: 0 	,
		products 	: {} 	,
		total 		: 0
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
					loading 	: false 			,
					offset 		: action.offset 	,
					products 	: action.products 	,
					total 		: action.total
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
