const dwLogin = {
lUser : null,
lPass : null,
lSub : null,
newAcc : null,

init : () => {
	dwLogin.lUser = document.querySelector('#username');
	dwLogin.lPass = document.querySelector('#password');
	dwLogin.lSub = document.querySelector('#submitBtn');
	dwLogin.lSub.addEventListener('click', dwLogin.valid);
	dwLogin.newAcc = document.querySelector('#newAcc');
	dwLogin.newAcc.addEventListener('click', dwLogin.newUser);
},

valid : () => {
	if (dwLogin.lUser.value === 'USERNAME' && dwLogin.lPass.value === 'USERNAME') {
		open('dwIndex.html');
	} else if (dwLogin.lUser.value !== 'USERNAME' && dwLogin.lPass.value !== 'USERNAME') {
		alert('username or password are incorrect');
	}
},

newUser : () => {
	wrapper = document.querySelector('#wrapper');
	pswDiv = document.querySelector('#pswDiv');
	wrapper.style.display = 'none';
	pswDiv.style.display = 'flex';
	newUsername = document.querySelector('#newUsername');
	newUsername.focus();
},

};

const nUser = {
lUser : null,
lPsw : null,
lSub : null,
message : null,

init : () => {
	nUser.lUser = document.querySelector('#newUsername');
	nUser.lPsw = document.querySelector('#newPassword');
	nUser.lSub = document.querySelector('#sbmtPsw');
	nUser.message = document.querySelector("#message");
	nUser.valid();
},

valid : () => {
	msg = document.querySelector('#newPassword');
	letter = document.querySelector('#letter');
	capital = document.querySelector('#capital');
	number = document.querySelector('#number');
	length = document.querySelector('#length');

// show tips when start type on the password field

msg.onkeyup = function() {
	// Validate lowercase letters
	lowerCaseLetters = /[a-z]/g;
	if(msg.value.match(lowerCaseLetters)) {  
		letter.classList.remove("invalid");
		letter.classList.add("valid");
	} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	};

	// Validate capital letters
	upperCaseLetters = /[A-Z]/g;
	if(msg.value.match(upperCaseLetters)) {  
		capital.classList.remove("invalid");
		capital.classList.add("valid");
	} else {
		capital.classList.remove("valid");
		capital.classList.add("invalid");
	};

	// Validate numbers
	numbers = /[0-9]/g;
	if(msg.value.match(numbers)) {  
		number.classList.remove("invalid");
		number.classList.add("valid");
	} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
	}

	// Validate length
	if(msg.value.length >= 6) {
		length.classList.remove("invalid");
		length.classList.add("valid");
	} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
	}
};

},

//nUser end
}
window.addEventListener('load', dwLogin.init);
window.addEventListener('load', nUser.init);

/* USED TO SHOW THE LOGIN SCREEN
*sbmtPsw = document.querySelector('#sbmtPsw');
*sbmtPsw.addEventListener('click', dwLogin.displayLogin);
*
*displayLogin : () => {
*	wrapper = document.querySelector('#wrapper');
*	pswDiv = document.querySelector('#pswDiv');
*	wrapper.style.display = 'flex';
*	pswDiv.style.display = 'none';
*},
*/