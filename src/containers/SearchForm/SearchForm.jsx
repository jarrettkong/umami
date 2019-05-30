import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class SearchForm extends Component {
	state = {
		query: '',
		redirect: false
	};

	searchApi = async e => {
		e.preventDefault();
		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={`/search/${this.state.query}`} />;
		}
		return (
			<form onSubmit={this.searchApi}>
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
