
import React , 	{ 	Component 			} 	from 'react';
import 			{ 	Text 				, 
					TouchableOpacity 	,
					View				} 	from 'react-native';
import 			{ 	Actions 			} 	from 'react-native-router-flux';
import Image 								from '../utilities/image';
import images 								from '../../configuration/images';
import language 							from '../../configuration/language';
import routes 								from '../../configuration/route-names';	
import styleImage 							from '../../styles/images';
import styleCatalogue 						from '../../styles/catalogue';

export default class Product extends Component {

	constructor ( props ) {

		super ( props );
		this.setProduct = this.setProduct.bind ( this );
	}

	setProduct () {
		
		Actions [ routes.catalogue.detail ] ({
			product : this.props.product
		});
	}

	render () {

		const product = this.props.product;

		return (

			<View>
				<TouchableOpacity 
					style 	= { styleCatalogue.item 	} 
					onPress = { this.setProduct 		}
				>
					<Text style={ styleCatalogue.text 	}>
						{ product.name }
					</Text>
					<Image 
						label 	= { language.actions.display.on + ' ' + product.name }
						source 	= { images.chevrons.right 	}
						style 	= { styleImage.icons.small 	}
					/>
				</TouchableOpacity>
			</View>
		);
	}
};