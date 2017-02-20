
import environment 	from '../configuration/environment';

const api 		= {
		domain 		: environment.API.URL 	,
		endpoint 	: '/catalog' 			,
		key 		: environment.API.key
	} ,

	headers 	= {
		Accept 			: 'application/json' ,
		'Content-Type' 	: 'application/json'
	} ;

	getURL 		= function ( parameters ) {

		const 	filters = parameters.filters.join ( '+' ) 				,
				instock = parameters.instock 	|| false 				,
				offset 	= parameters.offset 	|| 50 					,
				product = parameters.product 	|| null 				,
				size 	= parameters.size 		|| 50 					,
				sort 	= parameters.sort 		|| 'rating|ascending' 	;

		let url 		= api.domain + api.endpoint + '?apikey=' + api.key 	;

		if ( product ) {

			url += '&product=' + product;
		}

		else {

			url += '&filter=categories(' + filters + ')';
			url += '&size=' 	+ size;
			url += '&offset=' 	+ offset;
			url += '&instock=' 	+ instock;
		}

		return url;
	};

export default {
	
	get ( parameters ) {

		const url = getURL ( parameters );

		console.log ( 'CATALOGUE API' , url );

		return fetch ( url 	, {
			method 	: 'GET' ,
			headers : headers
		});
	}
};
