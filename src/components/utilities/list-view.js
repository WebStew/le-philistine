
import React , 	{ Component } 	from 'react';
import 			{ ListView 	} 	from 'react-native';

export default class List extends Component {

	constructor ( props ) {

		super ( props );

		this.datasource = new ListView.DataSource ({
			rowHasChanged : this.hasChanged
		});
	}

	hasChanged ( current , updated ) {
		return current !== updated;
	}

	render () {

		const datasource = this.datasource.cloneWithRows ( this.props.items );

		// If we're loading the content don't render an empty list
		if ( this.props.loading ) {
			return null;
		}

		return (
			<ListView
				enableEmptySections = { true 									}
				dataSource 			= { datasource 								}
				renderRow 			= {( data ) => this.props.setItem ( data 	)}
				renderSeparator 	= { this.props.setSeparator 				}
				style 				= {{ flex : 1 								}}
			/>
		);
	}	
};