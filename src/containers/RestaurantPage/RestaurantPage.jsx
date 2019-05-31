import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDetails } from '../../actions';
import { cleanDetails } from '../../util/cleaners';
import Yelp from '../../api/Yelp';

class RestaurantPage extends Component {
	state = {
		loading: false,
		details: {}
	};
	componentDidMount() {
		this.getRestaurantDetails(this.props.id);
	}

	getRestaurantDetails = id => {
		const existingInfo = this.props.details.find(r => r.id === this.props.id);
		if (!existingInfo) {
			this.setState({ loading: true }, async () => {
				try {
					const res = await Yelp.get(`/businesses/${id}`);
					const details = cleanDetails(res.data);
					this.props.addDetails(details);
					this.setState({ loading: false, details });
				} catch (err) {
					console.log(err.message);
				}
			});
		} else {
			this.setState({ details: existingInfo });
		}
	};

	render() {
		const { details } = this.state;
		return !this.state.loading ? (
			<div>
				<h1>{details.name}</h1>
				<img src={details.image} alt={`${details.name} `} />
				<p>{details.price}</p>
				<p>{details.address}</p>
				<p>{details.city}</p>
				<p>{details.phone}</p>
				<a href={details.yelpUrl} rel="noopener noreferrer" target="_blank">
					Website
				</a>
				<p>{details.rating}</p>
				<p>{details.reviewCount}</p>
			</div>
		) : (
			<h1>Loading...</h1>
		);
	}
}

export const mapStateToProps = state => ({
	details: state.details
});

export const mapDispatchToProps = dispatch => ({
	addDetails: details => dispatch(addDetails(details))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
