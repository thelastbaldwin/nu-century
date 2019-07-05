document.addEventListener("DOMContentLoaded", function(){
    //slideshow
    const slides = document.querySelectorAll(".slide");
    const activeClass = "active";
    let slideIndex = 0;
    const slideDelay = 2000;
    const slideInterval = setInterval(function(){
        ++slideIndex;
        slideIndex %= slides.length;
        slides.forEach(function(slide){
            slide.classList.remove(activeClass);
        });
        slides[slideIndex].classList.add(activeClass);
    }, slideDelay);

    //faq
    const answers = document.querySelectorAll(".faq-answer");
    const faqSection = document.querySelector("#faq");
    const faqActiveClass = "active";
    faqSection.addEventListener("click", function(event){
        if (event.target.matches(".faq-question")){
            event.preventDefault();
            event.target.nextElementSibling.classList.toggle(faqActiveClass);
        }
    });
});