import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.scss';

const RestaurantCard = props => {
	const { info } = props;
	return (
		<Link to={`/restaurant/${info.id}`} style={{ textDecoration: 'none' }}>
			<div className="RestaurantCard">
				<img src={info.image_url} alt="" />
				<div className="RestaurantCard-info">
					<h2>{info.name}</h2>
					<p>{info.location.address1}</p>
					<p>
						{info.location.city}, {info.location.state}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default RestaurantCard;
