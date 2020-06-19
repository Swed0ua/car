let idSlide = 3;
let margin = 15;
let Slider = document.getElementsByClassName('slide');
let Img = document.getElementsByClassName('img__slide');

setTimeout(nextSlide(0), 0);


function nextSlide (e) {
    Slider[idSlide].classList.remove('this__slide');
    Img[idSlide].style.opacity = '0';
    idSlide = idSlide + e;
    e = e;
    if (idSlide == Slider.length){
        idSlide = 0;
    }
    if(idSlide == -1){
        idSlide = Slider.length-1;
    } 
    sliderGear(idSlide);
}

function currentSlide (n) {
    Slider[idSlide].classList.remove('this__slide');
    Img[idSlide].style.opacity = '0';
    idSlide = n - 1;
    sliderGear(idSlide);
}

function sliderGear (idSlide) {
    Slider[idSlide].classList.add('this__slide');
    Img[idSlide].style.opacity = '100%';
}

