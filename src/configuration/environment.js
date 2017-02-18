
// Still to be implemented
const 	environment 	= null || 'development' ,
		environments 	= {
			development : {
				API 	: {
					key : 'apikey=07c2ddd3e8d368c86fee55e5db79ea78' ,
					URL : 'https://services.wine.com/api/beta2/service.svc/JSON'
				}
			}
		};

export default environments [ environment ];
