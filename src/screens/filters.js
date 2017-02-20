
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	connect 	} 	from 'react-redux';
import 			{ 	View , 
					Text		} 	from 'react-native';
import 			{ 	Actions 	} 	from 'react-native-router-flux';
import List 						from '../components/utilities/list-view';
import Filter 						from '../components/filters/filter';
import styleScene 					from '../styles/scenes';
import styleSeparators 				from '../styles/separators';
import object 						from '../utilities/object';

export default connect (

	state => ({
		filters : state.filters
	})

) ( class Filters extends Component {

	constructor ( props ) {

		super ( props )

		this.renderFilter 	= this.renderFilter.bind 	( this );
		this.setSeparator 	= this.setSeparator.bind 	( this );
	}

	componentWillMount () {

		Actions.refresh ({
			title : this.props.category.name
		});
	}
	
	renderFilter ( filter ) {

		return ( 
			<Filter 
				filter 		= { filter 				}
				dispatch 	= { this.props.dispatch }
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

		const 	category 	= this.props.category.id ,
				filters 	= object.filter ( this.props.filters , filter => filter.category === category );

		return (
			<View style = { styleScene.default }>

				<List 
					data			= { filters 			}
					setRow 			= { this.renderFilter 	}
					setSeparator 	= { this.setSeparator 	}
				/>
			</View>
		);
	}
});
