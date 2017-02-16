
import React , 	{ 	Component 			} 	from 'react';
import 			{ 	Text , 
					View ,
					TouchableOpacity 	} 	from 'react-native';
//import 			{ 	Actions 			} 	from 'react-native-router-flux';
//import language 							from '../../configuration/language';
//import Favourited 							from '../images/favourited';
//import styles 								from '../../styles/boards';
//import utilities 							from '../../utilities/strings';
//import actions 								from '../../actions/boards';

export default class Overview extends Component {

	// constructor ( props ) {

	// 	super ( props );

	// 	this.setFavourite 	= this.setFavourite.bind 	( this );
	// 	this.setScene 		= this.setScene.bind 		( this );
	// }

	// setScene () {
		
	// 	// Change the scene to the detail view
	// 	Actions.board ({
	// 		board : this.props.board.id
	// 	});
	// }

	// setFavourite () {

	// 	this.props.dispatch ( actions.update ({
	// 		id 			: this.props.board.id ,
	// 		favourite 	: ! this.props.board.favourite
	// 	}));
	// }
	/*				<View style = { styles.overview.main }>
					<TouchableOpacity  onPress = { this.setScene }>
						<Text 	style = { styles.overview.title }>
							{ board.name }
						</Text>
					</TouchableOpacity>
					<Text style = { styles.overview.modified }>
						{ language.boards.changed } : { board.modified }
					</Text>
				</View>
				<View style = { styles.overview.tools }>
					<TouchableOpacity onPress = { this.setFavourite }>
						<Favourited 
							favourited 	= { board.favourite } 
							label 		= { utilities.setUCFirst ( strings.action ) + ' ' + language.boards.favourite }
						/>
					</TouchableOpacity>
				</View>*/

	render () {

		return (
			<View>
				<Text>This is a test</Text>
			</View>
		);
	}	
};