$(function() {
    $(".nav-link").on('click', function(evt) {
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
    }
});