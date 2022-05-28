/*header*/
var header = $('.js-header')
    , cloneHeader = header.clone();
cloneHeader.addClass('header__fixed');
header.before(cloneHeader);
$(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 250) {
        cloneHeader.addClass('scroll');
    }
    else cloneHeader.removeClass('scroll');
});