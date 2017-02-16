
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Text 		} 	from 'react-native';
import style 						from '../../styles/tabs';

export default class TabIcon extends React.Component {

	render () {

		const 	status 		= this.props.selected ? 'on' : 'off' ,
				stylesheet 	= Object.assign ({} , style.icon.default , style.icon [ status ]);

		return (
			<Text 
				style = { stylesheet }
			>
				{ this.props.title }
			</Text>
		);
	}
}