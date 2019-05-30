import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SearchResults extends Component {
	render() {
		const results = this.props.results.map(result => <h2>{result.name}</h2>);
		return <output>{results}</output>;
	}
}

export const mapStateToProps = state => ({
	results: state.results
});

export default connect(mapStateToProps)(SearchResults);
