function toggleAbout() {
    $('.image-text').toggleClass('hidden');
    $('.photo-fade').toggleClass('faded');
};

$('.js-about').one("click", function() {
    console.log(`
     /$$   /$$           /$$ /$$           /$$
    | $$  | $$          | $$| $$          | $$
    | $$  | $$  /$$$$$$ | $$| $$  /$$$$$$ | $$
    | $$$$$$$$ /$$__  $$| $$| $$ /$$__  $$| $$
    | $$__  $$| $$$$$$$$| $$| $$| $$  \ $$|__/
    | $$  | $$| $$_____/| $$| $$| $$  | $$    
    | $$  | $$|  $$$$$$$| $$| $$|  $$$$$$/ /$$
    |__/  |__/ \_______/|__/|__/ \______/ |__/
    Thank you for stopping by!
    My favorite fact that didn't make it into my bio: I love to play the cello!`
    )
})

$('.js-about').click(function() {
    toggleAbout();
})

$('.learn-more').click(function() {
    toggleAbout();
})

$('.dropdown').click(function(){
    $('.dropdown-content').css("display", "block");
})

$('.meetthemusic').one("click", function() {
    console.log(`This project was fun! I love going to see live music, especially in smaller venues with lesser-known artists. I wanted to make a tool I could use for myself, but also to share, to find the perfect concerts locally or while I'm out on a trip.`)
})

$(document).click(function(event) {
    $target = $(event.target);
    if(!$target.closest('.dropdown').length &&
    $('.dropdown').is(":visible")) {
        $('.dropdown-content').hide();
    }
})

// function contactAnimation() {
//     let element = document.getElementByClass("footer");
//     element.addEventListener("click", function(e) {
//         e.preventDefault;
//         element.classList.remove("animate");
//         void element.offsetWidth;
//         element.classList.add("animate");
//     }, false);
    
// }

// contactAnimation();

// $('.js-contact').click(function(event) {
//      $('.footer').css("-webkit-animation", "yellow-fade 1s ease-in-out 0s");
//     $('.footer').css("-moz-animation", "yellow-fade 1s ease-in-out 0s");
//     $('.footer').css("-o-animation", "yellow-fade 1s ease-in-out 0s");
//     $('.footer').css("animation", "yellow-fade 1s ease-in-out 0s");
// })
