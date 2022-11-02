function toggleForm(event){
	let logIn = document.querySelector(".log-in")
	let signUp = document.querySelector(".sign-up")
	let list = event.target.closest(".toggler").parentNode.classList

	if (!list.contains("active")){
		if (list === logIn.classList) {
			list.toggle("active")
			signUp.classList.remove("active")
		}else if (list === signUp.classList){
			list.toggle("active")
			logIn.classList.remove("active")
		}
	}
}
