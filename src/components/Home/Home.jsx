import React, { Component } from 'react';
import SearchForm from '../../containers/SearchForm/SearchForm';
import Loader from '../Loader/Loader';
import { connect } from 'react-redux';
import Yelp from '../../api/Yelp';
import { addTrending } from '../../actions';
import RestaurantCard from '../../containers/RestaurantCard/RestaurantCard';
import './Home.scss';

export class Home extends Component {
	state = {
		loading: false
	};

	componentDidMount() {
		if (!this.props.trending.length) {
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
			return <RestaurantCard info={restaurant} key={restaurant.id} />;
		});

		return (
			<section className="Home">
				<header className="Home-header">
					<h1>Umami</h1>
					<SearchForm history={this.props.history} />
				</header>
				<div className="Home-new-container">
					<h3>New and Hot</h3>
					{!this.state.loading ? (
						<output className="Home-output">{trending}</output>
					) : (
						<div className="Home-loader-container">
							<Loader message="Loading new and hot" />
						</div>
					)}
				</div>
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
