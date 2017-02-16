
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
			refinements : [ filter ]
		} , 
		{ 
			idAttribute : 'Id' ,
			processStrategy : ( value , parent , key ) => {
				let rewrite = object.keysToLowerCase ( value ); 
				return { ...rewrite };
			}
		}
	);

export default {
 
	get ( data ) {
		var test = normalize ( data , [ category ])
		console.log ( 'TEST' , test );
		return normalize ( data , [ category ]);
	}

};