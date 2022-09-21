const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".carousel__track");
const slides = Array.from(track.children);
const prevButton = carousel.querySelector(".carousel__button--left");
const nextButton = carousel.querySelector(".carousel__button--right");

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// Functions
const slideArrangement = (slide, index) => {
	slide.style.left = index * slideWidth + "px";
};

const changeSlide = (currentIndex, targetIndex) => {
	var current = slides[currentIndex];
	var target = slides[targetIndex];
	var amountToMove = target.style.left;

	// Move Track
	track.style.transform = "translateX(-" + amountToMove + ")";

	// Update Current Slide Class
	current.classList.remove("current-slide");
	target.classList.add("current-slide");
};

// Arrange slides next to each other
slides.forEach(slideArrangement);

// When Left-Button is clicked, Move Left
prevButton.addEventListener("click", (e) => {
	var currentSlide = track.querySelector(".current-slide");
	var currentIndex = slides.findIndex((slide) => slide === currentSlide);
	var prevIndex = (currentIndex + slides.length - 1) % slides.length;

	changeSlide(currentIndex, prevIndex);

	// Interupt Animation
	clearInterval(animInterval);
	targetAnimIndex = currentAnimIndex;
	currentAnimIndex = prevIndex;
	animInterval = setInterval(aminFunction, animDuration);
});

// When Right-Button is clicked, Move Right
nextButton.addEventListener("click", (e) => {
	var currentSlide = track.querySelector(".current-slide");
	var currentIndex = slides.findIndex((slide) => slide === currentSlide);
	var nextIndex = (currentIndex + 1) % slides.length;

	changeSlide(currentIndex, nextIndex);

	// Interupt Animation
	clearInterval(animInterval);
	currentAnimIndex = nextIndex;
	targetAnimIndex = (targetAnimIndex + 1) % slides.length;
	animInterval = setInterval(aminFunction, animDuration);
});

// Animate Carousel
var currentAnimIndex = 0;
var targetAnimIndex = (currentAnimIndex + 1) % slides.length;
var animDuration = 5000;

const aminFunction = () => {
	if (slides.length > 1) {
		changeSlide(currentAnimIndex, targetAnimIndex);
		currentAnimIndex = targetAnimIndex;
		targetAnimIndex = (targetAnimIndex + 1) % slides.length;
	}
};

var animInterval = setInterval(aminFunction, animDuration);
