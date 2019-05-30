import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchForm extends Component {
	state = {
		query: '',
	};

	redirect = async e => {
		e.preventDefault();
		this.state.query && this.props.history.push(`/search/${this.state.query}`)
	};

	render() {
		return (
			<form onSubmit={this.redirect}>
				<input type="text" value={this.state.query} onChange={e => this.setState({ query: e.target.value })} />
				<input type="submit" value="Search Umami" />
			</form>
		);
	}
}

SearchForm.propTypes = {
	addSearchResults: PropTypes.func
};

export default SearchForm;
