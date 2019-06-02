import * as mockData from '../util/mockData';
import * as actions from './index';

describe('addSearchResults', () => {
	it('should return an action of type ADD_SEARCH_RESULTS and a payload of restaurants', () => {
		const expected = {
			type: 'ADD_SEARCH_RESULTS',
			payload: { restaurants: mockData.mockResults }
		};

		expect(actions.addSearchResults(mockData.mockResults)).toEqual(expected);
	});
});

describe('addDetails', () => {
	it('should return an action of type ADD_DETAILS and a payload of details', () => {
		const expected = {
			type: 'ADD_DETAILS',
			payload: { details: mockData.mockDetails[0] }
		};

		expect(actions.addDetails(mockData.mockDetails[0])).toEqual(expected);
	});
});

describe('addDetails', () => {
	it('should return an action of type ADD_TRENDING and a payload of restaurants', () => {
		const expected = {
			type: 'ADD_TRENDING',
			payload: { restaurants: mockData.mockResults }
		};

		expect(actions.addTrending(mockData.mockResults)).toEqual(expected);
	});
});
