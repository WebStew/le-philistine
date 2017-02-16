
import environment 	from '../configuration/environment';

const api 	= {
		domain 		: environment.API.URL 	,
		endpoint 	: '/categorymap' 		,
		key 		: environment.API.key
	} ,

	headers = {
		Accept 			: 'application/json' ,
		'Content-Type' 	: 'application/json'
	};

export default {
	
	get () {

		const url = api.domain + api.endpoint + '?' + api.key + '&filter=categories(490)';

		console.log( url );

		return fetch ( url 	, {
			method 	: 'GET' ,
			headers : headers
		});
	}
};
