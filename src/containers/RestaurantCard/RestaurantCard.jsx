import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = props => {
	const { info } = props;
	return (
		<Link to={`/restaurant/${info.id}`}>
			<div style={{ border: '1px solid red' }}>
				<h2>{info.name}</h2>
				<p>{info.location.address1}</p>
			</div>
		</Link>
	);
};

export default RestaurantCard;
