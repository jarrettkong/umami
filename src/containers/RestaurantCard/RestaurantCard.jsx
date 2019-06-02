import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import './RestaurantCard.scss';

const RestaurantCard = props => {
	const { info } = props;
	return (
		<Link to={`/restaurant/${info.id}`} style={styleLink()}>
			<div className="RestaurantCard">
				<img src={info.image_url} alt="" />
				<div className="RestaurantCard-info">
					<h2>{info.name}</h2>
					<p><StarRatings rating={info.rating} starDimension="25px" starRatedColor="#af0000" /></p>
					<p>Based on {info.review_count} review(s)</p>
					<p>{info.location.address1}</p>
					<p>
						{info.location.city}, {info.location.state}
					</p>
				</div>
			</div>
		</Link>
	);
};

export const styleLink = () => {
	return {
		textDecoration: 'none',
		color: 'inherit'
	};
};

export default RestaurantCard;
