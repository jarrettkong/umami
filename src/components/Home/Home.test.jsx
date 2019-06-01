import React from 'react';
import { Home, mapStateToProps, mapDispatchToProps } from './Home';
import { shallow } from 'enzyme';
import { mockResults } from '../../util/mockData';
import * as actions from '../../actions';
import Yelp from '../../api/Yelp';

describe('Home', () => {
	let wrapper, mockAddTrending;
	beforeEach(() => {
		mockAddTrending = jest.fn();
		wrapper = shallow(<Home trending={mockResults} addTrending={mockAddTrending} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should match the snapshot', () => {
		wrapper.setState({ loading: true });
		expect(wrapper).toMatchSnapshot();
	});

	describe('componentDidMount', () => {
		it('should not call fetchHotRestaurants if there are existing trending movies', () => {
			jest.spyOn(wrapper.instance(), 'fetchHotRestaurants');
			wrapper.instance().componentDidMount();
			expect(wrapper.instance().fetchHotRestaurants).not.toHaveBeenCalled();
		});

		it('should not call fetchHotRestaurants if there are existing trending movies', () => {
			wrapper = shallow(<Home trending={[]} />);
			jest.spyOn(wrapper.instance(), 'fetchHotRestaurants');
			wrapper.instance().componentDidMount();
			expect(wrapper.instance().fetchHotRestaurants).toHaveBeenCalled();
		});
	});

	describe('fetchHotRestaurants', () => {
		it.skip('should call the Yelp.get method with the correct params', async () => {
			const expected = [
				'/businesses/serach',
				{
					params: {
						term: '',
						location: 'Denver',
						categories: 'japanese, All',
						attributes: 'hot_and_new'
					}
				}
			];

			await wrapper.instance().fetchHotRestaurants();
			expect(Yelp.toHaveBeenCalledWith(...expected));
		});

		it('should call props.addTrending if successful', async () => {
			await wrapper.instance().fetchHotRestaurants();
			expect(mockAddTrending).toHaveBeenCalled();
		});

		it.skip('should set the error state if successful', async () => {
			Yelp.get().mockImplementation(() => Promise.reject(new Error()));
			await wrapper.instance().fetchHotRestaurants();
			expect(wrapper.state('error')).toBeDefined();
		});
	});

	describe('mapStateToProps', () => {
		it('should return an object with a key of trending and a value of an array of restaurants', () => {
			const mockState = { trending: mockResults.businesses };
			const mappedProps = mapStateToProps(mockState);
			expect(mappedProps).toEqual({ trending: mockResults.businesses });
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch with an addTrending action', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = actions.addTrending(mockResults);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.addTrending(mockResults);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});
