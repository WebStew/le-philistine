
import React , 	{ 	Component 		} 	from 'react';
import 			{ 	Text			} 	from 'react-native';
import Drawer 							from 'react-native-drawer';
import 			{ 	connect 		} 	from 'react-redux';
import 			{	Actions , 
					DefaultRenderer } 	from 'react-native-router-flux';

export default connect (

	state => ({
		filters : state.filters
	})

) (  class NavigationDrawer extends Component {

	render () {

		const state = this.props.navigationState;
		const children = state.children;

		return (
			<Drawer
				ref="navigation"
				open={state.open}
				onOpen={()=>Actions.refresh({key:state.key, open: true})}
				onClose={()=>Actions.refresh({key:state.key, open: false})}
				type="displace"
				side = 'right'
				content={<Text>This is a test</Text>}
				tapToClose={true}
				openDrawerOffset={0.2}
				panCloseMask={0.2}
				negotiatePan={true}
				tweenHandler={(ratio) => ({
					main: { opacity:Math.max(0.54,1-ratio) }})}
				>
				<DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
			</Drawer>
		);
	}
});