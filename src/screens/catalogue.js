
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	connect 	} 	from 'react-redux';
import 			{ 	View , 
					Text		} 	from 'react-native';
import actions 						from '../actions/catalogue';
import List 						from '../components/utilities/list-view';
import Loader 						from '../components/utilities/loader';
import Product 						from '../components/catalogue/product';
import styleScene 					from '../styles/scenes';
import styleSeparators 				from '../styles/separators';
import object 						from '../utilities/object';

export default connect (

	state => ({
		filters 	: state.filters ,
		catalogue 	: state.catalogue
	})

) ( class Catalogue extends Component {

	constructor ( props ) {

		super ( props );

		// Create an array of the current filter ids
		const filters = Object.keys ( object.filter ( this.props.filters , filter => filter.on === true ));

		this.props.dispatch ( actions.get ({ filters : filters }));
		
		this.renderProduct = this.renderProduct.bind ( this );
	}

	renderProduct ( product ) {

		return ( 
			<Product 
				product 	= { product 			}
				dispatch 	= { this.props.dispatch	}
			/>
		);
	}

	setSeparator ( section , row , highlighted ) {

		return (
			<View
				key 	= { section + '-' + row 	}
				style 	= { styleSeparators.default }
			/>
		);
	}
	
	render () {		

		return (
			<View style = { styleScene.default }>
				<Loader
					loading = { this.props.catalogue.loading }
					size 	= 'large'
				/>
				<List 
					data 			= { this.props.catalogue.products 	}
					loading 		= { this.props.catalogue.loading 	}
					setRow 			= { this.renderProduct 				}
					setSeparator 	= { this.setSeparator 				}
				/>
			</View>
		);
	}

});
