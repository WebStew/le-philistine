
import { 	normalize ,
			schema 		} 	from 'normalizr';
import 		object 			from '../utilities/object';

const filter = new schema.Entity ( 'filters' , 
		{} , 
		{ 
			idAttribute 	: 'Id' ,
			processStrategy : ( value , parent , key ) => {

				let rewrite = object.keysToLowerCase ( value ) 
				
				return { ...rewrite , category : parent.id };
			}
		}
	) ,

	category = new schema.Entity ( 'categories' , 
		{ 
			filters : [ filter ]
		} , 
		{ 
			idAttribute : 'Id' ,
			processStrategy : ( value , parent , key ) => {

				let rewrite = object.keysToLowerCase ( value )
				
				rewrite.filters = rewrite.refinements;
				delete rewrite.refinements;

				return rewrite;
			}
		}
	);

export default {
 
	get ( data ) {

		return normalize ( data , [ category ]);
	}

};