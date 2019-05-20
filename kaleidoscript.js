window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    class Kaleidoscript {

    	run(text){
    		this.buildResponse(this.scramble(text));
    	}

    	buildResponse(text){
    		let result = document.createElement("div");
    		result.setAttribute("class", "response")
    		result.innerText = text;
    		document.body.appendChild(result)
    	}

		scramble(text){
			let result = "";
			text = text.split(" ");
			while(text.length > 0) {
				let wordIndex = Math.floor(Math.random() * Math.floor(text.length));
				let word = text[wordIndex];
				result += word + " ";
				text.splice(wordIndex, 1);
			} 
			return result
		}

	}

	const kaw = new Kaleidoscript();
	const submit = document.getElementById("submit");
	const input = document.getElementById("input");
	submit.addEventListener("mouseup", (text) => {kaw.run(input.value)});

});

