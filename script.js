const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');
const images = document.querySelectorAll('.img');
const texts = document.querySelectorAll('.text');
const slidesLength = images.length;

let activeIndex = 0;
let activeImg = images[activeIndex];
let activeText = texts[activeIndex];

let imgIndex;
let textIndex;
let direction;


function setSlides(activeIndex) {
  images.forEach((image, imgIndex) => {
    let position = 'nextSlide';
  
    if (imgIndex === activeIndex) {
      position = 'activeSlide';
    }
    if (imgIndex === activeIndex - 1 || (activeIndex === 0 && imgIndex === slidesLength - 1)) {
      position = 'lastSlide';
    }
    image.className = `img ${position}`
  })

  texts.forEach((text, textIndex) => {
    let textPosition = 'nextSlide';
    console.log(textPosition)
    if (textIndex === activeIndex) {
      textPosition = 'activeSlide';
    }
    if (textIndex === activeIndex - 1 || (activeIndex === 0 && textIndex === slidesLength - 1)) {
      textPosition = 'lastSlide'
    }
    text.className = `text ${textPosition}`
  })
}

setSlides(activeIndex)

function changeIndex(direction) {
  if (direction === 'down') {
    activeIndex -= 1;
    
    console.log(activeIndex)
  }
  if (direction === 'up') {
    activeIndex += 1
    console.log(direction)
    
  }
  console.log(activeIndex)
  checkIndex()
  setSlides(activeIndex)
  return activeIndex
}

function checkIndex() {
  let lastIndex = slidesLength - 1;
  if (activeIndex < 0) {
    activeIndex = lastIndex;
  }
  if (activeIndex > slidesLength - 1) {
    activeIndex = 0;
  }
}

btnDown.addEventListener('click', () => changeIndex('down'))
btnUp.addEventListener('click', () => changeIndex('up'))
