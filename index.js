const addTodo = document.getElementById("addBtn");
const input = document.getElementById("inputtext");
const mylist = document.getElementById("mylist");

loadEventListeners();
function loadEventListeners() {
	document.addEventListener("DOMContentLoaded", todoItems);
	// document.addEventListener("DOMContentLoaded", addTodo);
	// document.addEventListener("DOMContentLoaded", ListTag);
	// document.addEventListener("DOMContentLoaded", check);
}

input.onkeypress = InputError;
function InputError() {
	input.style.border = "2px solid #0978ee";
}
function todoItems() {
	let todos;
	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}

	if (todos === null) {
		console.log();
	} else {
		todos.forEach(function (task) {
			const listTag = ListTag();
			const chkBox = check();
			listTag.appendChild(chkBox);
			listTag.appendChild(document.createTextNode(task));

			chkBox.addEventListener("click", function () {
				if (chkBox.checked == true) {
					listTag.style.opacity = "0.2";
				} else {
					listTag.style.opacity = "1";
				}
			});

			let div = document.createElement("div");

			let timeSpan = document.createElement("span");
			timeSpan.setAttribute("class", "timeSpan");
			timeSpan.innerText = Time();

			let deleteButton = document.createElement("button");

			let deleteIcon = document.createElement("i");
			deleteIcon.setAttribute("class", "fas fa-trash");
			deleteIcon.setAttribute("id", "delete");
			deleteIcon.onclick = RemoveList;

			deleteButton.appendChild(deleteIcon);
			div.appendChild(deleteButton);
			div.appendChild(timeSpan);
			listTag.appendChild(div);
			mylist.appendChild(listTag);
		});
	}
}

const todos = [];
addTodo.addEventListener("click", function () {
	if (input.value == "") {
		input.style.border = "2px solid red";
	} else {
		todos.push(input.value);
		localStorage.setItem("todos", JSON.stringify(todos));

		const listTag = ListTag();
		const chkBox = check();
		listTag.appendChild(chkBox);
		listTag.appendChild(document.createTextNode(input.value));

		chkBox.addEventListener("click", function () {
			if (chkBox.checked == true) {
				listTag.style.opacity = "0.2";
			} else {
				listTag.style.opacity = "1";
			}
		});

		let div = document.createElement("div");

		let timeSpan = document.createElement("span");
		timeSpan.setAttribute("class", "timeSpan");
		timeSpan.innerText = Time();

		let deleteButton = document.createElement("button");

		let deleteIcon = document.createElement("i");
		deleteIcon.setAttribute("class", "fas fa-trash");
		deleteIcon.setAttribute("id", "delete");
		deleteIcon.onclick = RemoveList;

		deleteButton.appendChild(deleteIcon);
		div.appendChild(deleteButton);
		div.appendChild(timeSpan);
		listTag.appendChild(div);
		mylist.appendChild(listTag);

		input.style.border = "1px solid #378eeb";
		input.value = "";
	}
	input.style.border = "1px solid #378eeb";
});

// Removing List
function RemoveList(e) {
	if (e.target.classList.contains("fa-trash")) {
		e.target.parentElement.nextSibling.remove();
		e.target.parentElement.parentElement.parentElement.remove();
		removeFromLocalSorage(e.target.parentElement.parentElement.parentElement);
	}
}

// Removing From Local Storage
function removeFromLocalSorage(todo) {
	let todos;
	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	todos.forEach(function (task, index) {
		if (todo.innerText === task) {
			todos.splice(index, 1);
		}
	});
	localStorage.setItem("todos", JSON.stringify(todos));
}

// Creating List Tag
function ListTag() {
	// var rgb = RandomColorGenerator();
	let listTag = document.createElement("li");
	return listTag;
}

// Creating CheckBox
function check() {
	let checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	checkBox.style.marginRight = "5px";
	return checkBox;
}

// Getting Time
function Time() {
	let date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	hour = hour % 12;
	hour = hour ? hour : 12;

	if (date.getHours() >= 12) {
		return (time = hour + " : " + minutes + " pm");
	} else {
		return (time = hour + " : " + minutes + " am");
	}
}

function RandomColorGenerator() {
	const r = Math.floor(Math.random() * 255) + 1;
	const g = Math.floor(Math.random() * 255) + 1;
	const b = Math.floor(Math.random() * 255) + 1;
	return (color = `rgb(${r} , ${g} , ${b})`);
}
