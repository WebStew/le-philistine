
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	connect 	} 	from 'react-redux';
import 			{ 	View , 
					Text		} 	from 'react-native';
//import 			{ 	Actions 	} 	from 'react-native-router-flux';

import Loader 						from '../components/utilities/loader';
//import actions 						from '../actions/boards';
import style 						from '../styles/scenes';

export default connect (

	state => ({
		filters : state.taxonomy
	})

) ( class Filters extends Component {

	componentDidMount () {

		//  Actions.refresh ({
		// 	 title : this.props.boards.model [ this.props.id ].name
		//  });

		 //this.props.dispatch ( actions.get ( this.props.board.id ));
		 
		 //this.props.dispatch ( actions.get ({ id : this.props.board.id }));
	}
	
	render () {

		return (
			<View style = { style.default }>
				<Loader
					loading = { true }
					size 	= 'large'
				/>
			</View>
		);
	}

});
