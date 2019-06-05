import { cleanDetails, cleanReviews } from './cleaners';
import { mockDetails, mockReviews } from './mockData';

describe('cleanDetails', () => {
	it('should return clean data', () => {
		const expected = {
			id: mockDetails[0].id,
			name: mockDetails[0].name,
			address: mockDetails[0].location.address1,
			city: `${mockDetails[0].location.city}, ${mockDetails[0].location.state}`,
			image: mockDetails[0].image_url,
			yelpUrl: mockDetails[0].url,
			phone: mockDetails[0].display_phone,
			rating: mockDetails[0].rating,
			reviewCount: mockDetails[0].review_count,
			categories: mockDetails[0].categories.map(c => c.title),
			coordinates: mockDetails[0].coordinates,
			photos: mockDetails[0].photos,
			price: mockDetails[0].price || 'No price information available',
			open: mockDetails[0].is_open_now
		};
		const result = cleanDetails(mockDetails[0]);
		expect(result).toEqual(expected);
	});
});

describe('cleanReviews', () => {
	it('should return an object with an id and reviews', () => {
		const result = cleanReviews(mockReviews);
		expect(result).toHaveProperty('id');
		expect(result).toHaveProperty('reviews');
	});

	it('should return an object with an id and reviews', () => {
		const expected = {
			rating: mockReviews[0].rating,
			name: mockReviews[0].user.name,
			text: mockReviews[0].text,
			date: mockReviews[0].time_created.slice(0, 10),
			url: mockReviews[0].url
		};
		const result = cleanReviews(mockReviews, mockDetails[0].id);
		expect(result.reviews[0]).toEqual(expected);
	});
});
