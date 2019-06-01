import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.scss';

export class SearchForm extends Component {
	state = {
		query: ''
	};

	redirect = e => {
		e.preventDefault();
		this.state.query && this.props.history.push(`/search/${this.state.query}`);
	};

	render() {
		return (
			<form className="SearchForm" onSubmit={this.redirect}>
				<input
					className="SearchForm-query-input"
					type="text"
					value={this.state.query}
					onChange={e => this.setState({ query: e.target.value })}
					placeholder="Find a place to eat tonight"
				/>
				<input type="submit" value="Search Umami" />
			</form>
		);
	}
}

SearchForm.propTypes = {
	addSearchResults: PropTypes.func
};

export default SearchForm;
