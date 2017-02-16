
import theme from '../styles/theme';

export default {

	bar : {
		backgroundColor		: theme.brands [ 3 ] 	,
		borderBottomColor 	: theme.brands [ 2 ] 	,
		borderBottomWidth 	: 1 					,
		borderLeftColor 	: theme.brands [ 3 ] 	,
		borderLeftWidth 	: 1 					,
		borderRightColor 	: theme.brands [ 3 ] 	,
		borderRightWidth 	: 1 					,
		borderTopColor 		: theme.brands [ 3 ] 	,
		borderTopWidth 		: 1
	} ,
	
	title : {
		color 				: theme.swatches 	[ 1 ] ,
		textShadowColor 	: theme.brands 		[ 3 ] ,
		textShadowOffset 	: {
			width 	: 1 ,
			height 	: 1
		} ,
		textShadowRadius 	: 2
	}
};