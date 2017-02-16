
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Provider 	} 	from 'react-redux';
import configuration 				from '../configuration/store';
import Routes 						from '../configuration/routes';

const store = configuration ();

export default class Root extends React.Component {

	render () {

		return (
			<Provider store = { store }>
				<Routes />
			</Provider>
		);
	}
};
