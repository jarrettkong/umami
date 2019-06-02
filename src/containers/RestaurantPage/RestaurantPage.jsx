import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import { connect } from 'react-redux';
import { addDetails, addReviews } from '../../actions';
import { cleanDetails, cleanReviews } from '../../util/cleaners';
import Yelp from '../../api/Yelp';
import StarRatings from 'react-star-ratings'

export class RestaurantPage extends Component {
	state = {
		loading: false,
		details: {},
		reviews: [],
		error: null
	};

	componentDidMount() {
		const details = this.props.details.find(r => r.id === this.props.id);
		if (!details) {
			this.setState({ loading: true }, async () => {
				await this.getRestaurantDetails(this.props.id);
				this.setState({ loading: false, error: null });
			});
		} else {
			const reviews = this.props.reviews.find(r => r.id === this.props.id);
			this.setState({ details, reviews: reviews.reviews });
		}
	}

	getRestaurantDetails = async id => {
		try {
			const detailsRes = await Yelp.get(`/businesses/${id}`);
			const reviewsRes = await Yelp.get(`/businesses/${id}/reviews`);
			const details = cleanDetails(detailsRes.data);
			const reviews = cleanReviews(reviewsRes.data.reviews, id);
			this.props.addDetails(details);
			this.props.addReviews(reviews);
			this.setState({ loading: false, details, reviews: reviews.reviews });
		} catch (error) {
			this.setState({ error });
		}
	};

	render() {
		const { details, reviews } = this.state;
		return !this.state.loading ? (
			<div>
				<h1>{details.name}</h1>
				<img src={details.image} alt={details.name} />
				<p>{details.price}</p>
				<p>{details.address}</p>
				<p>{details.city}</p>
				<p>{details.phone}</p>
				<a href={details.yelpUrl} rel="noopener noreferrer" target="_blank">
					Website
				</a>
					<StarRatings rating={details.rating} starDimension="25px" starRatedColor="#af0000" />
				<ul>
					{reviews.map(r => <li>"{r}"</li>)}
				</ul>
				<p>Based on {details.reviewCount} review(s)</p>
			</div>
		) : (
			<div className="loader-container">
				<Loader message="Loading restaurant data..." />
			</div>
		);
	}
}

export const mapStateToProps = state => ({
	details: state.details,
	reviews: state.reviews
});

export const mapDispatchToProps = dispatch => ({
	addDetails: details => dispatch(addDetails(details)),
	addReviews: reviews => dispatch(addReviews(reviews))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
