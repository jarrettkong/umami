import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';
import { mockHistory } from '../../util/mockData';

describe('SearchForm', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<SearchForm history={mockHistory} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call redirect on form submit', () => {
		const mockEvent = { preventDefault: () => {} };
		jest.spyOn(mockEvent, 'preventDefault');
		wrapper.find('.SearchForm').simulate('submit', mockEvent);
		expect(mockEvent.preventDefault).toHaveBeenCalled();
	});

	it('should set state when information is input', () => {
		const mockEvent = { target: { value: 'new query' } };
		wrapper.find('.SearchForm-query-input').simulate('change', mockEvent);
		expect(wrapper.state('query')).toEqual(mockEvent.target.value);
	});

	describe('redirect', () => {
		it('should not call props.history if there is no query term', () => {
			jest.spyOn(mockHistory, 'push');
			wrapper.instance().redirect({ preventDefault: () => {} });
			expect(mockHistory.push).not.toHaveBeenCalled();
		});

		it('should call props.history if there is a query term', () => {
			jest.spyOn(mockHistory, 'push');
			wrapper.setState({ query: 'Hello' });
			wrapper.instance().redirect({ preventDefault: () => {} });
			expect(mockHistory.push).toHaveBeenCalledWith(`/search/${wrapper.state('query')}`);
		});
	});
});
