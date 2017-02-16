
import React , 	{ 	Component 			} 	from 'react';
import 			{ 	Text , 
					View ,
					TouchableOpacity 	} 	from 'react-native';
import 			{ 	Actions 			} 	from 'react-native-router-flux';
import Image 								from '../utilities/image';
import images 								from '../../configuration/images';
import language 							from '../../configuration/language';
import routes 								from '../../configuration/route-names';
import styleImage 							from '../../styles/images';
import styleCategory 						from '../../styles/categories';

export default class Item extends Component {

	constructor ( props ) {

		super ( props );

		this.setCategory = this.setCategory.bind ( this );
	}

	setCategory () {
		
		Actions [ routes.taxonomy.filters ] ({
			category : this.props.category
		});
	}

	render () {

		return (
			<View>
				<TouchableOpacity 
					style 	= { styleCategory.item 		} 
					onPress = { this.setCategory 		}>
					<Text style = { styleCategory.text 	}>
						{ this.props.category.Name 		}
					</Text>
					<Image 
						label 	= { language.actions.display.on + ' ' + this.props.category.Name }
						source 	= { images.chevrons.right 	}
						style 	= { styleImage.icons.medium }
					/>
				</TouchableOpacity>
			</View>
		);
	}	
};