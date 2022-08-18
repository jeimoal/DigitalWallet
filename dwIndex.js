const nWallet = {

init : () => {
	newBtn = document.querySelector('#newBtn');
	newBtn.addEventListener('click', nWallet.newWallet)
},

newWallet : () => {
	//create wallet container
	walletsDiv = document.querySelector('#walletsDiv');
	cardDiv = document.createElement('div');
	cardDiv.setAttribute('class', 'container');
	walletsDiv.appendChild(cardDiv);

	//create top container
	topContDiv = document.createElement('div');
	topContDiv.setAttribute('class', 'topCont');
	cardDiv.appendChild(topContDiv);

	//create mid container
	midContDiv = document.createElement('div');
	midContDiv.setAttribute('class', 'midCont');
	cardDiv.appendChild(midContDiv);

	//create bottom container
	btmContDiv = document.createElement('div');
	btmContDiv.setAttribute('class', 'btmCont');
	cardDiv.appendChild(btmContDiv);
},

}

window.addEventListener('load', nWallet.init);