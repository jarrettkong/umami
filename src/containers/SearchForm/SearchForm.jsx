import React, { Component } from 'react';
import { addSearchResults } from '../../actions';
import { connect } from 'react-redux';
import Yelp from '../../api/Yelp';

export class SearchForm extends Component {
	state = {
		term: ''
	};

	searchApi = async e => {
		e.preventDefault();
		try {
			const res = await Yelp.get('/businesses/search', {
				params: {
					term: this.state.term,
					location: 'Denver',
					categories: 'japanese, All'
				}
			});
			this.props.addSearchResults(res.data.businesses);
		} catch (err) {
			console.log(err.message);
		}
	};

	render() {
		return (
			<form onSubmit={this.searchApi}>
				<input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
				<input type="submit" value="Search Umami" />
			</form>
		);
	}
}

export const mapDispatchToProps = dispatch => ({
	addSearchResults: results => dispatch(addSearchResults(results))
});

export default connect(null, mapDispatchToProps)(SearchForm);
