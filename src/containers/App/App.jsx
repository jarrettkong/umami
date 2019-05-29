import React from 'react';
import Home from '../../components/Home/Home'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
		</Switch>
	);
}

export default App;
