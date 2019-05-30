export const addSearchResults = restaurants => {
	return {
		type: 'ADD_SEARCH_RESULTS',
		payload: { restaurants }
	};
};

export const addDetails = details => {
	return {
		type: 'ADD_DETAILS',
		payload: { details }
	};
};

export const addTrending = restaurants => {
	return {
		type: 'ADD_TRENDING',
		payload: { restaurants }
	};
};
