
import React , 	{ 	Component 		} 	from 'react';
import 			{ 	Text			} 	from 'react-native';
import Drawer 							from 'react-native-drawer';
import 			{ 	connect 		} 	from 'react-redux';
import 			{	Actions , 
					DefaultRenderer } 	from 'react-native-router-flux';	
import Filters 							from '../components/filters/drawer';

export default connect (

	state => ({
		filters : state.filters
	})

) (  class FiltersDrawer extends Component {

	render () {

		const 	state 		= this.props.navigationState ,
				children 	= state.children;

		return (
			<Drawer
				content 			= { 
					<Filters 
						dispatch 	= { this.props.dispatch } 
						filters 	= { this.props.filters 	} 
					/> 
				}
				open 				= { state.open }
				onClose 			= {() => Actions.refresh ({ key : state.key , open : false 	})}
				onOpen 				= {() => Actions.refresh ({ key : state.key , open : true 	})}
				ref 				= 'navigation'
				side 				= 'right'
				tapToClose 			= { true 	}
				type 				= 'displace'
				openDrawerOffset 	= { 0.2 	}
				panCloseMask 		= { 0.2 	}
				negotiatePan 		= { true 	}
			>
				<DefaultRenderer 
					onNavigate 		= { this.props.onNavigate } 
					navigationState = { children [ 0 ]} 
				/>
			</Drawer>
		);
	}
});