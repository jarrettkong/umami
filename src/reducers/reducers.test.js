import { trendingReducer } from './trendingReducer';
import { resultsReducer } from './resultsReducer';
import * as mockData from '../util/mockData';
import * as actions from '../actions';
import { detailsReducer } from './detailsReducer';
import { reviewsReducer } from './reviewsReducer';

describe('trendingReducer', () => {
	it('should return the initial state', () => {
		const invalidAction = {
			type: 'INVALID_ACTION',
			payload: null
		};
		const result = trendingReducer(undefined, invalidAction);
		expect(result).toEqual([]);
	});

	it('should return an array of restaurants', () => {
		const result = trendingReducer(undefined, actions.addTrending(mockData.mockResults));
		expect(result).toEqual(mockData.mockResults);
	});
});

describe('resultsReducer', () => {
	it('should return the initial state', () => {
		const invalidAction = {
			type: 'INVALID_ACTION',
			payload: null
		};
		const result = resultsReducer(undefined, invalidAction);
		expect(result).toEqual([]);
	});

	it('should return the search results', () => {
		const result = resultsReducer(undefined, actions.addSearchResults(mockData.mockSearchResult));
		expect(result).toEqual(mockData.mockSearchResult);
	});
});

describe('detailsReducer', () => {
	it('should return the initial state', () => {
		const invalidAction = {
			type: 'INVALID_ACTION',
			payload: null
		};
		const result = detailsReducer(undefined, invalidAction);
		expect(result).toEqual([]);
	});

	it('should add the new details to the existing state', () => {
		const { mockDetails } = mockData;
		const result = detailsReducer(mockDetails, actions.addDetails(mockDetails[0]));
		expect(result).toHaveLength(2);
	});
});

describe('reviewsReducer', () => {
	it('should return the initial state', () => {
		const invalidAction = {
			type: 'INVALID_ACTION',
			payload: null
		};
		const result = reviewsReducer(undefined, invalidAction);
		expect(result).toEqual([]);
	});

	it('should add the new details to the existing state', () => {
		const { mockReviews } = mockData;
		const result = reviewsReducer(undefined, actions.addReviews(mockReviews));
		expect(result).toEqual([mockReviews]);
	});
});
