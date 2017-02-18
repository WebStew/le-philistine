
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
import Categories 					from '../screens/categories';
import Drawer 						from '../screens/drawer';
import Filters 						from '../screens/filters';
import Catalogue 					from '../screens/catalogue';
import styleNavigation 				from '../styles/navigation';
import styleTabs 					from '../styles/tabs';

const scenes = Actions.create (
		<Scene 
			key = { routes.root }
		>
			<Scene key="drawer" component={Drawer} open={false} >
				<Scene 
					key 		= { routes.stories.primary 	}
					tabs 		= { true 					}
					tabBarStyle = { styleTabs.bar 			}
				>
					<Scene 
						icon 		= { TabIcon 					}
						initial 	= { true 						} 
						key 		= { routes.taxonomy.default 	}  
						onRight 	= {() => alert ( 'Right button' )} 
						rightTitle 	= { language.states.filters 	}
						title 		= { language.screens.taxonomy 	}
					>
						<Scene  
							component 	= { Categories 					} 
							key 		= { routes.taxonomy.results 	}
							title 		= { language.screens.categories } 
						/>
						<Scene  
							component 	= { Filters } 
							key 		= { routes.taxonomy.filters 	}
							title 		= { language.screens.filters 	}
						/>
					</Scene>
					<Scene 
						icon 	= { TabIcon 					}
						key 	= { routes.catalogue.default 	}
						title 	= { language.screens.catalogue 	}
					>
						<Scene 
							component 	= { Catalogue 					}
							key 		= { routes.catalogue.results 	}
							title 		= { language.screens.catalogue 	}
						/>
						<Scene  
							component 	= { Catalogue 					}
							key 		= { routes.catalogue.detail 	} 	
							title 		= { language.screens.catalogue 	}
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
		
		// drawerImage 		= {{ uri : null 				}}
		
		return (
			<Router
				createReducer 		= { this.reducer.bind ( this 	)}
				navigationBarStyle 	= { styleNavigation.bar 		}
				scenes 				= { scenes 						}
				titleStyle 			= { styleNavigation.title 		}
			/>
		);
	}
});