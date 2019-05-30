export const trendingReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_TRENDING':
			return payload.restaurants;
		default:
			return state;
	}
};
