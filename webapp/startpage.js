const generate_button = document.getElementById("generate_button");

generate_button.onclick = function generatebalance () {

const random_number = Math.floor(Math.random() * 20000) +10;

document.getElementById('javascript').textContent = random_number;

}

