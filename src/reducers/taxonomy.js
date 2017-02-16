
import constants 		from '../constants/taxonomy';
import schematics 		from '../schema/taxonomy';

export default function (

	state 	= {
		categories 	: null 	,
		data  		: [] 	,
		error 		: null 	,
		filters 	: null 	,
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

			const normalized = schematics.get ( action.data.Categories );
			console.log ( normalized.entities.filters );

			return Object.assign (
				{} 		,
				state 	,
				{
					categories 	: normalized.entities.categories 	, 
					data 		: action.data.Categories 			,
					filters 	: normalized.entities.filters 		,
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
