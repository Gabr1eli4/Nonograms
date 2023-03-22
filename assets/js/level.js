import { black, white, right_answer } from "./info.js";
import { levelPassed } from "./levelPassed.js";
import { ChooseLevel } from "./level-selection.js";

let isVisited = false;
let id = 0;

function level() {
	let playblock = document.querySelectorAll(".playblock");
	document
		.querySelector(".playground")
		.addEventListener("click", clickHandler);

	let leaveBtn = document.querySelector(".leave-btn");
	leaveBtn.addEventListener("click", leaveBtnHandler);

	let checkBtn = document.querySelector(".check-btn");
	checkBtn.addEventListener("click", checkBtnHandler);

	whiteTable(playblock);
}

function leaveBtnHandler() {
	document
		.querySelector(".playground")
		.removeEventListener("click", clickHandler);
	ChooseLevel();
}

function whiteTable(playblock) {
	playblock.forEach(function (item) {
		item.style.backgroundColor = white;
	});
}

function clickHandler(event) {
	console.log(event);
	!isVisited ? (id = event.srcElement.id) : id;
	if (event.srcElement.className === "playblock block wrong") {
		event.srcElement.className = "playblock block";
	}
	if (event.srcElement.className === "playblock block") {
		if (getComputedStyle(event.target).backgroundColor == white) {
			event.target.style.backgroundColor = black;
		} else {
			event.target.style.backgroundColor = white;
		}
	}
	isVisited = true;
	check(id);
}

// Проверка рисунка
function check(id) {
	let arr = [];
	let playblock = document.querySelectorAll(".playblock");
	let playground = document.querySelector(".playground");
	// Заполнение массива информацией о фоновом цвете блоков
	playblock.forEach((item) => {
		arr.push(item.style.backgroundColor);
	});

	// Проверка на равенство двух массивов
	if (
		!!arr.every((value, index) => value === right_answer[+(id - 1)][index])
	) {
		playground.removeEventListener("click", clickHandler);
		isVisited = false;
		levelPassed(id);
	}
}

function checkBtnHandler(event) {
	let colors = [];
	let playblock = document.querySelectorAll(".playblock");

	playblock.forEach((item) => {
		colors.push(item.style.backgroundColor);
	});

	colors.forEach((value, index) => {
		if (
			value === black &&
			value !== right_answer[+event.target.id - 1][index]
		) {
			playblock[index].className = "playblock block wrong";
		}
	});
}

export { level };
