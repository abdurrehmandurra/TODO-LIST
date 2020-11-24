const addTodo = document.getElementById("addBtn");
const input = document.getElementById("inputtext");
const mylist = document.getElementById("mylist");
// var li = document.querySelectorAll("#mylist li");

loadEventListeners();
function loadEventListeners() {
	document.addEventListener("DOMContentLoaded", todoItems);
}

input.onkeypress = InputError;
function InputError() {
	input.style.border = "2px solid teal";
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

			chkBox.style.backgroundColor = "red";

			chkBox.addEventListener("click", function () {
				if (chkBox.checked == true) {
					listTag.style.backgroundColor = "#eaeaea";
					listTag.style.boxShadow = "0 0 3px 2px #eaeaea";
					listTag.style.color = "lightgray";
				} else {
					listTag.style.boxShadow = `0 0 3px 2px ${RandomColorGenerator()}`;
					listTag.style.backgroundColor = "white";
					listTag.style.color = "black";
				}
			});

			var timeSpan = document.createElement("span");
			timeSpan.setAttribute("class", "timeSpan");
			timeSpan.innerText = Time();

			var deleteButton = document.createElement("button");

			let deleteIcon = document.createElement("i");
			deleteIcon.setAttribute("class", "fas fa-trash");
			deleteIcon.setAttribute("id", "delete");
			deleteIcon.onclick = RemoveList;

			deleteButton.appendChild(deleteIcon);
			listTag.appendChild(deleteButton);
			listTag.appendChild(timeSpan);
			mylist.appendChild(listTag);
		});
	}
}

const todos = [];
addTodo.addEventListener("click", function (e) {
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
				listTag.style.color = "lightgray";
			} else {
				listTag.style.color = "black";
			}
		});

		var timeSpan = document.createElement("span");
		timeSpan.setAttribute("class", "timeSpan");
		timeSpan.innerText = Time();

		var deleteButton = document.createElement("button");

		let deleteIcon = document.createElement("i");
		deleteIcon.setAttribute("class", "fas fa-trash");
		deleteIcon.setAttribute("id", "delete");
		deleteIcon.onclick = RemoveList;

		deleteButton.appendChild(deleteIcon);
		listTag.appendChild(deleteButton);
		listTag.appendChild(timeSpan);
		mylist.appendChild(listTag);

		input.style.border = "2px solid teal";
		input.value = "";
	}
});

// Removing List
function RemoveList(e) {
	if (e.target.classList.contains("fa-trash")) {
		e.target.parentElement.parentElement.children[2].remove();
		e.target.parentElement.parentElement.remove();
		removeFromLocalSorage(e.target.parentElement.parentElement);
	}
}

// Removing From Local Storage
function removeFromLocalSorage(todo) {
	console.log(todo);
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

// const data = localStorage.getItem("todos");
// const to = JSON.parse(data);
// to.forEach(function (task) {
// 	// if (todos.values === null) {
// 	// 	console.log("sorry");
// 	// }
// 	console.log(task);
// });

function ListTag() {
	var listTag = document.createElement("li");
	listTag.style.boxShadow = `0 0 3px 2px ${RandomColorGenerator()}`;
	return listTag;
}

function check() {
	let checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	checkBox.setAttribute("id", "checkbox");
	checkBox.className = "checkbox-custom";
	checkBox.style.marginRight = "5px";
	return checkBox;
}

// function check() {
// 	let listTag = ListTag();
// 	console.log(listTag.children[0]);
// 	console.log(listTag.children[0].checked);
// 	if ((document.getElementById("checkbox").checked = true)) {
// 		listTag.style.color = "red";
// 	}
// 	if ((document.getElementById("checkbox").checked = false)) {
// 		listTag.style.color = "green";
// 	}
// }

// function ListParagraph() {
// 	var listPara = document.createElement("p");
// 	listPara.style.paddingLeft = "5px";
// 	return listPara;
// }

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
