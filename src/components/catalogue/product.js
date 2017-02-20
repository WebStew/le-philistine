
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Text , 
					View		} 	from 'react-native';

export default class Product extends Component {

	render () {

		//const filters = object.filter ( this.props.filters , filter => filter.on === true );

		// <Unavailable 
		// 	data 	= { filters 						}
		// 	label 	= { language.filters.unavailable	}
		// />
		// <List 
		// 	data			= { filters 			}
		// 	setRow 			= { this.setFilter 		}
		// 	setSeparator 	= { this.setSeparator 	}
		// />

		return (
			<View>
				<Text>This is a product</Text>
			</View>
		);
	}
};