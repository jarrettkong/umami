import React, { Component } from 'react';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { addSearchResults } from '../../actions';
import PropTypes from 'prop-types';
import Yelp from '../../api/Yelp';
import { connect } from 'react-redux';

export class SearchResults extends Component {
	async componentDidMount() {
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
	}
	render() {
		const results = this.props.results.map(result => <RestaurantCard key={result.id} info={result} />);
		return <output>{results}</output>;
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
