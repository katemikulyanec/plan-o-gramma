     jQuery(function ($) {
         $("[type='tel']").mask("+7 (999) 999-9999");
     });

     $('#name').on('keypress', function () {
         var that = this;

         setTimeout(function () {
             var res = /[^а-я ]/g.exec(that.value);
             console.log(res);
             that.value = that.value.replace(res, '');
         }, 0);
     });


     $(document).ready(function () {

         //fancybox
         $(".fancybox").fancybox();

         //calculation slider
         $('#calculation').owlCarousel({
             loop: true,
             nav: true,
             responsiveClass: true,
             responsive: {
                 0: {
                     items: 1,
                     nav: false,
                     dots: true,
                     loop: true
                 },
                 600: {
                     items: 1,
                     nav: false,
                     dots: true,
                     loop: true
                 },
                 1024: {
                     items: 2,
                     nav: true,
                     dots: true,
                     loop: true
                 },
                 1224: {
                     items: 2,
                     nav: true,
                     dots: false,
                     loop: true
                 }
             }
         })

         //partners slider           
         $('#partners').owlCarousel({
             loop: true,
             nav: true,
             responsiveClass: true,
             responsive: {
                 0: {
                     items: 1,
                     nav: false,
                     dots: true,
                     loop: true
                 },
                 600: {
                     items: 2,
                     nav: false,
                     dots: true,
                     loop: true
                 },
                 1024: {
                     items: 4,
                     nav: true,
                     dots: true,
                     loop: true
                 },
                 1224: {
                     items: 4,
                     nav: true,
                     dots: false,
                     loop: true
                 }
             }
         })

         //rules-slider__1          
         $('#rules-slider__1').owlCarousel({
             loop: true,
             nav: true,
             responsiveClass: true,
             responsive: {
                 0: {
                     items: 1,
                     nav: false,
                     dots: true,
                     loop: true
                 },
                 1024: {
                     items: 1,
                     nav: true,
                     dots: false,
                     loop: true
                 }
             }
         })

         //rules-slider__2          
         $('#rules-slider__2').owlCarousel({
             loop: true,
             nav: true,
             responsiveClass: true,
             responsive: {
                 0: {
                     items: 1,
                     nav: false,
                     dots: true,
                     loop: true
                 },
                 1024: {
                     items: 1,
                     nav: true,
                     dots: false,
                     loop: true
                 }
             }
         })


         //responsive-tabs
         $.fn.responsiveTabs = function () {

             return this.each(function () {
                 var el = $(this),
                     tabs = el.find('dt'),
                     content = el.find('dd'),
                     placeholder = $('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);

                 tabs.on('click', function () {
                     var tab = $(this);

                     tabs.not(tab).removeClass('active');
                     tab.addClass('active');

                     placeholder.html(tab.next().html());
                 });

                 tabs.filter(':first').trigger('click');
             });

         }
         $('.responsive-tabs').responsiveTabs();

     });


     //header menu
     (function ($) {
         $.fn.menumaker = function (options) {

             var cssmenu = $(this),
                 settings = $.extend({
                     title: "Menu",
                     format: "dropdown",
                     sticky: false
                 }, options);

             return this.each(function () {
                 cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
                 $(this).find("#menu-button").on('click', function () {
                     $(this).toggleClass('menu-opened');
                     var mainmenu = $(this).next('ul');
                     if (mainmenu.hasClass('open')) {
                         mainmenu.hide().removeClass('open');
                     } else {
                         mainmenu.show().addClass('open');
                         if (settings.format === "dropdown") {
                             mainmenu.find('ul').show();
                         }
                     }
                 });

                 cssmenu.find('li ul').parent().addClass('has-sub');

                 multiTg = function () {
                     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                     cssmenu.find('.submenu-button').on('click', function () {
                         $(this).toggleClass('submenu-opened');
                         if ($(this).siblings('ul').hasClass('open')) {
                             $(this).siblings('ul').removeClass('open').hide();
                         } else {
                             $(this).siblings('ul').addClass('open').show();
                         }
                     });
                 };

                 if (settings.format === 'multitoggle') multiTg();
                 else cssmenu.addClass('dropdown');

                 if (settings.sticky === true) cssmenu.css('position', 'fixed');

                 resizeFix = function () {
                     if ($(window).width() > 1024) {
                         cssmenu.find('ul').show();
                     }

                     if ($(window).width() <= 1024) {
                         cssmenu.find('ul').hide().removeClass('open');
                     }
                 };
                 resizeFix();
                 return $(window).on('resize', resizeFix);

             });
         };
     })(jQuery);

     (function ($) {
         $(document).ready(function () {

             $("#cssmenu").menumaker({
                 title: "Menu",
                 format: "multitoggle"
             });

         });
     })(jQuery);
