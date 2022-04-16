const REVIEWS_DATA = [
	{
		reviewerAvatar: './assets/profileOne.jpg',
		reviewerName: 'alexa',
		reviewerDesignation: 'UI/UX',
		reviews:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?',
	},

	{
		reviewerAvatar: './assets/profileTwo.webp',
		reviewerName: 'Dorson',
		reviewerDesignation: 'Writer',
		reviews:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?',
	},
	{
		reviewerAvatar: './assets/profileThree.webp',
		reviewerName: 'Rohit',
		reviewerDesignation: 'Director',
		reviews:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?',
	},
	{
		reviewerAvatar: './assets/profileFour.webp',
		reviewerName: 'Dorson',
		reviewerDesignation: 'CEO',
		reviews:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?',
	},
	{
		reviewerAvatar: './assets/profileFive.webp',
		reviewerName: 'normida',
		reviewerDesignation: 'Designer',
		reviews:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?',
	},
];

let reviewCounter = 0;
let forwardButton = document.getElementById('forward-btn');
let backwardButton = document.getElementById('back-btn');
let reviewerAvatar = document.getElementById('person-img');
let reviewerName = document.getElementById('author');
let reviewerDesignation = document.getElementById('job');
let reviews = document.getElementById('info');
