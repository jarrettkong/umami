import React, { Component } from 'react';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { addSearchResults } from '../../actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Yelp from '../../api/Yelp';
import { connect } from 'react-redux';

export class SearchResults extends Component {
	state = {
		loading: false
	};

	componentDidMount() {
		this.setState({ loading: true }, async () => {
			await this.searchApi();
			this.setState({ loading: false });
		});
	}

	searchApi = async () => {
		try {
			const res = await Yelp.get('/businesses/search', {
				params: {
					term: this.props.query,
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
		const results = this.props.results.map(result => {
			return <RestaurantCard key={result.id} info={result} />;
		});

		return !this.state.loading ? (
			<output>
				<Link to="/">Return Home</Link>
				{results || <h1>Your search did not match any results :(</h1>}
			</output>
		) : (
			<h1>Loading...</h1>
		);
	}
}

SearchResults.propTypes = {
	results: PropTypes.array
};

export const mapStateToProps = state => ({
	results: state.results
});

export const mapDispatchToProps = dispatch => ({
	addSearchResults: results => dispatch(addSearchResults(results))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
