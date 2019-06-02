import React from 'react';
import { NavLink } from 'react-router-dom';
import './_Header.scss';

const Header = () => {
	return (
		<nav className="Header">
			<div className="Header-container">
				<NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
					<h1 className="Header-logo">Umami</h1>
				</NavLink>
			</div>
			<div className="Header-container">
				<a href="/" className="Header-button signup-button" role="button">
					Sign Up
				</a>
				<a href="/" className="Header-button login-button" role="button">
					Login
				</a>
			</div>
		</nav>
	);
};

export default Header;
