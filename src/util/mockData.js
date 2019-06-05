export const mockResult = {
	total: 8228,
	businesses: [
		{
			rating: 4,
			price: '$',
			phone: '+14152520800',
			id: 'E8RJkjfdcwgtyoPMjQ_Olg',
			alias: 'four-barrel-coffee-san-francisco',
			is_closed: false,
			categories: [
				{
					alias: 'coffee',
					title: 'Coffee & Tea'
				}
			],
			review_count: 1738,
			name: 'Four Barrel Coffee',
			url: 'https://www.yelp.com/biz/four-barrel-coffee-san-francisco',
			coordinates: {
				latitude: 37.7670169511878,
				longitude: -122.42184275
			},
			image_url: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
			location: {
				city: 'San Francisco',
				country: 'US',
				address2: '',
				address3: '',
				state: 'CA',
				address1: '375 Valencia St',
				zip_code: '94103'
			},
			distance: 1604.23,
			transactions: ['pickup', 'delivery']
		}
	],
	region: {
		center: {
			latitude: 37.767413217936834,
			longitude: -122.42820739746094
		}
	}
};

export const mockResults = [mockResult.businesses[0], mockResult.businesses[0], mockResult.businesses[0]];

export const mockDetails = [
	{
		id: 'WavvLdfdP6g8aZTtbBQHTw',
		alias: 'gary-danko-san-francisco',
		name: 'Gary Danko',
		image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/CAprIoeKQAYV9oUw9xBbmA/o.jpg',
		is_claimed: true,
		is_closed: false,
		url:
			'https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
		phone: '+14157492060',
		display_phone: '(415) 749-2060',
		review_count: 5382,
		categories: [
			{
				alias: 'newamerican',
				title: 'American (New)'
			},
			{
				alias: 'french',
				title: 'French'
			},
			{
				alias: 'wine_bars',
				title: 'Wine Bars'
			}
		],
		rating: 4.5,
		location: {
			address1: '800 N Point St',
			address2: '',
			address3: '',
			city: 'San Francisco',
			zip_code: '94109',
			country: 'US',
			state: 'CA',
			display_address: ['800 N Point St', 'San Francisco, CA 94109'],
			cross_streets: ''
		},
		coordinates: {
			latitude: 37.80587,
			longitude: -122.42058
		},
		photos: [
			'https://s3-media3.fl.yelpcdn.com/bphoto/CAprIoeKQAYV9oUw9xBbmA/o.jpg',
			'https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg',
			'https://s3-media2.fl.yelpcdn.com/bphoto/_dDCVo_vLpM79Y3mgyMiYg/o.jpg'
		],
		price: '$$$$',
		hours: [
			{
				open: [
					{
						is_overnight: false,
						start: '1730',
						end: '2200',
						day: 0
					},
					{
						is_overnight: false,
						start: '1730',
						end: '2200',
						day: 1
					},
					{
						is_overnight: false,
						start: '1730',
						end: '2200',
						day: 2
					},
					{
						is_overnight: false,
						start: '1730',
						end: '2200',
						day: 3
					},
					{
						is_overnight: false,
						start: '1730',
						end: '2200',
						day: 4
					},
					{
						is_overnight: false,
						start: '1730',
						end: '2200',
						day: 5
					},
					{
						is_overnight: false,
						start: '1730',
						end: '2200',
						day: 6
					}
				],
				hours_type: 'REGULAR',
				is_open_now: true
			}
		],
		transactions: []
	}
];

export const mockHistory = {
	push: (path, state = ['/dir']) => state.push(path)
};

