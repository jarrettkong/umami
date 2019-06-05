import React from 'react';
import { shallow } from 'enzyme';
import { RestaurantPage, mapStateToProps, mapDispatchToProps } from './RestaurantPage';
import { mockDetails, mockReviews } from '../../util/mockData';
import { addDetails } from '../../actions';
import { cleanDetails } from '../../util/cleaners';

jest.mock('../../util/cleaners');

describe('RestaurantPage', () => {
	let wrapper, mockAddDetails, reviews;
	beforeEach(() => {
		mockAddDetails = jest.fn();
		reviews = { id: 'WavvLdfdP6g8aZTtbBQHTw', reviews: mockReviews };
		wrapper = shallow(
			<RestaurantPage details={mockDetails} id={mockDetails[0].id} addDetails={mockAddDetails} reviews={[reviews]} />
		);
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
		it.skip('should call Yelp.get with the correct params', () => {
			expect(wrapper.state('error')).toEqual(null);
			expect(wrapper.state('loading')).toEqual(false);
		});

		it('should call cleanDetails with the raw data', async () => {
			await wrapper.instance().getRestaurantDetails(mockDetails[0].id);
			expect(cleanDetails).toHaveBeenCalledWith(mockDetails[0]);
		});

		it('should call props.addDetails with the clean data', async () => {
			const details = cleanDetails(mockDetails[0]);
			await wrapper.instance().getRestaurantDetails(mockDetails[0].id);
			expect(mockAddDetails).toHaveBeenCalledWith(details);
		});
	});

	describe('mapStateToProps', () => {
		it('should return an object with the right state', () => {
			const mockState = { details: mockDetails };
			const mappedProps = mapStateToProps(mockState);
			expect(mappedProps).toEqual({ details: mockDetails });
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch with an addDetails action', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = addDetails(mockDetails[0]);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.addDetails(mockDetails[0]);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});
