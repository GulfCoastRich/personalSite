const slides = document.querySelectorAll(".review-item");
const buttons = document.querySelectorAll(".slide-ctrl-container button");

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length-1 ? current + 1: 0; 
let previous = current > 0 ? current - 1 : slides.length-1;

const updateSlides = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active', 'previous', 'next');
    })

    slides[current].classList.add('active');
    slides[previous].classList.add("previous");
    slides[next].classList.add("next");

}


const goToNum = (index) => {
    current = index;
    next = current < slides.length - 1 ? current + 1 : 0;
    previous = current > 0 ? current - 1 : slides.length - 1;
    updateSlides();
}


const goToNext = () => current < slides.length - 1 ? goToNum(current + 1) : goToNum(0); 
const goToPrev = () => current > 0 ? goToNum(current - 1) : goToNum(slides.length - 1);

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => i === 0 ? goToPrev() : goToNext());
}

updateSlides();