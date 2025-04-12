const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    };

// header container
ScrollReveal().reveal(".sec1 p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".sec1 h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".sec1 button", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".sec1 img", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".sec2 h1", {
    ...scrollRevealOption,
    origin: "left",
    });
ScrollReveal().reveal(".sec2 p", {
        ...scrollRevealOption,
        origin: "left",
        });
ScrollReveal().reveal(".sec2 button", {
            ...scrollRevealOption,
            origin: "left",
            });
                

ScrollReveal().reveal(".sec2 .card", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".sec4 .card", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".sec5 h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".sec5 h3", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".sec5 p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".sec5 a", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".sec5 i", {
    ...scrollRevealOption,
    delay: 500,
});







let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}





function showSlides(n) {
    const slides = document.getElementsByClassName("testimonial-slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

// Event Listeners
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
});











// SHOW SCROLL UP 
const scrollUp = () =>{
const scrollUp = document.getElementById('scroll-up')
// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
    }
window.addEventListener('scroll', scrollUp)
            