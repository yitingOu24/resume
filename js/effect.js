var aside_part = document.getElementsByClassName('first-section first-section-left');
var about_part = document.getElementsByClassName('about-section-word');

//fade
function start_fade() {
    var classSelect = document.querySelectorAll(".animation-fade", "");
    var classNumber = document.querySelectorAll(".animation-fade").length;
    for (i = 0; i < classNumber; i++) {
        classSelect[i].classList.add("start_fade");
    }
}

//slider
var slider_object = $(".slider_item");
var slider_obj_height = slider_object.offset().top;
console.log(slider_obj_height);

var slider_button = $('.first-section-nav ul li').first();
slider_button.click(function() {
    $('html,body').animate({ scrollTop: slider_obj_height }, 800);
});

// sroll&appea

var s_fade = $(".section-fade");
var s_fade_height = s_fade.offset().top;

$(window).scroll(function() {
    var window_height = $(window).height();
    var window_scrollTop = $(window).scrollTop();
    var document_height = $(document).height();

    if (window_height + window_scrollTop > s_fade_height + 200) {
        s_fade.addClass('section_fade_in');
    }
});


start_fade();