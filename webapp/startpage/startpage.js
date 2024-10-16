
const generate_button = document.getElementById("generate_button");

generate_button.onclick = function generatebalance () {

const random_number = Math.floor(Math.random() * 20000) +10;

document.getElementById('javascript').textContent = random_number;


document.getElementById('account_balance_display').textContent = random_number;



}

generate_button.addEventListener('click', function(){
	document.getElementById('generate_comment').style.display = 'none';});


