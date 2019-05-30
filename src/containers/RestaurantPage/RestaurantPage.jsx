import React, { Component } from 'react';
import Yelp from '../../api/Yelp';

class RestaurantPage extends Component {
	componentDidMount() {
		this.getRestaurantDetails(this.props.id);
	}

	getRestaurantDetails = async id => {
		try {
			const res = await Yelp.get(`/businesses/${id}`);
			console.log(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	render() {
		return <div />;
	}
}

export default RestaurantPage;
