export const addSearchResults = results => {
	return {
		type: 'ADD_SEARCH_RESULTS',
		payload: { results }
	};
};
