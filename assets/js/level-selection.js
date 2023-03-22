import { level } from "./level.js";
import { levels } from "./levels.js";

export function ChooseLevel() {
	let playground = document.querySelector(".playground");
	let section = document.createElement("section");
	section.className = "choose-section";
	let h1 = document.createElement("h1");
	h1.className = "title choose-title";
	h1.textContent = "Выбор уровня";
	let div = document.createElement("div");
	div.className = "level-choose";
	let div_inner = document.createElement("div");
	div_inner.className = "level-choose-inner";
	let button = document.createElement("button");
	button.className = "level-btn btn";
	button.textContent = "Играть";

	let lvl_name = [
		"Первый",
		"Второй",
		"Третий",
		"Четвёртый",
		"Пятый",
		"Шестой",
		"Седьмой",
	];

	for (let i = 0; i < 7; i++) {
		let div_item = document.createElement("div");
		div_item.className = "level-item";

		let h2 = document.createElement("h2");
		h2.className = "level-title";
		h2.textContent = lvl_name[i] + " уровень";

		let button = document.createElement("button");
		button.className = "level-btn btn";
		button.textContent = "Играть";
		button.id = i + 1;

		div_item.append(h2, button);
		div_inner.append(div_item);
	}
	div.append(div_inner);
	section.append(h1, div);

	playground.innerHTML = "";

	playground.append(section);

	let levelBtn = document.querySelectorAll(".level-btn");

	levelBtn.forEach((item) => {
		item.addEventListener("click", LevelBtnHandler);
	});
}

function LevelBtnHandler(event) {
	let playground = document.querySelector(".playground");
	let div = document.createElement("div");
	div.className = "level-footer";
	let button_check = document.createElement("button");
	button_check.className = "check-btn btn";
	button_check.textContent = "Проверить";
	button_check.id = event.target.id;
	let button_leave = document.createElement("button");
	button_leave.className = "leave-btn btn";
	button_leave.textContent = "Покинуть уровень";
	div.append(button_check, button_leave);
	playground.innerHTML = levels[event.target.id - 1];
	playground.append(div);

	level();
}
