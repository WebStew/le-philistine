
// Logic not yet defined
const 	language 	= null || 'en' ,
		languages 	= {
			en : {

				actions : {
					display : {
						on 	: 'Show'
					}
				} ,
				
				categories 	: {
					screen 	: 'Find by' 
				} ,

				catalogue 	: {
					screen 	: 'Catalogue' ,
					detail 	: 'Product Details'
				} ,

				filters : {
					actions 	: {
						on 		: 'Add filter for wines by' ,
						off 	: 'Remove filter for wines by' 
					} ,
					drawer 		: 'Filters' 		,
					screen 		: 'Set a filter' 	,
					unavailable : 'No filters have been setup'
				} ,

				taxonomy : {
					screen : 'Categories'
				}
			}
		};

export default languages [ language ];