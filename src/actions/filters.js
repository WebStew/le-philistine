
import constants from '../constants/filters';

export default {

	reset ( data ) {

		return {
			filter 	: {
				id 		: data.id
			} ,
			type 	: constants.reset
		};
	} ,

	set ( data ) {

		return {
			filter : {
				id 		: data.id ,
				name 	: data.name
			} ,
			type 	: constants.set
		};
	}
};
