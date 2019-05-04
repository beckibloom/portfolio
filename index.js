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

function contactAnimation() {
    let element = document.getElementByClass("footer");
    element.addEventListener("click", function(e) {
        e.preventDefault;
        element.classList.remove("animate");
        void element.offsetWidth;
        element.classList.add("animate");
    }, false);
    })
}

contactAnimation();

// $('.js-contact').click(function(event) {
//      $('.footer').css("-webkit-animation", "yellow-fade 1s ease-in-out 0s");
//     $('.footer').css("-moz-animation", "yellow-fade 1s ease-in-out 0s");
//     $('.footer').css("-o-animation", "yellow-fade 1s ease-in-out 0s");
//     $('.footer').css("animation", "yellow-fade 1s ease-in-out 0s");
// })
