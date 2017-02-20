
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Text , 
					View		} 	from 'react-native';
					
import Reset 						from '../filters/reset';
import List 						from '../utilities/list-view';
import Unavailable 					from '../utilities/unavailable';
import language 					from '../../configuration/language';
import object 						from '../../utilities/object';
import stylesFilter 				from '../../styles/filters';

export default class Drawer extends Component {
	
	constructor ( props ) {

		super ( props )

		this.setFilter 		= this.setFilter.bind 		( this );
		this.setSeparator 	= this.setSeparator.bind 	( this );
	}

	setFilter ( filter ) {

		return ( 
			<Reset 
				dispatch 	= { this.props.dispatch }
				filter 		= { filter 				} 
			/>
		);
	}

	setSeparator ( section , row , highlighted ) {

		return (
			<View
				key 	= { section + '-' + row 			}
				style 	= { stylesFilter.reset.separator 	}
			/>
		);
	}

	render () {

		const filters = object.filter ( this.props.filters , filter => filter.on === true );

		return (
			<View style = { stylesFilter.drawer }>
				<Unavailable 
					data 	= { filters 						}
					label 	= { language.filters.unavailable	}
				/>
				<List 
					data			= { filters 			}
					setRow 			= { this.setFilter 		}
					setSeparator 	= { this.setSeparator 	}
				/>
			</View>
		);
	}
};