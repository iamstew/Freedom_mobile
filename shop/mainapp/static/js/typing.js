var index = 0;

function typing(){
	let	text = "Freedom Mobile",
		elem = document.querySelector(".typing");
	
	if (index < text.length){
		elem.innerHTML += text.charAt(index);
		index++;
		setTimeout(typing, 80);
	}
}

window.onload = (event) => {
	setTimeout(typing,1200);
}