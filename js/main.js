// Owl Carousel
$('#blog-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    responsive:{
        0:{
            items: 1,
            nav: true
        },
        600:{
            items: 1,
            nav: false
        },
        1000:{
            items: 2,
            nav: true,
            loop: false
        }
    }
});

$('#doctor-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass:true,
    dots: true,
    responsive:{
        0:{
            items: 1,
            nav: true
        },
        600:{
            items: 1,
            nav: false
        },
        1000:{
            items: 3,
            nav: true,
            loop: false
        }
    }
});

$('#hospital-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass:true,
    dots: true,
    responsive:{
        0:{
            items: 1,
            nav: true
        },
        600:{
            items: 1,
            nav: false
        },
        1000:{
            items: 3,
            nav: true,
            loop: false
        }
    }
});

// Navigation Toggle
const toggle = document.querySelector(".toggle");
const navHeader = document.querySelector("header");

const toggleNav = () => {
    navHeader.classList.toggle('active');
}

toggle.addEventListener('click',() => toggleNav());

// Accordion
var tab = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}