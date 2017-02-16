
import React , 	{ Component 		} 	from 'react';
import 			{ ActivityIndicator } 	from 'react-native';
import style 							from '../../styles/loader';
import theme 							from '../../styles/theme';

export default class Loader extends Component {

	render () {

		// If we're not in loading state there is no need to render
		if ( ! this.props.loading ) {
			return null;
		}

		return (
			<ActivityIndicator
				animating 	= { this.props.loading 	}
				color 		= { this.props.color || theme.brands [ 0 ]}
				size 		= { this.props.size 	}
				style 		= { style 				}
			/>
		);
	}
};