export const mockSearchResult = {
	businesses: [
		{
			id: 'aghAlq5-6EqLZsD75fiG3w',
			alias: 'izu-denver',
			name: 'Izu',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/Neu9Xt_B9Xtzoua81u_F6A/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/izu-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 276,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				}
			],
			rating: 4.5,
			coordinates: {
				latitude: 39.73973,
				longitude: -104.96889
			},
			transactions: ['pickup', 'delivery'],
			price: '$$',
			location: {
				address1: '1528 E Colfax Ave',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80218',
				country: 'US',
				state: 'CO',
				display_address: ['1528 E Colfax Ave', 'Denver, CO 80218']
			},
			phone: '+13032847981',
			display_phone: '(303) 284-7981',
			distance: 482.8633017307323
		},
		{
			id: '8lKL5Bxt620aqh0ulDByIg',
			alias: 'sushi-den-denver',
			name: 'Sushi Den',
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/5eiwXYSiTKsOwoHP0G84GQ/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/sushi-den-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 1618,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'bars',
					title: 'Bars'
				}
			],
			rating: 4.5,
			coordinates: {
				latitude: 39.68962,
				longitude: -104.980763
			},
			transactions: [],
			price: '$$$',
			location: {
				address1: '1487 S Pearl St',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80210',
				country: 'US',
				state: 'CO',
				display_address: ['1487 S Pearl St', 'Denver, CO 80210']
			},
			phone: '+13037770826',
			display_phone: '(303) 777-0826',
			distance: 5182.987196490936
		},
		{
			id: 'pu_oTsfu4kFcmP2Xms_X_Q',
			alias: 'uncle-denver',
			name: 'Uncle',
			image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/cVM9OD3rFOKGE4G60TnUlQ/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/uncle-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 1151,
			categories: [
				{
					alias: 'asianfusion',
					title: 'Asian Fusion'
				},
				{
					alias: 'ramen',
					title: 'Ramen'
				},
				{
					alias: 'noodles',
					title: 'Noodles'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.7621349,
				longitude: -105.0133389
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '2215 W 32nd Ave',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80211',
				country: 'US',
				state: 'CO',
				display_address: ['2215 W 32nd Ave', 'Denver, CO 80211']
			},
			phone: '+13034333263',
			display_phone: '(303) 433-3263',
			distance: 4723.92674260023
		},
		{
			id: 'BKRLsUCryeR1JJtyGVWW_g',
			alias: 'blue-sushi-sake-grill-denver',
			name: 'Blue Sushi Sake Grill',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/ChBkyTy2cKgTCqSaPdd3UA/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/blue-sushi-sake-grill-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 878,
			categories: [
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'japanese',
					title: 'Japanese'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.751248413952,
				longitude: -105.000414848328
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '1616 16th St',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80202',
				country: 'US',
				state: 'CO',
				display_address: ['1616 16th St', 'Denver, CO 80202']
			},
			phone: '+13036403655',
			display_phone: '(303) 640-3655',
			distance: 3116.209280628799
		},
		{
			id: '_cG0lafbRYUaTIaEmeWBCA',
			alias: 'sushi-sasa-denver',
			name: 'Sushi Sasa',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/p24Us5oU2sW6OJGnVSZgww/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/sushi-sasa-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 741,
			categories: [
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'japanese',
					title: 'Japanese'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.7567432887556,
				longitude: -105.009436572794
			},
			transactions: ['pickup', 'delivery'],
			price: '$$$',
			location: {
				address1: '2401 15th St',
				address2: 'Ste 80',
				address3: '',
				city: 'Denver',
				zip_code: '80202',
				country: 'US',
				state: 'CO',
				display_address: ['2401 15th St', 'Ste 80', 'Denver, CO 80202']
			},
			phone: '+13034337272',
			display_phone: '(303) 433-7272',
			distance: 4098.066370257084
		},
		{
			id: 'sl7SPV1098Mi6K1yhqb1lw',
			alias: 'izakaya-den-denver-2',
			name: 'Izakaya Den',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/cYYlpku_zz7eVZfto78rhQ/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/izakaya-den-denver-2?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 399,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				}
			],
			rating: 4.5,
			coordinates: {
				latitude: 39.6895855,
				longitude: -104.9807808
			},
			transactions: [],
			price: '$$$',
			location: {
				address1: '1487 S Pearl St',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80210',
				country: 'US',
				state: 'CO',
				display_address: ['1487 S Pearl St', 'Denver, CO 80210']
			},
			phone: '+13037770691',
			display_phone: '(303) 777-0691',
			distance: 5187.029574842835
		},
		{
			id: '-Pet3i_gxwzw-YfXb3shhQ',
			alias: 'go-fish-denver',
			name: 'Go Fish',
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/ICEnRpk_BJjREi-ccKZO7g/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/go-fish-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 639,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'seafood',
					title: 'Seafood'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.7169422,
				longitude: -104.9880121
			},
			transactions: ['pickup', 'delivery'],
			price: '$$',
			location: {
				address1: '1 Broadway',
				address2: 'B108',
				address3: '',
				city: 'Denver',
				zip_code: '80203',
				country: 'US',
				state: 'CO',
				display_address: ['1 Broadway', 'B108', 'Denver, CO 80203']
			},
			phone: '+13037338881',
			display_phone: '(303) 733-8881',
			distance: 2564.7470506642817
		},
		{
			id: 'm3ifi6O7ntMta8102eVgow',
			alias: 'uchi-denver-2',
			name: 'Uchi',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/naQ4ccBcbSpn_NC8n00QUg/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/uchi-denver-2?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 217,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'seafood',
					title: 'Seafood'
				},
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				}
			],
			rating: 4.5,
			coordinates: {
				latitude: 39.7568,
				longitude: -104.98505
			},
			transactions: [],
			location: {
				address1: '2500 Lawrence St',
				address2: '',
				address3: null,
				city: 'Denver',
				zip_code: '80205',
				country: 'US',
				state: 'CO',
				display_address: ['2500 Lawrence St', 'Denver, CO 80205']
			},
			phone: '+13034441922',
			display_phone: '(303) 444-1922',
			distance: 2665.996167950465
		},
		{
			id: 'uQHA20detCZGZJCS4tQkGg',
			alias: 'domo-japanese-country-foods-restaurant-denver-4',
			name: 'Domo Japanese Country Foods Restaurant',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/NPXGmRzGzA-HPStMyfye3w/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/domo-japanese-country-foods-restaurant-denver-4?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 926,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				}
			],
			rating: 3.5,
			coordinates: {
				latitude: 39.7382404109869,
				longitude: -105.005424609665
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '1365 Osage St',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80204',
				country: 'US',
				state: 'CO',
				display_address: ['1365 Osage St', 'Denver, CO 80204']
			},
			phone: '+13035953666',
			display_phone: '(303) 595-3666',
			distance: 3023.213797005646
		},
		{
			id: 'ewCTNd0cUPMY32kD5opphw',
			alias: 'rolls-by-chubby-cattle-denver',
			name: 'Rolls by Chubby Cattle',
			image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/hOYRzOBnNzoOqrVBlpri8g/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/rolls-by-chubby-cattle-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 362,
			categories: [
				{
					alias: 'conveyorsushi',
					title: 'Conveyor Belt Sushi'
				},
				{
					alias: 'ramen',
					title: 'Ramen'
				},
				{
					alias: 'hotpot',
					title: 'Hot Pot'
				}
			],
			rating: 4.5,
			coordinates: {
				latitude: 39.71667,
				longitude: -104.98732
			},
			transactions: ['pickup', 'delivery'],
			price: '$$',
			location: {
				address1: '2 Broadway',
				address2: null,
				address3: '',
				city: 'Denver',
				zip_code: '80203',
				country: 'US',
				state: 'CO',
				display_address: ['2 Broadway', 'Denver, CO 80203']
			},
			phone: '+18888876557',
			display_phone: '(888) 887-6557',
			distance: 2542.4192011950176
		},
		{
			id: 'kTxz7DLRWCOGcTp8i4vJxA',
			alias: 'mizu-izakaya-denver-2',
			name: 'Mizu Izakaya',
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/F5E4G8VKAqt9Fhkde292sA/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/mizu-izakaya-denver-2?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 360,
			categories: [
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'izakaya',
					title: 'Izakaya'
				},
				{
					alias: 'ramen',
					title: 'Ramen'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.7591040251325,
				longitude: -105.010517541783
			},
			transactions: ['pickup', 'delivery', 'restaurant_reservation'],
			price: '$$',
			location: {
				address1: '1560 Boulder St',
				address2: null,
				address3: '',
				city: 'Denver',
				zip_code: '80211',
				country: 'US',
				state: 'CO',
				display_address: ['1560 Boulder St', 'Denver, CO 80211']
			},
			phone: '+17203727100',
			display_phone: '(720) 372-7100',
			distance: 4327.729375638054
		},
		{
			id: 'sk7LfHgtitNsQPtapYnKIA',
			alias: 'hasu-sushi-and-grill-denver',
			name: 'Hasu Sushi & Grill',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/RX6YJrGDrczsBdUZFxN9ag/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/hasu-sushi-and-grill-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 274,
			categories: [
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'japanese',
					title: 'Japanese'
				}
			],
			rating: 4.5,
			coordinates: {
				latitude: 39.7203730646383,
				longitude: -104.949478102284
			},
			transactions: ['pickup', 'delivery'],
			price: '$$',
			location: {
				address1: '250 Steele St',
				address2: 'Ste 104',
				address3: '',
				city: 'Denver',
				zip_code: '80206',
				country: 'US',
				state: 'CO',
				display_address: ['250 Steele St', 'Ste 104', 'Denver, CO 80206']
			},
			phone: '+13037229968',
			display_phone: '(303) 722-9968',
			distance: 2447.9458739418305
		},
		{
			id: 'iIDuGeoHrwUdtpX-xt-7Lw',
			alias: 'hapa-sushi-grill-and-sake-bar-lodo-denver',
			name: 'Hapa Sushi Grill & Sake Bar - Lodo',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/bau85G-PoactIj1FxrVFDA/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/hapa-sushi-grill-and-sake-bar-lodo-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 409,
			categories: [
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'hawaiian',
					title: 'Hawaiian'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.7497562049975,
				longitude: -104.999986149821
			},
			transactions: ['pickup', 'delivery'],
			price: '$$',
			location: {
				address1: '1514 Blake St',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80202',
				country: 'US',
				state: 'CO',
				display_address: ['1514 Blake St', 'Denver, CO 80202']
			},
			phone: '+17203545058',
			display_phone: '(720) 354-5058',
			distance: 2995.071919131895
		},
		{
			id: 'EyhsdMauMOdM5po6HzkxHQ',
			alias: 'bones-denver',
			name: 'Bones',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/uNeh_QLxtD9T9QlOr5eSjw/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/bones-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 589,
			categories: [
				{
					alias: 'asianfusion',
					title: 'Asian Fusion'
				},
				{
					alias: 'ramen',
					title: 'Ramen'
				},
				{
					alias: 'noodles',
					title: 'Noodles'
				}
			],
			rating: 3.5,
			coordinates: {
				latitude: 39.727448,
				longitude: -104.983805
			},
			transactions: ['pickup'],
			price: '$$',
			location: {
				address1: '701 N Grant St',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80203',
				country: 'US',
				state: 'CO',
				display_address: ['701 N Grant St', 'Denver, CO 80203']
			},
			phone: '+13038602929',
			display_phone: '(303) 860-2929',
			distance: 1466.6285783667245
		},
		{
			id: 'rJve8hI2yxJL9pykzIOQIw',
			alias: 'seras-ramen-enclave-denver-2',
			name: "Sera's Ramen Enclave",
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/HLj7rzO38_GBaCLHSoZ8wg/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/seras-ramen-enclave-denver-2?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 287,
			categories: [
				{
					alias: 'ramen',
					title: 'Ramen'
				},
				{
					alias: 'korean',
					title: 'Korean'
				},
				{
					alias: 'vietnamese',
					title: 'Vietnamese'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.76188,
				longitude: -105.03401
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '3472 W 32nd Ave',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80211',
				country: 'US',
				state: 'CO',
				display_address: ['3472 W 32nd Ave', 'Denver, CO 80211']
			},
			phone: '+13034552858',
			display_phone: '(303) 455-2858',
			distance: 6190.783542454265
		},
		{
			id: 'uwZYLfdWxni43MqfY6y7sw',
			alias: 'tokio-denver-3',
			name: 'Tokio',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/3zXHBxxEKYbtJ6Le4pu9nw/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/tokio-denver-3?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 354,
			categories: [
				{
					alias: 'ramen',
					title: 'Ramen'
				},
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'japacurry',
					title: 'Japanese Curry'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.7586101000912,
				longitude: -104.997435813492
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '2907 Huron St',
				address2: 'Unit 103',
				address3: '',
				city: 'Denver',
				zip_code: '80202',
				country: 'US',
				state: 'CO',
				display_address: ['2907 Huron St', 'Unit 103', 'Denver, CO 80202']
			},
			phone: '+17206392911',
			display_phone: '(720) 639-2911',
			distance: 3463.179955416658
		},
		{
			id: 'VbZvX20_xezi7wNW8n5YTw',
			alias: 'osaka-sushi-denver',
			name: 'Osaka Sushi',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/ZlqOQvZ3yJ5QpzFYnKDOLA/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/osaka-sushi-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 304,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'noodles',
					title: 'Noodles'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.703652956802,
				longitude: -104.94149270528
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '3940 E Exposition Ave',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80209',
				country: 'US',
				state: 'CO',
				display_address: ['3940 E Exposition Ave', 'Denver, CO 80209']
			},
			phone: '+13036989919',
			display_phone: '(303) 698-9919',
			distance: 4313.576420707833
		},
		{
			id: 'usebTAD75TB9M8mNgbp5zQ',
			alias: 'ototo-denver-3',
			name: 'Ototo',
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/sosuoY9M27GvEc96PWTpBA/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/ototo-denver-3?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 189,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'tapasmallplates',
					title: 'Tapas/Small Plates'
				}
			],
			rating: 4.5,
			coordinates: {
				latitude: 39.6892509460449,
				longitude: -104.98072052002
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '1501 S Pearl St',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80210',
				country: 'US',
				state: 'CO',
				display_address: ['1501 S Pearl St', 'Denver, CO 80210']
			},
			phone: '+13037332503',
			display_phone: '(303) 733-2503',
			distance: 5221.311684900257
		},
		{
			id: 'Lg2n67-mDSsvprMgY1eJ1A',
			alias: 'bamboo-sushi-denver-2',
			name: 'Bamboo Sushi',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/MnDlNGR0CVA7tSplscmFJw/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/bamboo-sushi-denver-2?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 155,
			categories: [
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'cocktailbars',
					title: 'Cocktail Bars'
				}
			],
			rating: 4.5,
			coordinates: {
				latitude: 39.76151,
				longitude: -105.01045
			},
			transactions: ['pickup', 'delivery'],
			price: '$$$',
			location: {
				address1: '2715 17th St',
				address2: 'Ste 102',
				address3: null,
				city: 'Denver',
				zip_code: '80211',
				country: 'US',
				state: 'CO',
				display_address: ['2715 17th St', 'Ste 102', 'Denver, CO 80211']
			},
			phone: '+13032846600',
			display_phone: '(303) 284-6600',
			distance: 4494.647303313506
		},
		{
			id: 'l6YIt2c4bx_-L-ai26LdNQ',
			alias: 'sushi-bay-17-denver',
			name: 'Sushi Bay 17',
			image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/1Vf0XEutGYIC5eT-qmbtOg/o.jpg',
			is_closed: false,
			url:
				'https://www.yelp.com/biz/sushi-bay-17-denver?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
			review_count: 272,
			categories: [
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				},
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'raw_food',
					title: 'Live/Raw Food'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 39.7430664,
				longitude: -104.9664946
			},
			transactions: ['pickup', 'delivery'],
			price: '$$',
			location: {
				address1: '1728 E 17th Ave',
				address2: '',
				address3: '',
				city: 'Denver',
				zip_code: '80218',
				country: 'US',
				state: 'CO',
				display_address: ['1728 E 17th Ave', 'Denver, CO 80218']
			},
			phone: '+13033211805',
			display_phone: '(303) 321-1805',
			distance: 897.8809971141609
		}
	],
	total: 90,
	region: {
		center: {
			longitude: -104.97024536132812,
			latitude: 39.73552421220229
		}
	}
};

