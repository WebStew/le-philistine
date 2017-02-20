
import environment 	from '../configuration/environment';

const api 		= {
		domain 		: environment.API.URL 	,
		endpoint 	: '/categorymap' 		,
		key 		: environment.API.key
	} ,

	headers 	= {
		Accept 			: 'application/json' ,
		'Content-Type' 	: 'application/json'
	} ,

	categories 	= {
		root : 490
	}

export default {
	
	get () {

		const url = api.domain + api.endpoint + '?apikey=' + api.key + '&filter=categories(' + categories.root + ')';

		return fetch ( url 	, {
			method 	: 'GET' ,
			headers : headers
		});
	}
};
