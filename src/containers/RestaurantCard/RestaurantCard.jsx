import React from 'react';

const RestaurantCard = props => {
	const { info } = props;
	return (
		<div style={{ border: '1px solid red' }}>
			<h2>{info.name}</h2>
      <p>{info.location.address1}</p>
		</div>
	);
};

export default RestaurantCard;
