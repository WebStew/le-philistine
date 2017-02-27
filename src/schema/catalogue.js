
import { 	normalize ,
			schema 		} 	from 'normalizr';
import 		object 			from '../utilities/object';

const catalogue = new schema.Entity ( 'catalogue' , 
		{} ,
		{ 
			idAttribute 	: 'Id' ,
			processStrategy : ( value , parent , key ) => {

				let rewrite = object.keysToLowerCase ( value )

				return rewrite;
			}
		}
	);

export default {
 
	get ( data ) {

		return normalize ( data , [ catalogue ]);
	}

};