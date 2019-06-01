import React from 'react';
import { SearchResults, mapStateToProps, mapDispatchToProps } from './SearchResults';
import { shallow } from 'enzyme';
import { addSearchResults } from '../../actions';
import { mockResults } from '../../util/mockData';

describe('SearchResults', () => {
	let wrapper, mockAddSearchResults;
	beforeEach(() => {
		mockAddSearchResults = jest.fn();
		wrapper = shallow(<SearchResults query="sushi" results={mockResults} addSearchResults={mockAddSearchResults} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should match the snapshot', () => {
		wrapper.setState({ loading: true });
		expect(wrapper).toMatchSnapshot();
	});

	describe('componentDidMount', () => {
		it('should call searchApi', () => {
			jest.spyOn(wrapper.instance(), 'searchApi');
			wrapper.instance().componentDidMount();
			expect(wrapper.instance().searchApi).toHaveBeenCalled();
		});
	});

	describe('searchApi', () => {
		it.skip('should call Yelp.get with the correct params', async () => {});

		it('should call addSearchResults with the correct params', async () => {
			await wrapper.instance().searchApi();
			expect(mockAddSearchResults).toHaveBeenCalled();
			expect(wrapper.state('error')).toEqual(null);
		});
	});

	describe('mapStateToProps', () => {
		it('should return an object with results', () => {
			const mockState = { results: mockResults };
			const mappedProps = mapStateToProps(mockState);
			expect(mappedProps).toEqual({ results: mockResults });
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch with an addSearchResults action', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = addSearchResults(mockResults);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.addSearchResults(mockResults);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});
