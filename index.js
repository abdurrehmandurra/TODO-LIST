const addTodo = document.getElementById("addBtn");
const input = document.getElementById("inputtext");
var ul = document.getElementById("mylist");
var li = document.querySelectorAll("#mylist li");
var deleteTodo = document.getElementById("delete");
var remov = document.getElementsByClassName("fa-trash");

addTodo.addEventListener("click", function () {
	if (input.value == "") {
		input.addEventListener("keypress", function () {
			input.style.border = "3px solid teal";
		});
		input.style.border = "3px solid red";
	} else {
		var listTag = document.createElement("li");
		listTag.setAttribute("id", "listItem");
		listTag.setAttribute("class", "list-group-item");

		var listPara = document.createElement("p");
		listPara.textContent = input.value;

		var deleteButton = document.createElement("button");
		// deleteIcon.setAttribute("class", "close btn btn-close");
		// deleteIcon.setAttribute("id", "delete");
		// deleteIcon.innerHTML = "&times";

		let deleteIcon = document.createElement("i");
		deleteIcon.setAttribute("class", "fas fa-trash");
		deleteIcon.setAttribute("id", "delete");

		// deleteIcon.innerHTML = "&times";

		deleteButton.appendChild(deleteIcon);
		listTag.appendChild(listPara);
		listTag.appendChild(deleteButton);
		ul.appendChild(listTag);

		input.style.border = "3px solid teal";
		input.value = "";
	}

	deleteButton.addEventListener("click", function () {
		listTag.remove();
	});
});

// if (ul.children >= 1) {
// 	deleteTodo.addEventListener("click", function () {
// 		ul.removeChild(li);
// 	});
// }

// ul.addEventListener("click", removeEvent);
// function removeEvent(e) {
// 	if (e.target.classList.contains("fa-trash")) {
// 		ul.removeChild(e.target.parentElement);
// 		// card.removeChild(card);
// 		ul.removeChild(li);
// 	}
// }

// if (card.hasChildNodes) {
// 	deleteTodo.addEventListener("click", function () {
// 		var listTag = document.getElementById("listItem");
// 		listTag.remove();
// 	});
// }
// deleteTodo.addEventListener("click", function () {
// 	document.getElementById("listItem").remove();
// });

// console.log(card.children);
