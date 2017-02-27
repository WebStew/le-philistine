
import React , 	{ 	Component 			} 	from 'react';
import 			{ 	Text 				, 
					//TouchableOpacity 	,
					View				} 	from 'react-native';
import 			{ 	connect 			} 	from 'react-redux';

import Image 								from '../components/utilities/image';

// import images 								from '../../configuration/images';
// import language 							from '../../configuration/language';
import styleScene 							from '../styles/scenes';		
import styleImage 							from '../styles/images';
// import styleCatalogue 						from '../../styles/catalogue';

export default class Product extends Component {

	render () {

		//const product = this.props.product;
		//console.log ()
		return (

			<View style = { styleScene.default }>
				<Image 
					label 	= { 'Bottle label for' + this.props.product.name }
					source 	= { this.props.product.labels [ 0 ].Url 	}
					style 	= { styleImage.icons.large 		}
				/>
				<Text style = {{ color : '#fff'}}>
					{ this.props.product.name }
				</Text>
				<Text style = {{ color : '#fff'}}>
					Appellation : { this.props.product.appellation.Name }
				</Text>
				<Text style = {{ color : '#fff'}}>
					Region : { this.props.product.appellation.Region.Name }
				</Text>
				<Text style = {{ color : '#fff'}}>
					Available from : ${ this.props.product.pricemin } - ${ this.props.product.pricemax }
				</Text>
				<Text style = {{ color : '#fff'}}>
					Retail price : ${ this.props.product.priceretail }
				</Text>
				<Text style = {{ color : '#fff'}}>
					Attributes IS ARRAY NEEDS DEVELOPING : 
				</Text>
				<Text style = {{ color : '#fff'}}>
					Rating : { this.props.product.ratings.HighestScore } 
				</Text>
				<Text style = {{ color : '#fff'}}>
					Type : { this.props.product.type } 
				</Text>
				<Text style = {{ color : '#fff'}}>
					Buy : { this.props.product.url } 
				</Text>
				<Text style = {{ color : '#fff'}}>
					Grape : { this.props.product.varietal.Name } 
				</Text>
				<Text style = {{ color : '#fff'}}>
					Grape Type : { this.props.product.varietal.WineType.Name } 
				</Text>
				<Image 
					label 	= { this.props.product.vineyard.name }
					source 	= { this.props.product.vineyard.ImageUrl 	}
					style 	= { styleImage.icons.large 		}
				/>
				<Text style = {{ color : '#fff'}}>
					Vineyard : { this.props.product.vineyard.Name } 
				</Text>
				<Text style = {{ color : '#fff'}}>
					Vinetage : { this.props.product.vintage } 
				</Text>
				<Text style = {{ color : '#fff'}}>
					Available Vinetages ARRAY NEEDS TO BE DEVELOPED 
				</Text>

			</View>
		);
	}
};