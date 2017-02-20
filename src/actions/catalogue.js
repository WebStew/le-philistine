
import api 			from '../api/catalogue';
import constants 	from '../constants/catalogue';
import schematics 	from '../schema/catalogue';

const 	error = function ( data ) {

			return {
				error 	: data ,
				type 	: constants.error
			};
		} ,

		receive = function () {

			return {
				type 	: constants.receive
			};
		} ,

		request = function () {

			return {
				type 	: constants.request
			};
		};

export default {

	get ( parameters ) {

		return function ( dispatch ) {

			dispatch ( request ());

			return api.get ( parameters ).then ( function ( response ) {

				return response.json ();
				
			}).then ( function ( data ) {

				// Normalise the data
				const normalized = schematics.get ( data.Products.List );

				console.log ( 'NORMALISED' , normalized )
				dispatch ( receive 	( data ));

			}).catch ( data => dispatch ( error ( data )));
		}
	}
};
