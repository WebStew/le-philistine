
// Logic not yet defined
const 	language 	= null || 'en' ,
		languages 	= {
			en : {

				actions : {
					display : {
						on : 'Show'
					} ,
					filter 	: {
						on 	: 'Add filter for wines by' ,
						off : 'Remove filter for wines by'
					}
				} ,

				states	: {
					filters : 'Filters'
				} ,

				screens : {
					catalogue 	: 'Wines' 			,
					categories 	: 'Find by' 		,
					filter 		: 'Set a filter' 	,
					taxonomy 	: 'Categories'
				}
			}
		};

export default languages [ language ];