const REVIEWS_JSON = [
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
let counter = 0;
let forwardButton = document.getElementById('forward-btn');
let backwardButton = document.getElementById('back-btn');
let reviewerAvatar = document.getElementById('person-img');
let reviewerName = document.getElementById('author');
let reviewerDesignation = document.getElementById('job');
let reviews = document.getElementById('info');

const setReviews = (reviewId) => {
	let selectedReview = REVIEWS_JSON[reviewId];
	reviewerAvatar.src = selectedReview.reviewerAvatar;
	reviewerName.innerHTML = selectedReview.reviewerName;
	reviewerDesignation.innerHTML = selectedReview.reviewerDesignation;
	reviews.innerHTML = selectedReview.reviews;
};
const forwardReview = () => {
	if (counter < REVIEWS_JSON.length - 1) {
		counter = counter + 1;
		setReviews(counter);
	} else {
		forwardButton.disabled = true;
	}
};
const backReview = () => {
	if (counter > 0) {
		counter = counter - 1;
		setReviews(counter);
	} else {
		console.log('counter',counter);
		backwardButton.disabled = true;
	}
};
console.log(forwardButton);
forwardButton.addEventListener('click', forwardReview);
backwardButton.addEventListener('click', backReview);
