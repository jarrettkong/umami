import React from 'react';
import Home from '../../components/Home/Home';
import SearchResults from '../SearchResults/SearchResults';
import RestaurantPage from '../RestaurantPage/RestaurantPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" render={({ history }) => <Home history={history} />} />
				<Route exact path="/search/:query" render={({ match }) => <SearchResults query={match.params.query} />} />
				<Route exact path="/restaurant/:id" render={({ match }) => <RestaurantPage id={match.params.id} />} />
				<Route render={()=> <h2>There's nothing here :(</h2>} />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
