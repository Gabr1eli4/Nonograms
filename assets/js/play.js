import { ChooseLevel } from "./level-selection.js";

let container = document.querySelector(".container");

let div = document.createElement("div");
let section = document.createElement("section");
let h1 = document.createElement("h1");
let button = document.createElement("button");

div.className = "playground";
button.className = "start-btn btn";
button.textContent = "Начать";
h1.className = "title";
h1.textContent = "Nonograms";
section.className = "start-menu";

section.append(h1, button);
div.append(section);
container.append(div);

let playground = document.querySelector(".playground");
let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", ChooseLevel);
