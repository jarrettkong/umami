export const restaurantsReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_SEARCH_RESULTS':
			return payload.results;
		default:
			return state;
	}
};
