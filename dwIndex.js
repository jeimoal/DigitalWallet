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

	//fig elements
	binFig = document.createElement('img');
	binFig.setAttribute('class', 'binFig')
	cardDiv.appendChild(binFig);

	trashFig = document.createElement('img');
	trashFig.setAttribute('class', 'trashFig')
	cardDiv.appendChild(trashFig);

	circleFig = document.createElement('img');
	circleFig.setAttribute('class', 'circleFig')
	cardDiv.appendChild(circleFig);

	//create top container
	topContDiv = document.createElement('div');
	topContDiv.setAttribute('class', 'topCont');
	cardDiv.appendChild(topContDiv);

	//TOP CONTAINER ELEMENTS

	//top text
	topTxtDiv = document.createElement('div');
	topTxtDiv.setAttribute('class', 'topTxtDiv');
	dwTxt = document.createElement('p');
	dwTxt.textContent = 'digital wallet';
	mwTxt = document.createElement('p');
	mwTxt.textContent = 'my wallet';
	topTxtDiv.appendChild(dwTxt);
	topTxtDiv.appendChild(mwTxt);
	topContDiv.appendChild(topTxtDiv);

	//acc balance elements
	accTxtDiv = document.createElement('div');
	accTxtDiv.setAttribute('class', 'accTxtDiv');
	blcTxt = document.createElement('p');
	blcTxt.textContent = 'account balance';
	valorTxt = document.createElement('p');
	valorTxt.textContent = 'R$50.000';
	accTxtDiv.appendChild(blcTxt);
	accTxtDiv.appendChild(valorTxt);
	topContDiv.appendChild(accTxtDiv);

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