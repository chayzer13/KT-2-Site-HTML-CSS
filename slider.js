const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
const totalItems = sliderContainer.children.length; 

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; 
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; 
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; 
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; 
});
