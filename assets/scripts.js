$(function() {

	// Search bar
	$('#searchInput').on('input', function () {
        var filter = $(this).val().toLowerCase();
        $('.card-deck .card').each(function () {
            if ($(this).find('.card-title').text().toLowerCase().indexOf(filter) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

	//Remove commento text
    const observer = new MutationObserver(function(mutationsList) {
        for (let mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const element = document.querySelector(".commento-logo-text");
            if (element) {
              element.remove();
              observer.disconnect();
            }
          }
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
	$('[data-toggle="tooltip"]').tooltip()
})

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

//bootstrap hack to make sure you can't scroll the page when any modal is open
$(document).on('hidden.bs.modal', function () {
	if ($('.modal.show').length) {
		$('body').addClass('modal-open');
	}
});

function toggleMobileMenu() {
    var $toggleBtn = $('[data-toggle="toggle-menu"]');
    var $navMenuCont = $($toggleBtn.data('target'));
    var isOpen = $toggleBtn.data('isopen');
    var isAnimating = $navMenuCont.is(':animated');

    if (isAnimating) {
        return;
    }

    if (isOpen) {
        closeMobileMenu();
        $toggleBtn.data('isopen', false);
    } else {
        openMobileMenu();
        $toggleBtn.data('isopen', true);
    }

    function openMobileMenu() {
        $('body').addClass('navbar-open');
        $('.hamburger').addClass('active');

        $navMenuCont.css('display', 'block');

        let $navItems = $navMenuCont.find('.nav-item');
        $navItems.removeClass('animate__fadeOutUp').addClass('animate__fadeInDown');
        $navMenuCont.animate({ 'height': '100vh' ,'opacity': '1'}, 350);
    }

    function closeMobileMenu() {
        $('body').removeClass('navbar-open');
        $('.hamburger').removeClass('active');

        let $navItems = $navMenuCont.find('.nav-item');
        $navItems.removeClass('animate__fadeInDown').addClass('animate__fadeOutUp');
		
        $navMenuCont.removeClass('slide-in').delay(100).animate({ 'height': '0vh','opacity': '0' }, 350, function () {
            $navMenuCont.css('display', 'none');
        });
    }
}

$('[data-toggle="toggle-menu"]').on('click', toggleMobileMenu);


Fancybox.bind("[data-fancybox]", {
	wheel: "slide",
	Thumbs: {
		type: "classic",
	},
	Toolbar: {
		display: {
			left: ['close'],
			middle: [],
			right: [],
		},
	},
	Images: {
		initialSize: "fit",
	},

	Carousel: {
		transition: "classic",
		friction: 0,
	}
});