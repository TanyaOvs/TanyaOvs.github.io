$(document).ready(function() {
    $(".gallery").slick({
        nextArrow: "<img src='images/arrowRight.png' class='next'"+
            "style=alt='2'>",
        prevArrow: "<img src='images/arrowLeft.png' class='prev'"+
            "style= alt='1'>",
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
