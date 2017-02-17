
import constants from '../constants/filters';

export default {

	reset ( filter ) {

		return {
			id 		: filter.id ,
			type 	: constants.reset
		};
	} ,

	set ( filter ) {

		return {
			id 		: filter.id ,
			type 	: constants.set
		};
	} ,

	setup ( filters ) {

		return {
			filters : filters ,
			type 	: constants.setup
		};
	}
};
