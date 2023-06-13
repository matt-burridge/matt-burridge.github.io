// top button
let toTopBtn = document.getElementById("toTopBtn");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function openModal() {
    document.getElementById("mattModal").style.display = "block";
};

function closeModal() {
    document.getElementById("mattModal").style.display = "none";
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
};
function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    var i,
        slides = document.getElementsByClassName("mattSlides");
        /*dots = document.getElementsByClassName("demo"),*/
        /*captionText = document.getElementById("caption");*/
        if (n > slides.length) {slideIndex = 1;}
        if (n < 1) {slideIndex = slides.length;}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        /*for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }*/
        slides[slideIndex-1].style.display = "block";
        /*dots[slideIndex-1].className += " active";*/
        /*captionText.innerHTML = dots[slideIndex-1].alt;*/

};

