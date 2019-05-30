import React, { Component } from 'react';

export class SearchForm extends Component {
	state = {
		input: ''
	};

	render() {
		return (
			<form>
				<input type="text" value={this.state.input} onChange={e => this.setState({ input: e.target.value })} />
				<input type="submit" value="Search Umami" />
			</form>
		);
	}
}

export default SearchForm;
