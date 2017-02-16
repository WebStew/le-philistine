
import React , 	{ 	Component 			} 	from 'react';
import 			{ 	Text , 
					View ,
					TouchableOpacity 	} 	from 'react-native';
import Image 								from '../utilities/image';
// import 			{ 	Actions 			} 	from 'react-native-router-flux';
import actions 								from '../../actions/filters';
import images 								from '../../configuration/images';
import language 							from '../../configuration/language';
import styleImage 							from '../../styles/images';
import styleFilter 							from '../../styles/filters';

export default class Filter extends Component {

	constructor ( props ) {

		super ( props );
		this.setFilter = this.setFilter.bind ( this );
	}

	setFilter () {
		
		const filter = this.props.filter;
		// Actions [ 'category-details' ] ({
		// 	category : this.props.category
		// });
		this.props.dispatch ( actions.set ({
			id 		: filter.id ,
			name 	: filter.name
		}));
	}

	render () {

		const 	filter 	= this.props.filter ,
				label 	= filter.on ? language.actions.filter.off 	: language.actions.filter.on ,
				source 	= filter.on ? images.checkbox.on 			: images.checkbox.off;

		return (

			<View>
				<TouchableOpacity 
					style 	= { styleFilter.item 		} 
					onPress = { this.setFilter 			}>
					<Text style = { styleFilter.text 	}>
						{ filter.Name 		}
					</Text>
					<Image 
						label 	= { label + ' ' + filter.Name }
						source 	= { source 	}
						style 	= { styleImage.icons.medium }
					/>
				</TouchableOpacity>
			</View>
		);
	}	
};