export const reviewsReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_REVIEWS':
			return [...state, payload.reviews];
		default:
			return state;
	}
};
