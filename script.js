//your JS code here. If required.
const buttonContainer = document.querySelector('#buttons')
const buttonNames = ['applause','boo','gasp','tada','victory','wrong']

buttonNames.map(item => {
	const button = document.createElement('button')
	button.innerText = item
	button.className = "btn"
	buttonContainer.appendChild(button)
})
