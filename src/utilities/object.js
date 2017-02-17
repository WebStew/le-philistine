
export default {

	filter ( object , condition ) {

		return Object.keys ( object ).filter ( function ( key ) {
			
				return condition ( object [ key ]);
				
			}).reduce ( function ( accumulator , key ) {

				accumulator [ key ] = object [ key ]

				return accumulator;
		} , {});
	} ,

	keysToLowerCase ( object ) {

		let rewrite = {};

		Object.keys ( object ).forEach ( function ( key ) {
			rewrite [ key.toLowerCase ()] = object [ key ];
		});

		return rewrite;
	}
};