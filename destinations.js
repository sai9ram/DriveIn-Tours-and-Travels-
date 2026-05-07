const destinations = [
    // International
    {
        id: 'bali',
        name: 'Bali Islands',
        country: 'Indonesia',
        price: '₹49,999',
        duration: '6 Days / 5 Nights',
        image: 'Bali Escape.jpg',
        category: 'international',
        tags: ['Trending', 'Hot']
    },
    {
        id: 'dubai',
        name: 'Dubai (UAE)',
        country: 'Middle East',
        price: '₹45,999',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Skyline']
    },
    {
        id: 'switzerland',
        name: 'Swiss Alps (Europe)',
        country: 'Europe',
        price: '₹1,85,000',
        duration: '8 Days / 7 Nights',
        image: 'Swiss Alps.jpg',
        category: 'international',
        tags: ['Luxury']
    },
    {
        id: 'uzbekistan',
        name: 'Uzbekistan Heritage',
        country: 'Uzbekistan',
        price: '₹65,000',
        duration: '6 Days / 5 Nights',
        image: 'https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Culture']
    },
    {
        id: 'kazakhstan',
        name: 'Almaty Wonders',
        country: 'Kazakhstan',
        price: '₹55,000',
        duration: '5 Days / 4 Nights',
        image: 'Almaty Wonders.jpg',
        category: 'international',
        tags: ['Nature']
    },
    {
        id: 'usa',
        name: 'USA East Coast',
        country: 'USA',
        price: '₹2,50,000',
        duration: '12 Days / 11 Nights',
        image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Dream']
    },
    {
        id: 'turkey',
        name: 'Turkish Delights',
        country: 'Turkey',
        price: '₹95,000',
        duration: '7 Days / 6 Nights',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Historic']
    },
    {
        id: 'maldives',
        name: 'Maldives Retreat',
        country: 'Maldives',
        price: '₹85,000',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Honeymoon']
    },
    {
        id: 'russia',
        name: 'Imperial Russia',
        country: 'Russia',
        price: '₹1,10,000',
        duration: '8 Days / 7 Nights',
        image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Grand']
    },
    {
        id: 'malaysia',
        name: 'Truly Malaysia',
        country: 'Malaysia',
        price: '₹45,000',
        duration: '5 Days / 4 Nights',
        image: 'Malaysia.webp',
        category: 'international',
        tags: ['Asia']
    },
    {
        id: 'mauritius',
        name: 'Mauritius Shores',
        country: 'Mauritius',
        price: '₹1,05,000',
        duration: '7 Days / 6 Nights',
        image: 'Mauritius Shores.jpg',
        category: 'international',
        tags: ['Beaches']
    },
    {
        id: 'thailand',
        name: 'Amazing Thailand',
        country: 'Thailand',
        price: '₹35,000',
        duration: '5 Days / 4 Nights',
        image: 'Amazing Thailand.webp',
        category: 'international',
        tags: ['Budget']
    },
    {
        id: 'africa',
        name: 'African Safaris',
        country: 'Africa',
        price: '₹2,20,000',
        duration: '9 Days / 8 Nights',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Wildlife']
    },
    {
        id: 'hong-kong',
        name: 'Hong Kong Skyline',
        country: 'Hong Kong',
        price: '₹60,000',
        duration: '5 Days / 4 Nights',
        image: 'Hong Kong Skyline.jpg',
        category: 'international',
        tags: ['City']
    },
    {
        id: 'singapore',
        name: 'Garden City',
        country: 'Singapore',
        price: '₹55,000',
        duration: '5 Days / 4 Nights',
        image: 'Singapore City.jpg',
        category: 'international',
        tags: ['Modern']
    },
    {
        id: 'greece',
        name: 'Greek Odyssey',
        country: 'Greece',
        price: '₹1,45,000',
        duration: '7 Days / 6 Nights',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Islands']
    },
    {
        id: 'laos',
        name: 'Laos Serenity',
        country: 'Laos',
        price: '₹40,000',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Peaceful']
    },
    {
        id: 'new-zealand',
        name: 'Kiwi Adventure',
        country: 'New Zealand',
        price: '₹2,80,000',
        duration: '10 Days / 9 Nights',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Scenic']
    },
    {
        id: 'azerbaijan',
        name: 'Baku Nights',
        country: 'Azerbaijan',
        price: '₹50,000',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Euro-Asia']
    },
    {
        id: 'cambodia',
        name: 'Angkor Secrets',
        country: 'Cambodia',
        price: '₹45,000',
        duration: '6 Days / 5 Nights',
        image: 'Angkor Secretswebp.webp',
        category: 'international',
        tags: ['Ancient']
    },
    {
        id: 'australia',
        name: 'Sydney & Beyond',
        country: 'Australia',
        price: '₹2,40,000',
        duration: '11 Days / 10 Nights',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Outback']
    },
    {
        id: 'nepal',
        name: 'Himalayan High',
        country: 'Nepal',
        price: '₹25,000',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Mountains']
    },
    {
        id: 'vietnam',
        name: 'Vietnam Trails',
        country: 'Vietnam',
        price: '₹45,000',
        duration: '6 Days / 5 Nights',
        image: 'Vietnam Magic.jpg',
        category: 'international',
        tags: ['Vibrant']
    },
    {
        id: 'sri-lanka',
        name: 'Island Pearl',
        country: 'Sri Lanka',
        price: '₹40,000',
        duration: '6 Days / 5 Nights',
        image: 'https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Tropical']
    },
    {
        id: 'philippines',
        name: 'Philippine Lagoons',
        country: 'Philippines',
        price: '₹55,000',
        duration: '6 Days / 5 Nights',
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80',
        category: 'international',
        tags: ['Hidden']
    },

    // Domestic — Short / Budget Tours
    {
        id: 'coorg-august',
        name: "Coorg's Aromatic August",
        country: 'India',
        price: '₹11,999',
        duration: '3 Days / 2 Nights',
        image: 'Coorg\'s Aromatic August.jpg',
        category: 'domestic',
        subCategory: 'short',
        tags: ['Budget', 'Nature']
    },
    {
        id: 'kerala-munnar',
        name: "Kerala's Green Freedom",
        country: 'India',
        price: '₹9,999',
        duration: '3 Days / 2 Nights',
        image: 'Munnar, Thekkady & Alleppey.jpg',
        category: 'domestic',
        subCategory: 'short',
        tags: ['Budget', 'Hills']
    },
    {
        id: 'ooty-august',
        name: "Ooty's August Bloom",
        country: 'India',
        price: '₹11,999',
        duration: '3 Days / 2 Nights',
        image: 'ooty.jpg',
        category: 'domestic',
        subCategory: 'short',
        tags: ['Budget', 'Hills']
    },

    // Domestic — Standard Indian Packages
    {
        id: 'goa-standard',
        name: 'Goa: North Excites & South Soothes',
        country: 'India',
        price: '₹16,499',
        duration: '4 Days / 3 Nights',
        image: 'goa.webp',
        category: 'domestic',
        subCategory: 'standard',
        tags: ['Beaches', 'Popular']
    },
    {
        id: 'kerala-standard',
        name: "Kerala's Green Heart & Flowing Soul",
        country: 'India',
        price: '₹18,999',
        duration: '4 Days / 3 Nights',
        image: 'kerala-backwaters.jpg',
        category: 'domestic',
        subCategory: 'standard',
        tags: ['Nature', 'Popular']
    },
    {
        id: 'madurai-rameswaram',
        name: 'Temples & Tides: Madurai & Rameswaram',
        country: 'India',
        price: '₹11,999',
        duration: '4 Days / 3 Nights',
        image: 'Tamil Nadu Most Famous Temples Tour.png',
        category: 'domestic',
        subCategory: 'standard',
        tags: ['Spiritual', 'Heritage']
    },
    {
        id: 'karnataka-coastal',
        name: 'Karnataka Coastal (Gokarna & Murudeshwar)',
        country: 'India',
        price: '₹15,999',
        duration: '4 Days / 3 Nights',
        image: 'Gokarna & Murudeshwar.jpg',
        category: 'domestic',
        subCategory: 'standard',
        tags: ['Beaches', 'Spiritual']
    },

    // Domestic — Hill & Nature Packages
    {
        id: 'ooty-kodaikanal',
        name: 'Ooty & Kodaikanal',
        country: 'India',
        price: '₹19,999',
        duration: '5 Days / 4 Nights',
        image: 'Kodaikanal1.webp',
        category: 'domestic',
        subCategory: 'hill',
        tags: ['Hills', 'Nature']
    },
    {
        id: 'coorg-chikkamagalur',
        name: 'Coorg & Chikkamagalur',
        country: 'India',
        price: '₹28,499',
        duration: '5 Days / 4 Nights',
        image: 'Chikkamagalur.jpg',
        category: 'domestic',
        subCategory: 'hill',
        tags: ['Hills', 'Nature']
    },
    {
        id: 'munnar-thekkady-alleppey',
        name: 'Munnar, Thekkady & Alleppey',
        country: 'India',
        price: '₹17,999',
        duration: '5 Days / 4 Nights',
        image: 'Munnar, Thekkady & Alleppey.jpg',
        category: 'domestic',
        subCategory: 'hill',
        tags: ['Backwaters', 'Hills']
    },

    // Domestic — Heritage / Cultural Tours
    {
        id: 'golden-triangle-budget',
        name: 'Delhi–Agra–Jaipur (Golden Triangle)',
        country: 'India',
        price: '₹15,499',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        category: 'domestic',
        subCategory: 'heritage',
        tags: ['Heritage', 'Popular']
    },
    {
        id: 'golden-triangle-cultural',
        name: 'Cultural Capitals Golden Triangle',
        country: 'India',
        price: '₹25,499',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        category: 'domestic',
        subCategory: 'heritage',
        tags: ['Heritage', 'Culture']
    },
    {
        id: 'rajasthan-regal',
        name: 'Rajasthan Regal Journey',
        country: 'India',
        price: '₹17,999',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        category: 'domestic',
        subCategory: 'heritage',
        tags: ['Heritage', 'Rajasthan']
    },
    {
        id: 'rajasthan-royal',
        name: 'Royal Rajasthan Experience',
        country: 'India',
        price: '₹24,499',
        duration: '5 Days / 4 Nights',
        image: 'Royal Rajasthan Experiencer.webp',
        category: 'domestic',
        subCategory: 'heritage',
        tags: ['Rajasthan', 'Luxury']
    },
    {
        id: 'odisha-triangle',
        name: 'Odisha Golden Triangle',
        country: 'India',
        price: '₹14,999',
        duration: '4 Days / 3 Nights',
        image: 'Odisha Golden Triangle.webp',
        category: 'domestic',
        subCategory: 'heritage',
        tags: ['Heritage', 'Spiritual']
    },

    // Domestic — Premium Indian Packages
    {
        id: 'vadodara-premium',
        name: 'Vadodara Premium Tour',
        country: 'India',
        price: '₹26,907',
        duration: '5 Days / 4 Nights',
        image: 'Vadodara.jpg',
        category: 'domestic',
        subCategory: 'premium',
        tags: ['Premium', 'Culture']
    },
    {
        id: 'himachal-golden-triangle',
        name: 'Himachal + Golden Triangle',
        country: 'India',
        price: '₹48,759',
        duration: '10 Days / 9 Nights',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        category: 'domestic',
        subCategory: 'premium',
        tags: ['Premium', 'Mountains']
    },
    {
        id: 'kochi-munnar-luxury',
        name: 'Luxury Kochi–Munnar–Alleppey',
        country: 'India',
        price: '₹24,999',
        duration: '5 Days / 4 Nights',
        image: 'Kochi–Munnar–Alleppey.jpg',
        category: 'domestic',
        subCategory: 'premium',
        tags: ['Premium', 'Luxury']
    },
    {
        id: 'munnar-thekkady-luxury',
        name: 'Munnar & Thekkady Luxury',
        country: 'India',
        price: '₹19,999',
        duration: '4 Days / 3 Nights',
        image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&w=800&q=80',
        category: 'domestic',
        subCategory: 'premium',
        tags: ['Premium', 'Hills']
    },
    // Tirupati Packages
    {
        id: 'tirupati-local',
        name: 'Tirupati – Tirumala Temple Tour',
        country: 'India',
        price: 'Call for Price',
        duration: '1 Day',
        image: 'Tirupati - Tirumala Taxi Package.png',
        category: 'tirupati',
        subCategory: 'spiritual',
        tags: ['Darshan', '1 Day', 'Popular']
    },
    {
        id: 'tirupati-kalahasti',
        name: 'Tirupati to Srikalahasti',
        country: 'India',
        price: 'Call for Price',
        duration: '1 Day',
        image: 'Tirupati to Kalahasti Taxi Package.png',
        category: 'tirupati',
        subCategory: 'spiritual',
        tags: ['Pilgrimage', '1 Day', 'Bestseller']
    },
    {
        id: 'tirupati-kanipakam',
        name: 'Tirupati to Kanipakam',
        country: 'India',
        price: 'Call for Price',
        duration: '1 Day',
        image: 'Tirupati to Kanipakam Taxi Package.png',
        category: 'tirupati',
        subCategory: 'spiritual',
        tags: ['Temple', '1 Day', 'Quick Trip']
    },
    {
        id: 'tirupati-arunachalam',
        name: 'Tirupati to Arunachalam',
        country: 'India',
        price: 'Call for Price',
        duration: '1 Day',
        image: 'Tirupati to Arunachalam Taxi Package.png',
        category: 'tirupati',
        subCategory: 'spiritual',
        tags: ['Shiva Temple', '1 Day', 'Sacred']
    },
    {
        id: 'tirupati-kanchipuram',
        name: 'Tirupati to Kanchipuram',
        country: 'India',
        price: 'Call for Price',
        duration: '1 Day',
        image: 'Tirupati to Kanchipram Taxi Package.png',
        category: 'tirupati',
        subCategory: 'spiritual',
        tags: ['Silk City', '1 Day', 'Heritage']
    },
    {
        id: 'tirupati-golden-temple',
        name: 'Tirupati to Golden Temple',
        country: 'India',
        price: 'Call for Price',
        duration: '1 Day',
        image: 'Tirupati to Golden Temple Taxi Package.png',
        category: 'tirupati',
        subCategory: 'spiritual',
        tags: ['Golden', '1 Day', 'Must Visit']
    },
    {
        id: 'tirupati-panchalinga',
        name: 'Panchalinga Darshan Special',
        country: 'India',
        price: 'Call for Price',
        duration: 'Special',
        image: 'Panchalinga Darshan Special Package.png',
        category: 'tirupati',
        subCategory: 'spiritual',
        tags: ['5 Temples', 'Special', 'Exclusive']
    },
    {
        id: 'tirupati-chennai',
        name: 'Chennai City Tour',
        country: 'India',
        price: 'Call for Price',
        duration: '1 Day',
        image: 'Chennai Tour Package.png',
        category: 'tirupati',
        subCategory: 'multistate',
        tags: ['Chennai', '1 Day', 'City Tour']
    },
    {
        id: 'tirupati-mahabalipuram',
        name: 'Tirupati to Mahabalipuram',
        country: 'India',
        price: 'Call for Price',
        duration: '1 Day',
        image: 'Tirupati to Mahabalipuram Taxi Package.png',
        category: 'tirupati',
        subCategory: 'multistate',
        tags: ['UNESCO Site', '1 Day', 'Heritage']
    },
    {
        id: 'tirupati-puducherry',
        name: 'Special Puducherry Trip',
        country: 'India',
        price: 'Call for Price',
        duration: '1–2 Days',
        image: 'Special Puducherry Trip Package.png',
        category: 'tirupati',
        subCategory: 'multistate',
        tags: ['Pondicherry', '1–2 Days', 'French Touch']
    },
    {
        id: 'tirupati-rameswaram-combo',
        name: 'Kanipakam – Rameswaram – Kanchipuram',
        country: 'India',
        price: 'Call for Price',
        duration: '2–3 Days',
        image: 'Kanipakam – Rameswaram – Kanchipuram Trip.png',
        category: 'tirupati',
        subCategory: 'multistate',
        tags: ['3 Destinations', '2–3 Days', 'Pilgrimage Trail']
    },
    {
        id: 'tirupati-south-grand',
        name: 'Tirupati – Madurai – Rameswaram – Kanyakumari',
        country: 'India',
        price: 'Call for Price',
        duration: '4–5 Days',
        image: 'Tirupati – Madurai – Rameswaram – Kanyakumari Pilgrimage.png',
        category: 'tirupati',
        subCategory: 'multistate',
        tags: ['4 Cities', '4–5 Days', 'Grand Tour']
    },
    {
        id: 'tirupati-hyderabad',
        name: 'Tirupati – Srisailam – Hyderabad',
        country: 'India',
        price: 'Call for Price',
        duration: '2–3 Days',
        image: 'Tirupati – Srisailam – Hyderabad Tour.png',
        category: 'tirupati',
        subCategory: 'multistate',
        tags: ['AP + TS', '2–3 Days', 'Cross State']
    },
    {
        id: 'tirupati-tn-grand',
        name: 'Tamil Nadu Famous Temples Tour',
        country: 'India',
        price: 'Call for Price',
        duration: '5–6 Days',
        image: 'Tamil Nadu Most Famous Temples Tour.png',
        category: 'tirupati',
        subCategory: 'multistate',
        tags: ['TN Temples', '5–6 Days', 'Grand Pilgrimage']
    }
];
