let lastY = document.body.getBoundingClientRect().y;
const header = document.querySelector("header");

document.addEventListener("scroll", (event) => {
	if (lastY >= document.body.getBoundingClientRect().y){
        console.log(document.body.getBoundingClientRect());
        header.classList.add("hide");
	}else{
        header.classList.remove("hide");
    }
    lastY = document.body.getBoundingClientRect().y;
})