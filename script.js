let result = document.getElementById("result");

function buttonClicked(button) {
	if (button === "C") {
		result.innerHTML = "0";
	} else if (button === "=") {
		result.innerHTML = eval(result.innerHTML);
	} else {
		if (result.innerHTML === "0") {
			result.innerHTML = button;
		} else {
			result.innerHTML += button;
		}
	}
}
