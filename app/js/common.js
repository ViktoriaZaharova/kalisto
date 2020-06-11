$('.main-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    fade: true,
    infinity: true
});

$('.photo-demonstration__slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinity: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.reviews-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinity: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.certificate-slider').slick({
    slidesToShow: 6,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinity: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.sale-slider').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true,
    infinity: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.playpause').click(function () {
    $('.playpause, .video-poster').fadeOut();
});

$(".header-bottom .menu__links").click(function (e) {
    e.preventDefault();
    var id = $(this).attr('data-menu'),
        content = $('.drop-menu[data-menu="'+ id +'"]');

    $(".header-bottom .menu__links").removeClass('active');
    $(this).toggleClass('active');

    $('.drop-menu.active').removeClass('active');
    content.toggleClass('active');
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".header-bottom .menu__links").removeClass('active');
        $('.drop-menu').fadeOut(); // скрываем его
    }
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
   $('.menu-main__nav').fadeIn();
});

$('.btn-close').click(function () {
    $('.overlay').fadeOut();
    $('.menu-main__nav, .mobile-menu__wrap, .mobile-menu').fadeOut();
});

$('.mobile-menu .menu__links').click(function (e) {
    e.preventDefault(e);
    // $('.mobile-menu .menu__links').removeClass('open');
    $(this).toggleClass('open').siblings('.drop-menu').slideToggle();

});

$('.mobile-menu .drop-menu__box h5').click(function () {
    // $('.mobile-menu .drop-menu__box h5').removeClass('open');
    $(this).toggleClass('open').siblings('.drop-menu__box-wrap').slideToggle();
});

$('.mobile-menu .drop-menu__list .item-links').click(function (e) {
    e.preventDefault();
    // $('.mobile-menu .drop-menu__list .item-links').removeClass('open');
    $(this).toggleClass('open').siblings('.drop-menu__list-submenu').slideToggle();
});

$('.btn-menu__mobile').click(function () {
   $('.mobile-menu').fadeIn();
});


$( function() {
    //Сменим язык календаря на русский
    $.datepicker.setDefaults(
        {
            closeText: 'Закрыть',
            prevText: '',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });

} );

$( function() {
    $( "#datepicker" ).datepicker();
} );


// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [60.000996, 30.251746],
        zoom: 16
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [60.000996, 30.251746] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер

        }, {
            // iconImageHref: 'img/logo.png',  // картинка иконки
            iconImageSize: [300, 138],                                      // размеры картинки
            iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}