var button_taskbar_phone = document.querySelector(".taskbar");
var mainEdit = document.querySelector(".main_tool");

button_taskbar_phone.addEventListener("click", function() {
    mainEdit.style.position = "fixed";
    mainEdit.style.transform  = "scaleX(1)";
    button_taskbar_phone.style.display = "none";
    mainEdit.style.height = "100vh";
    button_taskbar_phone_exit.style.pointerEvents = "initial";
});

var button_taskbar_phone_exit = document.querySelector(".tool_1 img")
button_taskbar_phone_exit.addEventListener("click", function(){
    if(window.innerWidth <= 500){
        mainEdit.style.transform  = "scaleX(0)";
        button_taskbar_phone.style.display = "block";
        mainEdit.style.pointerEvents = "auto";
    }else if(window.innerWidth > 500 && window.innerWidth <= 1000){
        button_taskbar_Tablet.style.display = "block";
        mainEdit.style.transform  = "scaleX(0)";
        // mainEdit.style.display  = "none";
    }
});
// máy tính bảng

var button_taskbar_Tablet = document.querySelector(".taskbar_Tablet")
button_taskbar_Tablet.addEventListener("click", function(){
    mainEdit.style.display  = "block";
    mainEdit.style.position = "absolute";
    mainEdit.style.transform  = "scaleX(1)";
    mainEdit.style.height = "100vh";
    mainEdit.style.width = "55vw";
    button_taskbar_phone_exit.style.pointerEvents = "initial";
    button_taskbar_Tablet.style.display = "none";
});