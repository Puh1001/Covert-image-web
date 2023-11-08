const sizeBtn = document.querySelector('.size-button');
const sizeBox = document.querySelector('.size-box');
// nut size
sizeBtn.addEventListener("click", () =>{
    if (sizeBox.classList.contains("hidden_box")) {
        sizeBox.classList.remove("show");
        sizeBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            sizeBox.classList.remove("hidden_box");
            sizeBtn.style.pointerEvents = 'auto';
        }, 600);
    } else {
        sizeBox.classList.add("hidden_box");
        sizeBox.classList.add("show");
    }
});
sizeBtn.addEventListener('click', () => sizeBtn.classList.toggle('active'));
//khai bao cho cac nut bam
transBtn = document.querySelector('.trans-button'),
trimBtn = document.querySelector(".trim-button"),
renameBtn = document.querySelector(".rename-button"),
rmbBtn = document.querySelector(".remove_background");
colorBtn = document.querySelector(".Color_button");
effectBtn = document.querySelector(".effect_button");
//khai bao box option
transBox = document.querySelector(".transform-box"),
trimBox = document.querySelector(".trim-box"),
renameBox = document.querySelector(".rename-box"),
rmbBox = document.querySelector(".remove_background_box");
colorBox = document.querySelector(".color_box");
effectBox = document.querySelector(".effect_box");
// Transform
transBtn.addEventListener("click", () =>{
    if (transBox.classList.contains("hidden_box")) {
        transBox.classList.remove("show");
        transBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            transBox.classList.remove("hidden_box");
            transBtn.style.pointerEvents = 'auto';
        }, 600);
    } else {
        transBox.classList.add("hidden_box");
        transBox.classList.add("show");
    }
});
transBtn.addEventListener('click', () => transBtn.classList.toggle('active'));
// nut trim
trimBtn.addEventListener("click", () =>{
    if (trimBox.classList.contains("hidden_box")) {
        trimBox.classList.remove("show");
        trimBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            trimBox.classList.remove("hidden_box");
            trimBtn.style.pointerEvents = 'auto';
        }, 600);
    } else {
        trimBox.classList.add("hidden_box");
        trimBox.classList.add("show");
    }
})
trimBtn.addEventListener('click', () => trimBtn.classList.toggle('active'));
//nut rename
renameBtn.addEventListener("click", () =>{
    if (renameBox.classList.contains("hidden_box")) {
        renameBox.classList.remove("show");
        renameBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            renameBox.classList.remove("hidden_box");
            renameBtn.style.pointerEvents = 'auto';
        }, 600);
    } else {
        renameBox.classList.add("hidden_box");
        renameBox.classList.add("show");
    }
})
renameBtn.addEventListener('click', () => renameBtn.classList.toggle('active'));
// nut removebackground
rmbBtn.addEventListener("click", () =>{
    if (rmbBox.classList.contains("hidden_box")) {
        rmbBox.classList.remove("show");
        rmbBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            rmbBox.classList.remove("hidden_box");
            rmbBtn.style.pointerEvents = 'auto';
        }, 600);
    } else {
        rmbBox.classList.add("hidden_box");
        rmbBox.classList.add("show");
    }
})
rmbBtn.addEventListener('click', () => rmbBtn.classList.toggle('active'));
// nút color
colorBtn.addEventListener("click", () =>{
    if (colorBox.classList.contains("hidden_box")) {
        colorBox.classList.remove("show");
        colorBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            colorBox.classList.remove("hidden_box");
            colorBtn.style.pointerEvents = 'auto';
        }, 600);
    } else {
        colorBox.classList.add("hidden_box");
        colorBox.classList.add("show");
    }
})
colorBtn.addEventListener('click', () => colorBtn.classList.toggle('active'));
// nút effect
effectBtn.addEventListener("click", () =>{
    if (effectBox.classList.contains("hidden_box")) {
        effectBox.classList.remove("show");
        effectBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            effectBox.classList.remove("hidden_box");
            effectBtn.style.pointerEvents = 'auto';
        }, 600);
    } else {
        effectBox.classList.add("hidden_box");
        effectBox.classList.add("show");
    }
})
effectBtn.addEventListener('click', () => effectBtn.classList.toggle('active'));