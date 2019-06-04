import React from 'react';
import SimpleMap from './SimpleMap';
import { shallow } from 'enzyme';

describe('SimpleMap', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<SimpleMap lat="22.59328574" lng="-19.184782494" name="Joe Johnson" />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
