import React, { Fragment } from 'react';
import './Loader.scss';

const Loader = (props) => {
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
      <h3>{props.message}</h3>
		</Fragment>
	);
};

export default Loader;
