let slideContainer = document.getElementById('slider-container')
let leftSlide = document.querySelector('.left-slide')
let rightSlide = document.querySelector('.right-slide')
let downBtn = document.querySelector('.down-btn')
let upBtn = document.querySelector('.up-btn')
let slideLength = rightSlide.querySelectorAll('div').length

/**
 * create variable activeSlide index
 * scrool to top leftslide element by negative vh value
 * function change slide
 * get height of slider container
 */

let activeSlideIndex = 0
leftSlide.style.top = `-${(slideLength - 1) * 100}vh`

upBtn.addEventListener('click', () => slideChange('up'))
downBtn.addEventListener('click', () => slideChange('down'))
// slide change function
let slideChange = (direction) => {
  let containerHeight = slideContainer.clientHeight
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex > slideLength - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLength - 1
    }
  }
  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * containerHeight
  }px)`
  leftSlide.style.transform = `translateY(${
    activeSlideIndex * containerHeight
  }px)`
  console.log(activeSlideIndex)
}
