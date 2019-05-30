import React, { Component } from 'react';
import SearchForm from '../../containers/SearchForm/SearchForm'
import SearchResults from '../../containers/SearchResults/SearchResults';

export class Home extends Component {
	render() {
		return (
			<section>
				<h1>Umami</h1>
        <SearchForm />
				<SearchResults />
			</section>
		);
	}
}

export default Home;
