
    // let currentIndex = 0;
    // // Slide left functionality for the specific slider
    // window.slideLeft = function(blockId) {
    //   const announcements = document.querySelectorAll(`#slider-content-${blockId} .announcement`);
    //   if (currentIndex > 0) {
    //     currentIndex--;
    //   } else {
    //     currentIndex = announcements.length - 1;
    //   }
    //   document.getElementById(`slider-content-${blockId}`).style.transform = `translateX(-${currentIndex * 100}%)`;
    // };

    // // Slide right functionality for the specific slider
    // window.slideRight = function(blockId) {
    //   const announcements = document.querySelectorAll(`#slider-content-${blockId} .announcement`);
    //   if (currentIndex < announcements.length - 1) {
    //     currentIndex++;
    //   } else {
    //     currentIndex = 0;
    //   }
    //   document.getElementById(`slider-content-${blockId}`).style.transform = `translateX(-${currentIndex * 100}%)`;
    // };

    $('.slide').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
