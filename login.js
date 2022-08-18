const dwLogin = {
lUser : null,
lPass : null,
lSub : null,

init : () => {
	dwLogin.lUser = document.querySelector('#username');
	dwLogin.lPass = document.querySelector('#password');
	dwLogin.lSub = document.querySelector('#submitBtn');
	dwLogin.lSub.addEventListener('click', dwLogin.valid)
},

valid : () => {
	if (dwLogin.lUser.value !== 'USERNAME' && dwLogin.lPass.value !== 'USERNAME') {
		alert('username or password are incorrect');
	} else {
		alert('loged in'); //will be changed to redirected the page
	};
},

}

window.addEventListener('load', dwLogin.init);