function toggleAbout() {
    $('.image-text').toggleClass('hidden');
    $('.photo-fade').toggleClass('faded');
};

$('.js-about').click(function() {
    toggleAbout();
})

$('.learn-more').click(function() {
    toggleAbout();
})

$('.dropdown').click(function(){
    $('.dropdown-content').css("display", "block");
})

$(document).click(function(event) {
    $target = $(event.target);
    if(!$target.closest('.dropdown').length &&
    $('.dropdown').is(":visible")) {
        $('.dropdown-content').hide();
    }
})