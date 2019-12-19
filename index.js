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

$('.dropdown').click(function(){
    $('.dropdown-content').css("display", "block");
})

$('.meetthemusic').one("click", function() {
    console.log(`Meet the Music was a fun project to build! I love going to see live music, especially in smaller venues with lesser-known artists. I wanted to make a tool I could use for myself, but also to share, to find the perfect concerts locally or while I'm out on a trip.`)
})

$('.ducklings').one("click", function() {
    console.log(`Ducklings Care Diary was inspired by a teacher at my previous job who needed a better tool to communicate with her students' families. It was really gratifying to know that I was making something that would actually be really useful to someone!`)
})

$('.activitiesassistant').one("click", function() {
    console.log(`Activities Assistant was inspired by my work at an elementary school where I was the coordinator for 100+ extracurricular activities. I had the responsibility to collect information on all the activities and advertise them effectively to the parents in our community, and I wished that I had a better way to collect and display all these details for parents - so I made one.`)
})

$('.chicago').one("click", function() {
    console.log(`I absolutely adore the city of Chicago. I love public transit, so one of my favorite parts of living in Chicago is that the CTA can take me pretty much anywhere I need to go.`)
})

$(document).click(function(event) {
    $target = $(event.target);
    if(!$target.closest('.dropdown').length &&
    $('.dropdown').is(":visible")) {
        $('.dropdown-content').hide();
    }
})