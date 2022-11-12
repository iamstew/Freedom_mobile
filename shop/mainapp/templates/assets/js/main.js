function toggleForm(event){
	let logIn = document.querySelector(".log-in"),
		signUp = document.querySelector(".sign-up"),
		thumb = document.querySelector(".active-thumb"),
		data = event.target.closest(".toggler").dataset.button

	if (data === "log-in"){
		signUp.classList.remove("active")
		logIn.classList.add("active")
		thumb.classList.remove("right")
	}else if (data === "sign-up"){
		signUp.classList.add("active")
		logIn.classList.remove("active")
		thumb.classList.add("right")
	}
}
