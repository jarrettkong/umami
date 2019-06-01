import React from 'react';
import RestaurantCard, { styleLink } from './RestaurantCard';
import { mockResult } from '../../util/mockData';
import { shallow } from 'enzyme';

describe('RestaurantCard', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<RestaurantCard info={mockResult.businesses[0]} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('styleLink', () => {
		it('should return the styles', () => {
			const expected = {
				textDecoration: 'none',
				color: 'inherit'
			};
			expect(styleLink()).toEqual(expected);
		});
	});
});
