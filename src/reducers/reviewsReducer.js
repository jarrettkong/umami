export const reviewsReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_REVIEWS':
			return [...state, payload.review];
		default:
			return state;
	}
};
