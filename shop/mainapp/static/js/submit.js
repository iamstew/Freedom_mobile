let logInArr = document.querySelectorAll("label.log-in__field"),
    signUpArr = document.querySelectorAll("label.sign-up__field"),
    allFields = logInArr + signUpArr
allFields.forEach(field => {
    if (field.lastElementChild.value != ""){
        item.classList.remove("invalid")
    }
});

function submit(event){
	let elem = event.target,
		auth = elem.dataset.auth;
	if (auth === "log-in"){
        logInArr.forEach(item => {
            addInvalid(item)
        });
    }else if (auth === "sign-up"){
        signUpArr.forEach(item => {
            addInvalid(item)
        });
    }
}

function addInvalid(item){
    if (item.lastElementChild.value == ""){
        item.classList.remove("invalid")
        item.classList.add("invalid")
    }
}
