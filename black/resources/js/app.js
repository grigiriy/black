import AirDatepicker from 'air-datepicker';
import {Fancybox, Carousel, Panzoom} from '@fancyapps/ui';

new AirDatepicker('#rangeDateFrom');
new AirDatepicker('#rangeDateTo');


const mainCarousel = new Carousel(document.querySelector("#slider"), {
  Dots: false
});

const thumbCarousel = new Carousel(document.querySelector("#thumbs"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  infinite: false,
});



(function ($) {

  $('.burger').click(function () {
    $('#burger').toggleClass('active');
  });

})(jQuery);