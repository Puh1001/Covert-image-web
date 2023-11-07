var out_setting = document.querySelector(".out_setting");
var open_setting = document.querySelector(".tool_3_option");
var setting_box = document.querySelector(".setting_box");

out_setting.addEventListener("click", function() {
    setting_box.style.transform = "translateX(100px)"; // Lật phần tử theo trục X
    setting_box.style.opacity = "0"; // Làm mờ phần tử
    setting_box.style.zIndex = "-1";
});

open_setting.addEventListener("click", function(){
    setting_box.style.transform = "translateX(0px)"; // Lật phần tử theo trục X
    setting_box.style.opacity = "1"; // Làm mờ phần tử
    setting_box.style.zIndex = "300";
});


// dịch 
document.querySelector('select[name="convert-type"]').addEventListener('change', function(event) {
    var language = event.target.value;
    if (language === 'en') {
        window.location.href = "https://translate.google.com/translate?sl=auto&tl=en&u=" + encodeURIComponent(window.location.href);
    } else if (language === 'vi') {
        window.location.href = "https://translate.google.com/translate?sl=auto&tl=vi&u=" + encodeURIComponent(window.location.href);
    }
});

// theme
var black_theme = document.querySelector("#black_theme");
black_theme.addEventListener("click", function(){
    document.querySelector('header').style.background = 'linear-gradient(to right, rgb(255, 255, 255), rgb(0, 0, 0)';
    document.querySelector('footer').style.background = 'linear-gradient(to right, rgb(255, 255, 255), rgb(0, 0, 0)';
    var elements = document.querySelectorAll('.option-box');
    elements.forEach(function(element) {
        element.style.backgroundColor = 'rgb(41, 41, 41)';
    });
    document.querySelector('#submit-button').style.background = 'linear-gradient(to right, rgb(255, 255, 255), rgb(0, 0, 0)';
    document.querySelector('#submit-button').style.backgroundColor = 'rgb(41, 41, 41)';
    document.querySelector('.out_setting').style.backgroundColor = 'rgb(41, 41, 41)';
})

var green_theme = document.querySelector('#green_theme');
green_theme.addEventListener("click", function(){
    document.querySelector('header').style.background = 'linear-gradient(to right, rgb(118, 231, 201), rgb(29, 218, 95)';
    document.querySelector('footer').style.background = 'linear-gradient(to right, rgb(118, 231, 201), rgb(29, 218, 95)';
    var elements = document.querySelectorAll('.option-box');
    elements.forEach(function(element) {
        element.style.backgroundColor = 'rgb(118, 231, 201)';
    });
    document.querySelector('#submit-button').style.background = 'linear-gradient(to right, rgb(118, 231, 201), rgb(29, 218, 95)';
    document.querySelector('.out_setting').style.backgroundColor = 'rgb(118, 231, 201)';
});

var main_theme = document.querySelector('#main_theme');
main_theme.addEventListener("click", function(){
    document.querySelector('header').style.background = 'linear-gradient(to right, rgb(35, 202, 185), rgb(29, 161, 218)';
    document.querySelector('footer').style.background = 'linear-gradient(to right, rgb(35, 202, 185), rgb(29, 161, 218)';
    var elements = document.querySelectorAll('.option-box');
    elements.forEach(function(element) {
        element.style.backgroundColor = '#1DE0DA';
    });
    document.querySelector('#submit-button').style.background = 'linear-gradient(to right, rgb(35, 202, 185), rgb(29, 161, 218)';
    document.querySelector('.out_setting').style.backgroundColor = '#1DE0DA';
});

