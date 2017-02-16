
import constants 	from '../constants/taxonomy';
import api 			from '../api/taxonomy';

const 	error = function ( data ) {

			return {
				error 	: data ,
				type 	: constants.error
			};
		} ,

		receive = function ( data ) {

			return {
				data 	: data ,
				type 	: constants.receive
			};
		} ,

		request = function () {

			return {
				type 	: constants.request
			};
		};

export default {

	get () {


		return function ( dispatch ) {

			dispatch ( request ());

			return api.get ().then ( function ( response ) {

				return response.json ();
			})
			.then 	( data 	=> dispatch ( receive 	( data 	)))
			.catch 	( data 	=> dispatch ( error 	( data 	)));
		}
	}
};
