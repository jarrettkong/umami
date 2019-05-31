import React, { Fragment } from 'react';
import './Loader.scss';

const Loader = props => {
	return (
		<Fragment>
			<div class="lds-default">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
			<h4>{props.message}</h4>
		</Fragment>
	);
};

export default Loader;
