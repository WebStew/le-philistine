
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Text 		} 	from 'react-native';
import 			{ 	Actions , 
					Router 	, 
					Reducer ,
					Scene		} 	from 'react-native-router-flux';
import 			{ 	connect 	} 	from 'react-redux';
import language 					from '../configuration/language';
import routes 						from '../configuration/route-names';
import TabIcon 						from '../components/utilities/tab-icon';
import Catalogue 					from '../screens/catalogue';
import Categories 					from '../screens/categories';
import Drawer 						from '../screens/filters-drawer';
import Filters 						from '../screens/filters';
import Product 						from '../screens/product';
import styleNavigation 				from '../styles/navigation';
import styleTabs 					from '../styles/tabs';

const scenes = Actions.create (
		<Scene 
			key = { routes.root }
		>
			<Scene 	key 		= { routes.drawers.filters 	} 
					component 	= { Drawer 					} 
					open 		= { false 					}
			>
				<Scene 
					key 		= { routes.stories.primary 	}
					tabs 		= { true 					}
					tabBarStyle = { styleTabs.bar 			}
				>
					<Scene 
						icon 		= { TabIcon 					}
						initial 	= { true 						} 
						key 		= { routes.taxonomy.default 	}  
						onRight 	= {() => Actions.refresh ({ key : routes.drawers.filters , open : true })} 
						rightTitle 	= { language.filters.drawer 	}
						title 		= { language.taxonomy.screen 	}
					>
						<Scene  
							component 	= { Categories 					} 
							key 		= { routes.taxonomy.results 	}
							title 		= { language.categories.screen 	} 
						/>
						<Scene  
							component 	= { Filters 				} 
							key 		= { routes.taxonomy.filters }
							title 		= { language.filters.screen }
						/>
					</Scene>
					<Scene 
						icon 	= { TabIcon 					}
						key 	= { routes.catalogue.default 	}
						title 	= { language.catalogue.screen 	}
					>
						<Scene 
							component 	= { Catalogue 					}
							key 		= { routes.catalogue.results 	}
							title 		= { language.catalogue.screen 	}
						/>
						<Scene  
							component 	= { Product 					}
							key 		= { routes.catalogue.detail 	} 	
							title 		= { language.catalogue.detail 	}
						/>
					</Scene>
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
				createReducer 		= { this.reducer.bind ( this 	)}
				drawerImage 		= {{ uri : null 				}}
				navigationBarStyle 	= { styleNavigation.bar 		}
				scenes 				= { scenes 						}
				titleStyle 			= { styleNavigation.title 		}
			/>
		);
	}
});