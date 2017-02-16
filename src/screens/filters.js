
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	connect 	} 	from 'react-redux';
import 			{ 	View , 
					Text		} 	from 'react-native';

//import 			{ 	Actions 	} 	from 'react-native-router-flux';
import actions 						from '../actions/taxonomy';
import List 						from '../components/utilities/list-view';
import Loader 						from '../components/utilities/loader';
import Filter 						from '../components/filters/item';
import style 						from '../styles/scenes';

export default connect (

	state => ({
		filters : state.taxonomy
	})

) ( class Filters extends Component {

	constructor ( props ) {

		super ( props )
		this.setItem = this.setItem.bind ( this );
	}

	componentDidMount () {

		//  Actions.refresh ({
		// 	 title : this.props.boards.model [ this.props.id ].name
		//  });

		 this.props.dispatch ( actions.get ());
	}
	
	setItem ( data ) {

		return ( 
			<Filter 
				filter 		= { data 				}
				dispatch 	= { this.props.dispatch }
			/>
		);
	}
	
	render () {

		return (
			<View style = { style.default }>
				<Loader
					loading = { this.props.filters.loading 	}
					size 	= 'large'
				/>
				<List 
					items 	= { this.props.filters.data 	}
					loading = { this.props.filters.loading 	}
					setItem = { this.setItem 				}
				/>
			</View>
		);
	}

});
