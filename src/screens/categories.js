
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	connect 	} 	from 'react-redux';
import 			{ 	View , 
					Text		} 	from 'react-native';
import actions 						from '../actions/taxonomy';
import List 						from '../components/utilities/list-view';
import Loader 						from '../components/utilities/loader';
import Category 					from '../components/categories/category';
import styleScene 					from '../styles/scenes';
import styleCategory 				from '../styles/categories';
import styleSeparators 				from '../styles/separators';

export default connect (

	state => ({
		categories : state.taxonomy
	})

) ( class Categories extends Component {

	constructor ( props ) {

		super ( props )

		this.setItem 		= this.setItem.bind 		( this );
		this.setSeparator 	= this.setSeparator.bind 	( this );
	}

	componentDidMount () {

		 this.props.dispatch ( actions.get ());
	}
	
	setItem ( data ) {

		return ( 
			<Category 
				category = { data 					}
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
					loading = { this.props.categories.loading 	}
					size 	= 'large'
				/>
				<List 
					items 			= { this.props.categories.data 		}
					loading 		= { this.props.categories.loading 	}
					setItem 		= { this.setItem 					}
					setSeparator 	= { this.setSeparator 				}
				/>
			</View>
		);
	}
});
