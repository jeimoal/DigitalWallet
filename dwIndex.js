const nWallet = {
blc : 0, //balance value
rsvd : 0, //reserved value
limit : 0, //define limit per deposit

init : () => {
	newBtn = document.querySelector('#newBtn');
	newBtn.addEventListener('click', nWallet.newWallet)
},

newWallet : () => {
	newBtn.disabled = true;
	nWallet.blc = 0;
	nWallet.limit = 5000;

	//create wallet container
	walletsDiv = document.querySelector('#walletsDiv');
	cardDiv = document.createElement('div');
	cardDiv.setAttribute('class', 'container flxCol');
	walletsDiv.appendChild(cardDiv);

	//fig elements
	binFig = document.createElement('img');
	binFig.setAttribute('class', 'trashFig')
	trashFig = document.createElement('img');
	trashFig.setAttribute('class', 'binaryFig')
	circleFig = document.createElement('img');
	circleFig.setAttribute('class', 'circleFig')

	cardDiv.appendChild(binFig);
	cardDiv.appendChild(trashFig);
	cardDiv.appendChild(circleFig);

	//TOP CONTAINER ELEMENTS

	//create top container
	topContDiv = document.createElement('div');
	topContDiv.setAttribute('class', 'topCont flxCol');
	cardDiv.appendChild(topContDiv);

	//top text
	topTxtDiv = document.createElement('div');
	topTxtDiv.setAttribute('class', 'topTxtDiv flxCol');
	dwTxt = document.createElement('p');
	dwTxt.setAttribute('class', 'dwTxt');
	dwTxt.textContent = 'digital wallet';
	mwTxt = document.createElement('p');
	mwTxt.setAttribute('class', 'mwTxt');
	mwTxt.textContent = 'my wallet';

	topTxtDiv.appendChild(dwTxt);
	topTxtDiv.appendChild(mwTxt);
	topContDiv.appendChild(topTxtDiv);

	//acc balance elements
	accTxtDiv = document.createElement('div');
	accTxtDiv.setAttribute('class', 'accTxtDiv flxCol');
	blcTxt = document.createElement('p');
	blcTxt.textContent = 'account balance';
	blcTxt.setAttribute('class', 'blcTxt');
	valorTxt = document.createElement('p');
	valorTxt.textContent = `R$${nWallet.blc}.00`;
	valorTxt.setAttribute('class', 'valorTxt');
	display = document.createElement('img');
	display.setAttribute('class', 'eyeFig');

	accTxtDiv.appendChild(blcTxt);
	accTxtDiv.appendChild(valorTxt);
	accTxtDiv.appendChild(display);
	topContDiv.appendChild(accTxtDiv);

	//buttons
	btnDiv = document.createElement('div');
	btnDiv.setAttribute('class', 'btnDiv flxRow');
	addBtn = document.createElement('button');
	addBtn.setAttribute('class', 'addBtn');
	addBtn.textContent = 'add value';
	wdwBtn = document.createElement('button');
	wdwBtn.setAttribute('class', 'wdwBtn');
	wdwBtn.textContent = 'withdraw value';
	svnBtn = document.createElement('button');
	svnBtn.setAttribute('class', 'svnBtn');
	svnBtn.textContent = 'saving';

	btnDiv.appendChild(addBtn);
	btnDiv.appendChild(wdwBtn);
	btnDiv.appendChild(svnBtn);
	topContDiv.appendChild(btnDiv);


	//MID CONTAINER ELEMENTS

	//create mid container
	midContDiv = document.createElement('div');
	midContDiv.setAttribute('class', 'midCont flxRow');
	cardDiv.appendChild(midContDiv);

	//img
	fig = document.createElement('img');
	fig.setAttribute('class', 'centerImg');
	fig.setAttribute('src', 'bgLogo.png');
	midContDiv.appendChild(fig);

	//BOTTTOM CONTAINER ELEMENTS

	//create bottom container
	btmContDiv = document.createElement('div');
	btmContDiv.setAttribute('class', 'btmCont');
	cardDiv.appendChild(btmContDiv);

	//container elements
	reserved = document.createElement('div');
	reserved.setAttribute('class', 'reservedDiv flxCol');
	rsvdTxt = document.createElement('p');
	rsvdTxt.setAttribute('class', 'rsvdTxt');
	rsvdTxt.textContent = 'reserved available';
	rsvdValue = document.createElement('p');
	rsvdValue.setAttribute('class', 'rsvdVal');
	rsvdValue.textContent = `R$${nWallet.rsvd}.00`;
	display = document.createElement('img');
	display.setAttribute('class', 'eyeFig');
	rsvdBtn = document.createElement('button');
	rsvdBtn.setAttribute('class', 'rsvdBtn');
	rsvdBtn.textContent = "withdraw";

	reserved.appendChild(rsvdTxt);
	reserved.appendChild(rsvdValue);
	reserved.appendChild(rsvdBtn);
	reserved.appendChild(display);
	btmContDiv.appendChild(reserved);

	//add value function
	addBtn.addEventListener('click', function () {
	let vl = parseFloat(Number(prompt('Enter the amount')));
		//check if the entry is a positive number and is between the account deposit limit
		if(Number.isFinite(vl) && Math.sign(vl) != -1 && vl <= nWallet.limit) {
			nWallet.blc += vl;
		}
	valorTxt.textContent = `R$${nWallet.blc.toFixed(2)}`;
	});

	//withdraw value function
	wdwBtn.addEventListener('click', function () {	
	let vl = parseFloat(Number(prompt('Enter the amount')));
		//check if the entry is a positive number and is between the account withdraw limit
		if(Number.isFinite(vl) && Math.sign(vl) != -1 && vl <= nWallet.limit) {
			//aditional validation to check if there's balance available
			if(vl > nWallet.blc) {
				alert('value not available');
			} else {
				nWallet.blc -= vl;
			}
		}
	valorTxt.textContent = `R$${nWallet.blc.toFixed(2)}`;
	});

	//saving value function
	svnBtn.addEventListener('click', function() {
	let vl = parseFloat(Number(prompt('Enter the amount')));
		//check if the entry is a number
		if(Number.isFinite(vl) && Math.sign(vl) != -1) {
			//aditional validation to check if there's balance available
			if(vl > nWallet.blc) {
				alert('value not available');
			} else {
				nWallet.blc -= vl;
				nWallet.rsvd += vl;
			}
		}
	valorTxt.textContent = `R$${nWallet.blc.toFixed(2)}`;
	rsvdValue.textContent = `R$${nWallet.rsvd.toFixed(2)}`;
	});

	//withdraw from reserve function
	rsvdBtn.addEventListener('click', function () {	
	let vl = parseFloat(Number(prompt('Enter the amount')));
		//check if the entry is a number and is between the account withdraw limit
		if(Number.isFinite(vl) && Math.sign(vl) != -1 ) {
			//aditional validation to check if there's reserve available
			if(vl > nWallet.rsvd) {
				alert('value not available');
			} else {
				nWallet.rsvd -= vl;
				nWallet.blc += vl;
			}
		}
	rsvdValue.textContent = `R$${nWallet.rsvd.toFixed(2)}`;
	valorTxt.textContent = `R$${nWallet.blc.toFixed(2)}`;
	});
},

}

window.addEventListener('load', nWallet.init);
