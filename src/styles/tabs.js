import theme from '../styles/theme';

export default {

	bar : {
		borderTopWidth 	: 1 					,
		borderColor 	: theme.brands [ 2 ] 	, 
		backgroundColor : theme.brands [ 3 ]
	} ,

	icon : {
		default : {
			fontSize : 16
		} ,
		on 	: {
			color : theme.brands [ 0 ] ,
		} ,
		off : {
			color : theme.brands [ 0 ] ,
		} 
	}
};