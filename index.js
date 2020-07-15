/* NAVBAR ANIMATION */
let winWidth = window.innerWidth;
if(winWidth > 1000) {
	window.addEventListener('scroll', ()=>{
		console.log(winWidth)
		let logo = document.querySelector('.main-logo')
		let navbar = document.querySelector('.navbar')
		let scrollVal = document.querySelector('.landing').getBoundingClientRect().top
		if(scrollVal < 0){
			logo.style.height = "2.2em"
			navbar.style.padding = "1.1em 0"
		} else {
			logo.style.height = "2.9em"
			navbar.style.padding = "1.7em 0"
		}
	})
}

/* SLIDER FUNCTIONALITY*/
let slider = document.querySelector('.slider')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let imgShown = 1
let imagesCount = 3
nextBtn.addEventListener('click', ()=>{
	if(imgShown==imagesCount){
		imgShown = 1
		slider.style.background = `url('img${imgShown}.jpg') center/cover`
	} else {
		imgShown++;
		slider.style.background = `url('img${imgShown}.jpg') center/cover`
	}
})
prevBtn.addEventListener('click', ()=>{
	if(imgShown==1){
		imgShown = imagesCount
		slider.style.background = `url('img${imgShown}.jpg') center/cover`
	} else {
		imgShown--;
		slider.style.background = `url('img${imgShown}.jpg') center/cover`
	}
})