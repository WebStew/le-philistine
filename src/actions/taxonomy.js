
import api 			from '../api/taxonomy';
import constants 	from '../constants/taxonomy';
import schematics 	from '../schema/taxonomy';
import filters 		from '../actions/filters';
import categories 	from '../actions/categories';

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

	get () {

		return function ( dispatch ) {

			dispatch ( request ());

			return api.get ().then ( function ( response ) {

				return response.json ();
				
			}).then ( function ( data ) {

				// Normalise the data
				const normalized = schematics.get ( data.Categories );

				dispatch ( filters.setup 	( normalized.entities.filters 		));
				dispatch ( categories.setup ( normalized.entities.categories 	));
				dispatch ( receive 	());

			}).catch 	( data => dispatch ( error ( data )));
		}
	}
};
