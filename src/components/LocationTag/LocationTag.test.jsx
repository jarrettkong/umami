import React from 'react';
import LocationTag from './LocationTag';
import { shallow } from 'enzyme';

describe('LocationTag', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<LocationTag name="Hello World" />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
