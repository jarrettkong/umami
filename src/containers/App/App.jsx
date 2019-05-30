import React from 'react';
import Home from '../../components/Home/Home';
import SearchResults from '../SearchResults/SearchResults';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/search/:query" render={({ match }) => <SearchResults query={match.params.query} />} />
		</Switch>
	);
}

export default App;
