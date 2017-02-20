
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Text , 
					View 		} 	from 'react-native';
import styles 						from '../../styles/unavailable';

export default class Unavailable extends Component {

	render () {

		// If data is available don't render
		if ( Object.keys ( this.props.data ).length > 0 ) {
			return null;
		}

		return (
			<View 		style = { styles.view }>
				<Text 	style = { styles.text }>
					{ this.props.label }.
				</Text>
			</View>
		);
	}	
};