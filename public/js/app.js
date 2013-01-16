var OCTANNER = window.OCTANNER || {};

// Global jQuery object is aliased to avoid polluting global namespace with "$"
OCTANNER = (function ($) {

    'use strict';

    return {

        // Hide mobile device URL bar
        scrollAddressBar: function () {
            if ((/(iPhone|iPod|BlackBerry|Android)/.test(window.navigator.userAgent)) && (!window.location.hash)) {
                setTimeout(function () {
                    if (!window.pageYOffset) {
                        window.scrollTo(0, 0);
                    }
                }, 100);
            }
        },

        // Show/hide responsive nav
        showHideMobileNav: function () {
            $('#menu-toggle').on('click',function(){
				$('nav','header').toggleClass('active');
			});
        },

        // Show/hide extra comment inputs on focus
        showFormInputs: function () {
            var $form = $('form');
            $form.find('.form_extra').hide();
            $form.find('textarea').focus(function () {
                $form.find('.form_extra').slideDown();
            });
        },
        
        wrapImages: function () {
            $("#posts img").each(function(i){
            	$(this).unwrap('<p />');
            	$(this).wrap('<figure />');
				if ($(this).attr("alt").length) {
					$(this).after('<figcaption><p>' + $(this).attr("alt") + "</p></figcaption>");
				}
			});
        },

        // Disable button/show message on submit
        showSubmitMessage: function () {
            $('form').submit(function () {
                var submit = $(this).find('input[type="submit"]');
                submit.attr('disabled', 'disabled').attr('value', submit.attr('data-message'));
            });
        },

        // New window
        openNewWindow: function () {
            $('a.external, a[href*=".pdf"], a[href*=".doc"], a[href*=".docx"], a[rel="external"]').click(function (e) {
                window.open($(this).attr('href'));
                e.preventDefault();
            });
        },

        // Insert "back-to-top" arrow for easy scrolling
        addBackToTopArrow: function () {
            // Conditional CSS check with JavaScript: http://adactio.com/journal/5429/
            var size = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
            if ((size.indexOf('tablet') !== -1) || (size.indexOf('monitor') !== -1)) {
                $('<div />').addClass('back-to-top').prependTo('body').hide();
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 50) {
                        $('.back-to-top').fadeIn(150);
                    } else {
                        $('.back-to-top').fadeOut(150);
                    }
                });
                $('.back-to-top').on('click', function () {
                    $('body, html').animate({
                        scrollTop: 0
                    }, 600);
                });
            }
        },

        // Swap an image into a CSS background for rounded corners and such
        swapImage: function () {
            $('.swap').each(function () {
                var $swap, $img;
                $swap = $(this);
                $img = $swap.find('img');
                $swap.css({ 'background': 'url(' + $img.attr('src') + ')' });
                $img.remove();
            });
        },

        // Wrap Google maps link around addresses
        addMapLink: function () {
            $('.add-map-link').each(function () {
                var address = $(this).text().replace(/\ /gi, '+'), url = 'http://maps.google.com/?q=' + address;
                $(this).wrap('<a href="' + url + '" />');
            });
        },

        // Replace with printer link
        addPrintLink: function () {
            $('.add-print-link').each(function () {
                $(this).text('Print');
                $(this).click(function (e) {
                    window.print();
                    e.preventDefault();
                });
            });
        },

        // Responsive <iframe>s
        // Requires http://fitvidsjs.com/
        fitVids: function () {

            // Original FitVids
            $('body').fitVids();

            // Patch for conflict in iframe & table-caption usage
            $('iframe, audio').each(function () {
                var $element, full_width, half_width;

                if ($(this).is('audio')) {
                    $element = $(this).parent().parent();
                } else {
                    $element = $(this).parent().parent().parent();
                }

                full_width = '100%';
                half_width = '50%';

                if ($element.hasClass('figure-full')) {
                    $element.css({ 'width': full_width });
                }
                if ($element.hasClass('figure-left') || $element.hasClass('figure-right')) {
                    if ($(window).width() < 768) {
                        $element.css({ 'width': full_width });
                    } else {
                        $element.css({ 'width': half_width });
                    }
                    $(window).resize(function () {
                        if ($(window).width() < 768) {
                            $element.css({ 'width': full_width });
                        } else {
                            $element.css({ 'width': half_width });
                        }
                    });
                }
            });

        },

        // Force buttons to act like buttons
        // 1. Add 'touchstart' event to enable CSS :active pseudo-class by tapping http://goo.gl/B3wx0
        // 2. Add 'fastClick' plugin to eliminate 300ms double-click delay
        // 3. Add 'touch' class for touch devices to avoid lingering :hover state
        enableTouchActiveFast: function () {
            var $touch_buttons, $fast_buttons;

            $touch_buttons = $('button, input, select, textarea, .button');
            $touch_buttons.on('touchstart', function () { });

            $fast_buttons = $('button, input, select, textarea, .button').not('input[type="checkbox"], input[type="radio"], input[type="search"], input[type="file"], .nav-toggle');
            $fast_buttons.fastClick(function () { });

            if (document.documentElement.hasOwnProperty('ontouchstart')) {
                $(document.documentElement).addClass('touch');
            }

        },

        // We are go for launch
        allSystemsGo: function () {
            var self = this;
            self.scrollAddressBar();
            self.showHideMobileNav();
            self.wrapImages();
            self.showSubmitMessage();
            self.openNewWindow();
            self.fitVids();
            self.enableTouchActiveFast();
        }

    };

}(jQuery));

jQuery(function () {
    'use strict';
    OCTANNER.allSystemsGo();
});
