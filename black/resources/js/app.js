import AirDatepicker from 'air-datepicker';
import {Fancybox, Carousel, Panzoom} from '@fancyapps/ui';
import IMask from 'imask';

new AirDatepicker('#rangeDateFrom');
new AirDatepicker('#rangeDateTo');

(function ($) {
  $('.burger').click(function () {
    $('#burger').toggleClass('active');
  });

  $('.accordeon_headline').on('click', function () {
    $(this).parent().toggleClass('open');
  });

  $('body').click(function (e) {
    if ($(e.target).is('.js-close')) {
      $('body').removeClass('modal-active');
    }
  });

  $('.js-modal-init').click(function (e) {
    let car_id = $(e.target).parents('.car').data('id');
    let modal_inner = $('.modal');

    console.log(car_id);

    $.ajax({
      url: '/wp-admin/admin-ajax.php',
      type: 'POST',
      dataType: 'json',
      data: {
        action: 'get_modal',
        car_id: car_id
      },
      success: function (data) {
        modal_inner.html(data.data);
        $('body').addClass('modal-active');

        var phoneMask = IMask(document.getElementById('tel'), {
          mask: '+{0}(000)000-00-00'
        });

        const mainCarousel = new Carousel(document.querySelector('#slider'), {
          Dots: false
        });

        const thumbCarousel = new Carousel(document.querySelector('#thumbs'), {
          Sync: {
            target: mainCarousel,
            friction: 0
          },
          Dots: false,
          Navigation: false,
          center: true,
          infinite: false
        });
      },
      error: function (jqXHR, status, errorThrown) {
        console.log('ОШИБКА: ' + errorThrown);
      }
    });
  });
})(jQuery);
