
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	View , 
					Text		} 	from 'react-native';
import 			{ 	Actions 	} 	from 'react-native-router-flux';
import List 						from '../components/utilities/list-view';
import Filter 						from '../components/filters/filter';
import styleScene 					from '../styles/scenes';
import styleSeparators 				from '../styles/separators';
//import styleCategory 				from '../styles/filters';	

export default class Filters extends Component {

	constructor ( props ) {

		super ( props )

		console.log ( this.props )

		this.setItem 		= this.setItem.bind 		( this );
		this.setSeparator 	= this.setSeparator.bind 	( this );
	}

	componentWillMount () {

		Actions.refresh ({
			title : this.props.category.Name
		});
	}
	
	setItem ( data ) {

		return ( 
			<Filter 
				filter 		= { data 					}
				dispatch 	= { this.props.dispatch 	}
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

				<List 
					items 			= { this.props.category.Refinements }
					setItem 		= { this.setItem 					}
					setSeparator 	= { this.setSeparator 				}
				/>
			</View>
		);
	}
};
