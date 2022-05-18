let input = document.querySelector("#task");
let button = document.querySelector(".button");
let list = document.querySelector("#list");


// Todo Add
button.addEventListener("click", (e) => {
	if (input.value.trim() === "") {
		let alertToast = document.querySelector('#liveToast');
		alertToast.classList.remove('hide');
		alertToast.classList.add('show');

	} else {

		let li = document.createElement("li");
		li.innerHTML = input.value.trim() + `<i class="fas fa-trash"></i>`;
		list.appendChild(li);

		let LS;
		if(localStorage.getItem("ls") === null) {
			LS = [];
		} else {
			LS = JSON.parse(localStorage.getItem("ls"));
		}

		LS.push(input.value);
		localStorage.setItem("ls", JSON.stringify(LS));
		input.value = "";
		let successToast = document.querySelector('#successToast');
		successToast.classList.remove('hide');
		successToast.classList.add('show');
	}
	e.preventDefault();
});


const listLocal = JSON.parse(localStorage.getItem("ls"));
listLocal.forEach(element => {
	let li = document.createElement("li");
	li.innerHTML = element + `<i class="fas fa-trash"></i>`;
	list.appendChild(li);
});



// Todo Delete
list.addEventListener("click", (e) => {
	if (e.target.classList.contains('fa-trash')) {
		e.target.parentElement.remove();
		localStorage.clear();
	}	
});


// Todo Completed
list.addEventListener("click", (e) => {
	e.target.classList.toggle('checked');
});