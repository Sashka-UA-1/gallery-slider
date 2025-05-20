const sliders = document.querySelectorAll('.slider')

function randomSliderActive() {
	sliders[Math.floor(Math.random() * sliders.length)].classList.add('active')
}

randomSliderActive()

sliders.forEach(slider => {
	slider.addEventListener('click', () => { sliderClick(slider) })
})

function sliderClick(slider) {
	removeActiveSlider()
	slider.classList.add('active')
}

function removeActiveSlider() {
	sliders.forEach(slider => {
		slider.classList.remove('active')
	})
}

