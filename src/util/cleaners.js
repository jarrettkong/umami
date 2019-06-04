export const cleanDetails = details => {
	return {
		id: details.id,
		name: details.name,
		address: details.location.address1,
		city: `${details.location.city}, ${details.location.state}`,
		image: details.image_url,
		yelpUrl: details.url,
		phone: details.display_phone,
		rating: details.rating,
		reviewCount: details.review_count,
		categories: details.categories.map(c => c.title),
		coordinates: details.coordinates,
		photos: details.photos,
		price: details.price || 'No price information available'
	};
};

export const cleanReviews = (reviews, id) => {
	return {
		id,
		reviews: reviews.map(r => {
			return {
				rating: r.rating,
				name: r.user.name,
				text: r.text,
				date: r.time_created.slice(0, 10),
				url: r.url
			};
		})
	};
};
