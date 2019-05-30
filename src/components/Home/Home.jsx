import React, { Component } from 'react';
import SearchForm from '../../containers/SearchForm/SearchForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Yelp from '../../api/Yelp';
import { addTrending } from '../../actions';
import RestaurantCard from '../../containers/RestaurantCard/RestaurantCard';

export class Home extends Component {
	state = {
		loading: false
	};

	componentDidMount() {
		if (!this.props.trending.length) {
			console.log('loading');
			this.setState({ loading: true }, async () => {
				await this.fetchHotRestaurants();
				this.setState({ loading: false });
			});
		}
	}

	fetchHotRestaurants = async () => {
		try {
			const res = await Yelp.get('/businesses/search', {
				params: {
					term: '',
					location: 'Denver',
					categories: 'japanese, All',
					attributes: 'hot_and_new'
				}
			});
			this.props.addTrending(res.data.businesses);
		} catch (err) {
			console.log(err.message);
		}
	};

	render() {
		const trending = this.props.trending.map(restaurant => {
			return (
				<Link to={`/restaurant/${restaurant.alias}`} key={restaurant.id}>
					<RestaurantCard info={restaurant} />
				</Link>
			);
		});
		return (
			<section>
				<h1>Umami</h1>
				<SearchForm history={this.props.history} />
				<output>{!this.state.loading ? trending : <h2>Loading....</h2>}</output>
			</section>
		);
	}
}

export const mapStateToProps = state => ({
	trending: state.trending
});

export const mapDispatchToProps = dispatch => ({
	addTrending: restaurants => dispatch(addTrending(restaurants))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
