let square = document.querySelector(".square");
let playground = document.querySelector(".playground");
let button = document.querySelector(".button");
let clear_button = document.querySelector(".clear-button");
let check_btn = document.querySelector(".check-btn");

black = "rgb(0, 0, 0)";
white = "rgb(255, 255, 255)";

button.addEventListener("click", function () {
	generate_table();
	square = update();
	square.forEach((item) =>
		item.addEventListener("click", function () {
			if (getComputedStyle(item).backgroundColor == white) {
				item.style.backgroundColor = black;
			} else {
				item.style.backgroundColor = white;
			}
		})
	);
});

clear_button.addEventListener("click", clear);

check_btn.addEventListener("click", check);

function update() {
	const square = document.querySelectorAll(".square");
	return square;
}

function generate_table() {
	for (let i = 0; i < 10; i++) {
		string = "";
		string += '<div class="square-string">';
		for (let j = 0; j < 10; j++) {
			string +=
				'<div id="square" class="square" style="background-color: rgb(255, 255, 255);"></div>';
		}
		string += "</div><br>";
		playground.innerHTML += string;
	}
}

function clear() {
	square = update();
	square.forEach(function (item) {
		item.style.backgroundColor = white;
	});
}

function get_picture() {
	const square = document.querySelectorAll(".square");
	let arr = [];
	square.forEach(function (item) {
		arr.push(item.style.backgroundColor);
	});
	return arr;
}

function check() {
	right_answer = [
		black,
		white,
		white,
		white,
		white,
		white,
		black,
		black,
		white,
		white,
		black,
		white,
		black,
		black,
		white,
		black,
		black,
		white,
		white,
		black,
		white,
		black,
		black,
		black,
		black,
		black,
		black,
		black,
		black,
		black,
		white,
		black,
		white,
		black,
		black,
		black,
		black,
		black,
		white,
		white,
		black,
		black,
		black,
		black,
		white,
		black,
		black,
		black,
		white,
		black,
		black,
		white,
		black,
		black,
		white,
		black,
		black,
		black,
		black,
		black,
		white,
		white,
		black,
		black,
		white,
		white,
		black,
		black,
		black,
		black,
		white,
		white,
		black,
		white,
		white,
		white,
		black,
		black,
		black,
		white,
		white,
		white,
		white,
		white,
		white,
		white,
		white,
		black,
		white,
		white,
		white,
		white,
		white,
		white,
		white,
		black,
		black,
		white,
		white,
		white,
	];

	square = get_picture();
	counter = 0;
	for (let i = 0; i < 10; i++) {
		if (square[i] != right_answer[i]) {
			alert("Шото не так");
			return false;
		}
	}
	alert("Ура победа, Ура победа, Ура победа!");
	return true;
}
