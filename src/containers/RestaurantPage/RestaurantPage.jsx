import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDetails } from '../../actions';
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
		const details = this.props.details.find(r => r.id === this.props.id);
		if (!details) {
			this.setState({ loading: true }, async () => {
				try {
					const res = await Yelp.get(`/businesses/${id}`);
					this.props.addDetails(res.data);
					this.setState({ loading: false, details: res.data });
				} catch (err) {
					console.log(err.message);
				}
			});
		}
	};

	render() {
		const { details } = this.state;
		return !this.state.loading ? (
			<div>
				<h1>{details.name}</h1>
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
