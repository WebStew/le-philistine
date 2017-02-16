import theme from '../styles/theme';

export default {

	bar : {
		borderTopWidth 	: 1 					,
		borderColor 	: theme.brands [ 3 ] 	, 
		backgroundColor : theme.brands [ 3 ] 	,
		opacity 		: 1
	} ,

	icon : {
		default : {
			fontSize : 16
		} ,
		on 	: {
			color : theme.swatches [ 0 ] ,
		} ,
		off : {
			color : theme.brands [ 0 ] ,
		} 
	}
};