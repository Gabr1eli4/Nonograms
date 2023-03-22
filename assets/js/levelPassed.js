import { ChooseLevel } from "./level-selection.js";
import { right_answer } from "./info.js";

// Вывод информации о прохождении уровня
function levelPassed(id) {
	let playground = document.querySelector(".playground");

	let section = document.createElement("section");
	let h1 = document.createElement("h1");
	let button = document.createElement("button");
	let div = document.createElement("div");

	div.className = "level-passed-inner";
	section.className = "level-passed";
	h1.className = "passed-title";
	h1.textContent = "Уровень пройден";
	button.className = "back-btn btn";
	button.textContent = "Назад";

	div.append(h1, button);
	section.append(div);
	playground.append(section);

	let backBtn = document.querySelector(".back-btn");
	backBtn.addEventListener("click", goBack);
}

// Возвращение в главное меню
function goBack() {
	let playground = document.querySelector(".playground");

	let div = document.createElement("div");
	div.className = "playground";
	let section = document.createElement("section");
	section.className = "start-menu";
	let h1 = document.createElement("h1");
	h1.className = "title";
	h1.textContent = "Nonograms";
	let button = document.createElement("button");
	button.className = "start-btn btn";
	button.textContent = "Start";

	section.append(h1, button);
	div.append(section);
	playground.innerHTML = "";
	playground.append(div);

	let startBtn = document.querySelector(".start-btn");
	startBtn.addEventListener("click", ChooseLevel);
}

export { levelPassed };
