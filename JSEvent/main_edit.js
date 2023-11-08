var brightness = document.querySelector("#brightness");
brightness.oninput = function(){
    console.log(this.value);
}

// nút removebackground
var removebackground = document.querySelector(".remove_background_button");
removebackground.addEventListener('click', () => removebackground.classList.toggle('active'));