const form = document.querySelector("#sign-up");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const modal = document.querySelector("#sign-in");

const closeModalBtn = document.querySelector("#sign-in .modal-close");

const usernameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

let isUserNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;

function validateUserName() {
	if (!username.validity.valid) {
		username.classList.remove("correct");
		username.classList.add("error");
		usernameError.innerText = "empty";
		isUserNameValid = false;
	} else {
		username.classList.remove("error");
		username.classList.add("correct");
		usernameError.innerText = "";
		isUserNameValid = true;
	}

	return isUserNameValid;
}

function validateUserEmail() {
	if (!email.validity.valid) {
		// console.log("not valid");
		email.classList.remove("correct");
		email.classList.add("error");

		if (email.validity.typeMismatch) {
			emailError.innerText = "not valid format";
		} else {
			emailError.innerText = "empty";
		}
		isEmailValid = false;
	} else {
		email.classList.add("correct");
		email.classList.remove("error");
		emailError.innerText = "";
		isEmailValid = true;
	}

	return isEmailValid;
}

function validatePassword() {
	if (password.value.length < 5) {
		passwordError.innerText = "only 5 char";
		password.classList.remove("correct");
		password.classList.add("error");
		isPasswordValid = false;
	} else if (password.value.length >= 5 && password.value.length < 10) {
		passwordError.innerText = "less than 10";
		password.classList.add("correct");
		password.classList.remove("error");
		isPasswordValid = true;
	} else {
		// console.log("> 10");
		passwordError.innerText = "> 10";
		isPasswordValid = true;
	}

	return isPasswordValid;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log(username.validity, email.validity, password.value);

	const isValidName = validateUserName();
	const isValidEmail = validateUserEmail();
	const isValidPassword = validatePassword();

	if (isValidName && isValidEmail && isValidPassword) {
		console.log("submit form");

		// form.submit();

		// modal.classList.add("open");
		showSelectedModal("#sign-in");

		form.reset();
	}
});

username.addEventListener("input", validateUserName);
email.addEventListener("input", validateUserEmail);
password.addEventListener("input", validatePassword);

// closeModalBtn.addEventListener("click", () => {
// 	modal.classList.remove("open");
// });

function showSelectedModal(selector) {
	const modal = document.querySelector(selector);
	const closeModalBtn = modal.querySelector(".modal-close");
	// console.log(closeModalBtn, modal);
	modal.classList.add("open");
	closeModalBtn.addEventListener("click", () => {
		modal.classList.remove("open");
	});
}

// showSelectedModal('#sign-up-modal');

document.querySelector(".open-modal").addEventListener("click", () => {
	showSelectedModal("#sign-up-modal");
});
