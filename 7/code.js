$(document).ready(function() {
    $(".gallery").slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
         responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: true,
              infinite: true,
              slidesToScroll: 1,
              slidesToShow: 1
            }
          }
        ]
      });
    });
