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
    mainEdit.style.transform  = "scaleX(0)";
    button_taskbar_phone.style.display = "block";
    mainEdit.style.pointerEvents = "auto";
});