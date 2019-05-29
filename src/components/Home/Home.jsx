import React, { Component } from 'react';
import SearchForm from '../../containers/SearchForm/SearchForm'

export class Home extends Component {
	render() {
		return (
			<section>
				<h1>Umami</h1>
        <SearchForm />
			</section>
		);
	}
}

export default Home;
