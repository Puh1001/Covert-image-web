var brightness = document.querySelector("#brightness");
brightness.oninput = function(){
    console.log(this.value);
}

// nút trong color
var Greyscale = document.querySelector(".greyscale_button");
Greyscale.addEventListener('click', () => Greyscale.classList.toggle('active'));
var invert = document.querySelector(".invert_button");
invert.addEventListener('click', () => invert.classList.toggle('active'));

// nút trong effect
var sepia = document.querySelector(".sepia_button");
sepia.addEventListener('click', () => sepia.classList.toggle('active'));
// nút removebackground
var removebackground = document.querySelector(".remove_background_button");
removebackground.addEventListener('click', () => removebackground.classList.toggle('active'));