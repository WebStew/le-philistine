
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	connect 	} 	from 'react-redux';
import 			{ 	View , 
					ListView	} 	from 'react-native';
import actions 						from '../actions/taxonomy';
import List 						from '../components/utilities/list-view';
import Loader 						from '../components/utilities/loader';
import Category 					from '../components/categories/category';
import styleScene 					from '../styles/scenes';
import styleCategory 				from '../styles/categories';
import styleSeparators 				from '../styles/separators';

export default connect (

	state => ({
		categories 	: state.categories ,
		taxonomy 	: state.taxonomy
	})

) ( class Categories extends Component {

	constructor ( props ) {

		super ( props )

		this.setCategory 	= this.setCategory.bind 	( this );
		this.setSeparator 	= this.setSeparator.bind 	( this );
	}

	componentDidMount () {

		 this.props.dispatch ( actions.get ());
	}
	
	setCategory ( category ) {

		return ( 
			<Category 
				category = { category 				}
				dispatch = { this.props.dispatch 	}
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
					loading = { this.props.taxonomy.loading }
					size 	= 'large'
				/>
				<List 
					data 			= { this.props.categories 		}
					loading 		= { this.props.taxonomy.loading }
					setRow 			= { this.setCategory 			}
					setSeparator 	= { this.setSeparator 			}
				/>
			</View>
		);
	}
});
