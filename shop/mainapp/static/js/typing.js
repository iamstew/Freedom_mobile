var index = 0;

function typing(){
	let	text = "Freedom Mobile",
		elem = document.querySelector(".typing");
	
	if (index < text.length){
		if (text.charAt(index) == " "){
			if (document.body.getBoundingClientRect().width <= 600){
				elem.innerHTML += " ";
			}else{
				elem.innerHTML += "\u00A0";
			}
		} 
		else elem.innerHTML += text.charAt(index);
		index++;
		setTimeout(typing, 100);
	}
}

window.onload = (event) => {
	setTimeout(typing,1200);
}