export const mockReviews = [
	{
		id: '79FDWCwiuSWXlDxDsY0VJw',
		url:
			'https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&hrid=79FDWCwiuSWXlDxDsY0VJw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
		text:
			'I had a fabulous time at Gary Danko. I made my reservation two months in advance, through Open Table, for me and my wife. We got their a few minutes early...',
		rating: 5,
		time_created: '2019-05-29 22:34:26',
		user: {
			id: 'MJ8lq1t68qMGjOB5wE9o5w',
			profile_url: 'https://www.yelp.com/user_details?userid=MJ8lq1t68qMGjOB5wE9o5w',
			image_url: 'https://s3-media1.fl.yelpcdn.com/photo/yskvxP5B_6XY7Q-4HAsfGQ/o.jpg',
			name: 'William H.'
		}
	},
	{
		id: 'Ky__kOy56l11fALtqy3KFQ',
		url:
			'https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&hrid=Ky__kOy56l11fALtqy3KFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
		text:
			"Enough has been said about the food so I'll talk about seating. Some of the two-seater tables are in a pretty tight row. This is fine, but if you want a...",
		rating: 4,
		time_created: '2019-05-29 19:53:12',
		user: {
			id: 'FOjzV3WfKeRw6rtiFuNFzQ',
			profile_url: 'https://www.yelp.com/user_details?userid=FOjzV3WfKeRw6rtiFuNFzQ',
			image_url: 'https://s3-media4.fl.yelpcdn.com/photo/LwIpZRKI6BonwldkjYHMSw/o.jpg',
			name: 'Samantha W.'
		}
	},
	{
		id: 'ZaeIbjG0HjBFiGeNjeRtBQ',
		url:
			'https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=GSLYYM_QtEhMcQZmgQEI5Q&hrid=ZaeIbjG0HjBFiGeNjeRtBQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=GSLYYM_QtEhMcQZmgQEI5Q',
		text:
			'Excellent.   Excellent food, excellent cocktails, and excellent service.\n\nEverything was delicious.  A few standouts were the poached egg with veal, duck...',
		rating: 5,
		time_created: '2019-05-26 11:20:19',
		user: {
			id: 'cehAxLDp96ohUqlW7ePavg',
			profile_url: 'https://www.yelp.com/user_details?userid=cehAxLDp96ohUqlW7ePavg',
			image_url: 'https://s3-media1.fl.yelpcdn.com/photo/O2xXscRd0kcsAsSdmU24FA/o.jpg',
			name: 'Adriel W.'
		}
	}
];
