
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Image 		} 	from 'react-native';

export default class Figure extends Component {

	render () {

		return (
			<Image 
				accessibilityLabel 	= { this.props.label 			} 
				source 				= {{ uri : this.props.source 	}} 
				style 				= { this.props.style 			}
			/>
		);
	}
};