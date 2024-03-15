const menuicon = document.querySelector(".menu-icon");
const menulist = document.querySelector(".menu-list");
const navbar = document.querySelector(".navbar-1");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show-list");
    navbar.classList.toggle("icon-menu");
});


$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
});