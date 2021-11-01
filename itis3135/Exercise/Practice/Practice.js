var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	let order = "";
	let total = 0;

	//add onclick event handler for each image
	$('espresso').addEventListener("click", addEspresso);
	$('cappuccino').addEventListener("click", addCappuccino);

	// for click event add item to order and update total
	function addEspresso() {
		order = "<p>$1.95 - Espresso - Delicious espresso. Wanna try it?</p>";
		total += 1.95;
		displayResults();
	}

	function addCappuccino() {
		order = "<p>$3.45 - Cappuccino - Delicious cappuccino!</p>";
		total += 3.45;
		displayResults();
	}
	// display order and total
	function displayResults() {
		$('order').innerHTML += order;
		order = "";
		$('total').innerText = ("Total: $" + (total).toFixed(2));
	}
	
		
}; // end onload