
export default {

	keysToLowerCase ( object ) {

		let 	revised = {};

		Object.keys ( object ).forEach ( function ( key ) {
			revised [ key.toLowerCase ()] = object [ key ];
		});

		return revised;
	}
};