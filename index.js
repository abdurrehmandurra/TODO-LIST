const addTodo = document.getElementById("addBtn");
const input = document.getElementById("inputtext");
var mylist = document.getElementById("mylist");
var li = document.querySelectorAll("#mylist li");

input.addEventListener("keypress", function () {
	input.style.border = "2px solid teal";
});

addTodo.addEventListener("click", function () {
	if (input.value == "") {
		input.style.border = "2px solid red";
	} else {
		var listTag = document.createElement("li");
		// listTag.setAttribute("id", "listItem");
		// listTag.setAttribute("class", "list-group-item");

		var listPara = document.createElement("p");
		listPara.innerText = input.value;

		var timeSpan = document.createElement("span");
		timeSpan.setAttribute("id", "timeSpan");
		timeSpan.innerText = Time();

		var deleteButton = document.createElement("button");
		// deleteIcon.setAttribute("class", "close btn btn-close");
		// deleteIcon.setAttribute("id", "delete");
		// deleteIcon.innerHTML = "&times";

		let deleteIcon = document.createElement("i");
		deleteIcon.setAttribute("class", "fas fa-trash");
		deleteIcon.setAttribute("id", "delete");

		listPara.innerText.trim();
		listTag.innerText.trim();

		deleteButton.appendChild(deleteIcon);
		listTag.appendChild(listPara);
		listTag.appendChild(deleteButton);
		listTag.appendChild(timeSpan);
		mylist.appendChild(listTag);

		input.style.border = "1px solid teal";
		input.value = "";
		console.log(listPara.innerText.trim());
	}

	deleteButton.addEventListener("click", function () {
		listTag.remove();
	});
});

function Time() {
	let date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let time;

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	hour = hour % 12;
	hour = hour ? hour : 12;

	if (date.getHours() >= 12) {
		time = hour + " : " + minutes + " pm";
	} else {
		time = hour + " : " + minutes + " am";
	}
	return time;
}
