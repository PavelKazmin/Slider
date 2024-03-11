const sliderLine = document.querySelector('.slider-line')
const prevButton = document.querySelector('.prev-btn')
const nextButton = document.querySelector('.next-btn')
const dots = document.querySelectorAll('.dot')
const links = document.querySelectorAll('.link')
let position = 0
let dotIndex = 0
let linkIndex = 0

//Functions

const nextSlide = () => {
	if(position < (dots.length -1) * 679) {
			position += 679
			dotIndex++
			linkIndex++
	} else {
			position = 0
			dotIndex = 0
			linkIndex = 0
		}

	sliderLine.style.left = -position + 'px'
	thisSlide(dotIndex)
	linksActive(linkIndex)
}

const prevSlide = () => {
	if(position > 0) {
			position -= 679
			dotIndex--
			linkIndex--
	} else {
			position = (dots.length -1) * 679
			dotIndex = (dots.length -1)
			linkIndex = (dots.length -1)
		}

	sliderLine.style.left = -position + 'px'
	thisSlide(dotIndex)
	linksActive(linkIndex)
}

const thisSlide = (index) => {
	for (let dot of dots) {
		dot.classList.remove('dot-active')
	}
	dots[index].classList.add('dot-active')
}

const linksActive = (index) => {
	for (let link of links) {
		link.classList.remove('link-active')
	}
	links[index].classList.add('link-active')
}


//EVENTLISTENERS

nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)


dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		position = 679 * index
		sliderLine.style.left = -position + 'px'
		dotIndex = index
		linkIndex = dotIndex
		linksActive(linkIndex)
		thisSlide(dotIndex)
	})
})

links.forEach((link, index) => {
	link.addEventListener('click', () => {
		position = 679 * index
		sliderLine.style.left = -position + 'px'
		linkIndex = index
		dotIndex = linkIndex
		thisSlide(dotIndex)
		linksActive(linkIndex)
	})
})

//SETINTERVAL
setInterval( () => {
	nextSlide()
}, 5000)

