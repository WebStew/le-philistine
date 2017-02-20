
import React , 	{ 	Component 			} 	from 'react';
import 			{ 	Text , 
					View ,
					TouchableOpacity 	} 	from 'react-native';
import Image 								from '../utilities/image';
import actions 								from '../../actions/filters';
import images 								from '../../configuration/images';
import language 							from '../../configuration/language';
import styleImage 							from '../../styles/images';
import styleFilter 							from '../../styles/filters';

export default class Reset extends Component {

	constructor ( props ) {

		super ( props );
		this.resetFilter = this.resetFilter.bind ( this );
	}

	resetFilter () {

		this.props.dispatch ( actions [ 'reset' ] ({
			id : this.props.filter.id
		}));
	}

	render () {

		const 	filter 	= this.props.filter;

		return (			
			<View>
				<TouchableOpacity 
					style 	= { styleFilter.reset.view 	} 
					onPress = { this.resetFilter 		}>
					<Text style = { styleFilter.text 	}>
						{ filter.name }
					</Text>
					<Image 
						label 	= { language.filters.actions.off  + ' ' + filter.name 	}
						source 	= { images.close.on 									}
						style 	= { styleImage.icons.small 								}
					/>
				</TouchableOpacity>
			</View>
		);
	}	
};