$(function() {
    $(".nav-link.move").on('click', function(evt) {
        evt.preventDefault();
        var offset = $(this.hash).offset();
        if (offset) {
            $('html,body').animate({
                scrollTop: offset.top
            });
        }
    });
    if ($.browser.msie && $.browser.version <= 9) {
        $('#unsupported-browser-alert').show()
    };

    $('#page-1').show();

    $('#services-events-pagination').bootpag({
        total: 10
    }).on("page", function(event, num) {
        $('#services-events-content div').hide();

        var current_page = '#page-' + num;
        $(current_page).show();
    });

    $('[data-lp]').addClass('page-item');
    $('.page-item > a').addClass('page-link');

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });


});