
export default {

	 getIndexByProperty ( collection , property , value ) {

		return collection.findIndex ( function  ( item ) {

			return value === item [ property ];
		});
	}
}
