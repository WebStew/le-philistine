
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Text 		} 	from 'react-native';
import 			{ 	Actions , 
					Router 	, 
					Reducer ,
					Scene		} 	from 'react-native-router-flux';
import 			{ 	connect 	} 	from 'react-redux';

//import Categories 					from '../screens/categories';
//import Catalog 						from '../screens/catalog';

import TabIcon 						from '../components/utilities/tab-icon';
import Filters 						from '../screens/filters';
import Products 					from '../screens/products';
import style 						from '../styles/navigation';

import styleNavigation 				from '../styles/navigation';
import styleTabs 					from '../styles/tabs';

const scenes = Actions.create (
		<Scene 
			key = 'Root'
		>
			<Scene 
				key 	= 'navigation' 
				tabs 	= { true }
				tabBarStyle = { styleTabs.bar }
			>
				<Scene 
					icon 	= { TabIcon }
					initial = { true } 
					key 	= 'filters' 
					title 	= 'Filters' 
				>
					<Scene  
						component 	= { Filters } 
						key 		= 'filter-results'
						onRight 	= {() => alert ( 'Right button' )} 
						rightTitle 	= 'Action'
						title 		= 'Categories' 
					/>
					<Scene  
						component 	= { Filters } 
						key 		= 'filter-details'
						title 		= 'Set a filter'
					/>
				</Scene>
				<Scene 
					icon 	= { TabIcon }
					key 	= 'wines' 
					title 	= 'Wines' 
				>
					<Scene 
						key 		= 'product-results' 
						component 	= { Products }  
						leftTitle 	= 'Action'
						onLeft 		= {() => alert ( 'Left button!' )}
						title 		= 'Results' 
					/>
					<Scene 
						key 		= 'product-details' 
						component 	=  { Products } 
						title 		= 'Details'
					/>
				</Scene>
			</Scene>
		</Scene>
	);

export default connect () ( class Routes extends Component {

	reducer ( parameters ) {

		const original = Reducer ( parameters );
		
		return ( state , action ) => {

			this.props.dispatch ( action 			);
			return original 	( state , action 	);
		};
	}

	render () {
		
		return (
			<Router
				createReducer 		= { this.reducer.bind ( this )}
				navigationBarStyle 	= { styleNavigation.bar 	}
				scenes 				= { scenes 					}
				titleStyle 			= { styleNavigation.title 	}
			/>
		);
	}
});