// 1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც იმუშავებს როგორც ნამდვილი სააათი. გამოიყენეთ ქვემოთ მობმული სურათი (საათი.png).
const clock = document.querySelector("#clock");
function createClock() {
	const day = new Date();

	const hour = day.getHours();
	const min = day.getMinutes();
	const sec = day.getSeconds();

	// console.log(hour, min, sec);
	if (hour < 12) {
		clock.innerHTML = `${hour} : ${min} : ${sec} AM`;
	} else {
		clock.innerHTML = `${hour - 12} : ${min} : ${sec} PM`;
	}
}

createClock();

setInterval(() => {
	createClock();
}, 1000);

// 2. ლექციაზე შექმნილ სლაიდერს დავამატოთ:
//    1. როდესაც ავტომატურად ხდება სლაიდების შეცვლა თუ მაუსს მივიტან სურათთან, ავტომატური სლაიდი გაჩერდეს.
//    2. თუ მაუსი მიტანილი მაქვს სურათზე და შემდეგ გამოვწევ სურათიდან, ავტომატური სლაიდი გაგრძელდეს. (მოუსემინეთ  mouseenter, mouseleave)  ივენთებს
//    დამხმარე მასალა: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event

// 3. დავამატოთ ასეთი (ღილაკები.png) ღილაკები იმდენი რამდენი სლაიდიც გვაქვს, ღილაკზე დაკლიების შემდეგ სლაიდერი უნდა გადავიდეს შესაბამის სლაიდზე (პირველ ღილაკზე თუ დავკლიკე უნდა გადავიდეს პირველ სლაიზე და ასე შემდეგ).

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const pgnBtns = document.querySelectorAll(".pagination-bullets span");

const startAutoSlider = document.querySelector(".start-auto-slider");
const stopAutoSlider = document.querySelector(".stop-auto-slider");

const sliderWrapper = document.querySelector(".slider-wrapper");

// console.log(slides);
let activeIndex = 0;
let sliderIntervalId = null;

function pgnBtnsActions() {
	pgnBtns.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			// console.log(index);
			activeIndex = index;

			// renderSliders();
			// renderPgnBtns();

			updateActiveClasses(pgnBtns);

			updateActiveClasses(slides);
		});
	});
}

// function renderSliders() {
// 	slides.forEach((slide, index) => {
// 		// console.log(slide, index);

// 		if (activeIndex === index) {
// 			slide.classList.add("active");
// 		} else {
// 			slide.classList.remove("active");
// 		}
// 	});
// }

// function renderPgnBtns() {
// 	pgnBtns.forEach((btn, index) => {
// 		if (activeIndex === index) {
// 			btn.classList.add("active");
// 		} else {
// 			btn.classList.remove("active");
// 		}
// 	});
// }

function updateActiveClasses(arr) {
	arr.forEach((el, index) => {
		if (activeIndex === index) {
			el.classList.add("active");
		} else {
			el.classList.remove("active");
		}
	});
}

function nextSlide() {
	// console.log("next slide");

	if (activeIndex === slides.length - 1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}

	// renderSliders();
	// renderPgnBtns();

	updateActiveClasses(pgnBtns);

	updateActiveClasses(slides);
}

function prevSlide() {
	if (activeIndex === 0) {
		activeIndex = slides.length - 1;
	} else {
		activeIndex--;
	}

	// renderSliders();
	// renderPgnBtns();
	updateActiveClasses(pgnBtns);

	updateActiveClasses(slides);
}

function startAutoSlidingFn() {
	sliderIntervalId = setInterval(nextSlide, 2000);
}

function stopAutoSlidingFn() {
	if (sliderIntervalId) {
		clearInterval(sliderIntervalId);
		sliderIntervalId = null;
	}
}

function keyBoardEvents() {
	document.addEventListener("keyup", (e) => {
		// console.log(e);

		if (e.code === "ArrowRight") {
			nextSlide();
		}
		if (e.code === "ArrowLeft") {
			prevSlide();
		}
	});
}

function initSlider() {
	// renderSliders();
	// renderPgnBtns();

	updateActiveClasses(pgnBtns);

	updateActiveClasses(slides);

	pgnBtnsActions();

	next.addEventListener("click", nextSlide);
	prev.addEventListener("click", prevSlide);

	// startAutoSlider.addEventListener("click", startAutoSlidingFn);
	// stopAutoSlider.addEventListener("click", stopAutoSlidingFn);

	keyBoardEvents();
	// startAutoSlidingFn();
}

// #2
// sliderWrapper.addEventListener("mouseenter", stopAutoSlidingFn);
// sliderWrapper.addEventListener("mouseleave", startAutoSlidingFn);

initSlider();
