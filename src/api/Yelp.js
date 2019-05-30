import axios from 'axios';

const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;

export default axios.create({
	baseURL: process.env.REACT_APP_YELP_BASE_URL,
	headers: {
		Authorization: `Bearer ${YELP_API_KEY}`
	}
});
