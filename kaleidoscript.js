window.addEventListener('DOMContentLoaded', () => {
    class Kaleidoscript {

    	run(text) {
    		this.renderResponse(this.buildResponse(this.scramble(text)));
    	}

    	renderResponse(elem) {
    		const responses = document.getElementById("responses");
    		responses.appendChild(elem);
    		responses.scrollTo(0, responses.scrollHeight);
    	}

    	buildResponse(text) {
    		let result = document.createElement("div");
    		result.setAttribute("class", "response border pad bg-vintage inconsolata");
    		result.innerText = text;
    		return result;
    	}

		scramble(text) {
			let result = "";
			if (text.length == 0) {
    			result = "Thank you for showing your curiosity! Try adding and submitting text to the input field for more interesting results..."
    		} else {
				text = text.split(" ");
				while(text.length > 0) {
					let wordIndex = Math.floor(Math.random() * Math.floor(text.length));
					let word = text[wordIndex];
					result += word + " ";
					text.splice(wordIndex, 1);
				} 
			}
			return result;
		}

		clear() {
			let responses = document.getElementsByClassName("response");
			while (responses[0]) {
				responses[0].remove();
			}
		}
	}

	const instance = new Kaleidoscript();
	const submit = document.getElementById("submit-button");
	const input = document.getElementById("input-field");
	const clear = document.getElementById("clear")

	submit.addEventListener("mouseup", () => { instance.run(input.value) });
	input.addEventListener("keypress", (event) => {
		if(event.which == 13 && !event.shiftKey) {
			event.preventDefault();
			instance.run(input.value);
		}	
	});
	clear.addEventListener("mouseup", () => { instance.clear() });
});

