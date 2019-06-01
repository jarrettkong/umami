import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import { connect } from 'react-redux';
import { addDetails } from '../../actions';
import { cleanDetails } from '../../util/cleaners';
import Yelp from '../../api/Yelp';

export class RestaurantPage extends Component {
	state = {
		loading: false,
		details: {},
		error: null
	};

	componentDidMount() {
		const existingInfo = this.props.details.find(r => r.id === this.props.id);
		if (!existingInfo) {
			this.setState({ loading: true }, async () => {
				await this.getRestaurantDetails(this.props.id);
				this.setState({ loading: false, error: null });
			});
		} else {
			this.setState({ details: existingInfo });
		}
	}

	getRestaurantDetails = async id => {
		try {
			const res = await Yelp.get(`/businesses/${id}`);
			const details = cleanDetails(res.data);
			this.props.addDetails(details);
			this.setState({ loading: false, details });
		} catch (error) {
			this.setState({ error });
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
			<div className="loader-container">
				<Loader message="Loading restaurant data..." />
			</div>
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
