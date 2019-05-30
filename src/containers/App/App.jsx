import React from 'react';
import Home from '../../components/Home/Home';
import SearchResults from '../SearchResults/SearchResults';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Switch>
			<Route exact path="/" render={({ history }) => <Home history={history} />} />
			<Route exact path="/search/:query" render={({ match }) => <SearchResults query={match.params.query} />} />
			<Route exact path="/restaurant/:alias" render={({ match }) => <SearchResults alias={match.params.alias} />} />
		</Switch>
	);
}

export default App;
