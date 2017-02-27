
import api 			from '../api/catalogue';
import constants 	from '../constants/catalogue';
import schematics 	from '../schema/catalogue';

const 	error = function ( data ) {

			return {
				error 	: data ,
				type 	: constants.error
			};
		} ,

		receive = function ( data ) {

			return {
				offset 		: data.offset 		,
				products 	: data.products 	,
				total 		: data.total 		,
				type 		: constants.receive
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
				
			}).then ( function ( response ) {

				const normalised = schematics.get ( response.Products.List );

				dispatch ( receive 	({
					offset 		: response.Products.Offset 		,
					products 	: normalised.entities.catalogue ,
					total 		: response.Products.Total
				}));

			}).catch ( data => dispatch ( error ( data )));
		}
	}
};
