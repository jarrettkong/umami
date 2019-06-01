import React from 'react';
import { shallow } from 'enzyme';
import { RestaurantPage } from './RestaurantPage';
import { mockDetails, mockResult } from '../../util/mockData';
import { cleanDetails } from '../../util/cleaners';

jest.mock('../../util/cleaners');

describe('RestaurantPage', () => {
	let wrapper, mockAddDetails;
	beforeEach(() => {
		mockAddDetails = jest.fn();
		wrapper = shallow(<RestaurantPage details={mockDetails} id={mockDetails[0].id} addDetails={mockAddDetails} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should match the snapshot', () => {
		wrapper.setState({ loading: true });
		expect(wrapper).toMatchSnapshot();
	});

	describe('componentDidMount', () => {
		it('should set the details to the state', () => {
			jest.spyOn(wrapper.instance(), 'getRestaurantDetails');
			wrapper.instance().componentDidMount();
			expect(wrapper.instance().getRestaurantDetails).not.toHaveBeenCalled();
			expect(wrapper.state('details')).toEqual(mockDetails[0]);
		});

		it('should call getRestaurantDetails if there is no existing info', () => {
			wrapper = shallow(<RestaurantPage details={[]} id={mockDetails[0].id} />);
			jest.spyOn(wrapper.instance(), 'getRestaurantDetails');
			wrapper.instance().componentDidMount();
			expect(wrapper.instance().getRestaurantDetails).toHaveBeenCalled();
		});
	});

	describe('getRestaurantDetails', () => {
		it.skip('should call Yelp.get with the correct params', () => {});

		it('should call cleanDetails with the raw data', async () => {
			await wrapper.instance().getRestaurantDetails(mockDetails[0].id);
			expect(cleanDetails).toHaveBeenCalledWith(mockDetails[0]);
		});
  });
});
