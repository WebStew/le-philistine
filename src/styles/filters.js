
import theme from '../styles/theme';

export default {

	drawer : {
		backgroundColor : theme.brands [ 2 ] 	,
		borderLeftColor : theme.brands [ 2 ] 	,
		borderLeftWidth : 1 					,
		flex 			: 1
	} ,

	item : {
		alignItems 		: 'center' 				,
		backgroundColor : theme.brands [ 3 ] 	,
		flex 			: 1 					,
		flexDirection 	: 'row' 				,
		padding 		: 10
	} ,
	
	reset : {

		separator 	: {
			backgroundColor : theme.brands [ 1 ] ,
			height 			: 1
		} ,

		view 		: {
			alignItems 		: 'center' 				,
			backgroundColor : theme.brands [ 2 ] 	,
			flex 			: 1 					,
			flexDirection 	: 'row' 				,
			padding 		: 10
		}
	} ,

	text : {
		color 		: theme.swatches [ 2 ] 	,
		flex 		: 1 					,
		fontSize 	: 16
	}
};