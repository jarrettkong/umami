export const detailsReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_DETAILS':
			return [...state, payload.details];
		default:
			return state;
	}
};
