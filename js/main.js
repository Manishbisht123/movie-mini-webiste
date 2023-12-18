// header sticky

let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});



//menu toggle

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('ri-close-fill');
    navbar.classList.toggle('active');
}


// swiper 

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        loop: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Upcoming slider

var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        668: {
            slidesPerView: 4,
        },
        778: {
            slidesPerView: 5,
        },
    }
});


// comedy slider

var swiper = new Swiper(".comedy-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        668: {
            slidesPerView: 4,
        },
        778: {
            slidesPerView: 5,
        },
    }
});


// action slider

var swiper = new Swiper(".action-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        668: {
            slidesPerView: 4,
        },
        778: {
            slidesPerView: 5,
        },
    }
});


// romance slider

var swiper = new Swiper(".romantic-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        668: {
            slidesPerView: 4,
        },
        778: {
            slidesPerView: 5,
        },
    }
});



// preloader

setTimeout(function () {
    $('#loader').fadeToggle();
}, 3000);

