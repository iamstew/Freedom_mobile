function toggleForm(event){
	let logIn = document.querySelector(".log-in"),
		signUp = document.querySelector(".sign-up"),
		logToggler = document.querySelector(".log-in__toggle"),
		signToggler = document.querySelector(".sign-up__toggle"),
		thumbStyle = document.querySelector(".active-thumb").style,
		data = event.target.closest(".toggler").dataset.button

	if (data === "log-in"){
		signUp.classList.remove("active")
		logIn.classList.add("active")
		logToggler.classList.add("active")
		signToggler.classList.remove("active")
		thumbStyle.transform = "translateX(0)"
		// document.querySelector(".auth-form__section").style.transform = "rotateY(0)"

	}else if (data === "sign-up"){
		signUp.classList.add("active")
		logIn.classList.remove("active")
		logToggler.classList.remove("active")
		signToggler.classList.add("active")
		thumbStyle.transform = "translateX(100%)"
		// document.querySelector(".auth-form__section").style.transform = "rotateY(90deg)"
	}
}
