const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

function getRandom() {
	const randomNumber = Math.floor(Math.random() * hex.length)
	return randomNumber
}

btn.addEventListener("click", () => {
	let hexColor = "#"

	for (let i = 0; i < 6; i++) {
		console.log(hexColor += hex[getRandom()])
	}
				
	color.textContent = hexColor
	document.body.style.backgroundColor = hexColor
})
