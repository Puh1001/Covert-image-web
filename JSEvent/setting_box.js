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
function translatePage(language) {
    var url = window.location.href;
    if (language === 'vi') {
        window.location.href = "http://translate.google.com/translate?sl=auto&tl=" + language + "&u=" + url;
    } else {
        location.reload();
    }
}

