const sizeBtn = document.querySelector('.size-button');
const sizeBox = document.querySelector('.size-box');
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
addBtn = document.querySelector(".add-button"),
trimBtn = document.querySelector(".trim-button"),
renameBtn = document.querySelector(".rename-button"),
downBtn = document.querySelector(".down-button");
//khai bao box option
transBox = document.querySelector(".transform-box"),
addBox = document.querySelector(".watermark-box"),
trimBox = document.querySelector(".trim-box"),
renameBox = document.querySelector(".rename-box"),
downBox = document.querySelector(".down-box");
// them su kien 
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
// nut transform
addBtn.addEventListener("click", () =>{
    if (addBox.classList.contains("hidden_box")) {
        addBox.classList.remove("show");
        addBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            addBox.classList.remove("hidden_box");
            addBtn.style.pointerEvents = 'auto';
        }, 600);
    } else {
        addBox.classList.add("hidden_box");
        addBox.classList.add("show");
    }
})
addBtn.addEventListener('click', () => addBtn.classList.toggle('active'));
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
// nut download 
downBtn.addEventListener("click", () =>{
    if (downBox.classList.contains("hidden_box")) {
        downBox.classList.remove("show");
        downBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            downBox.classList.remove("hidden_box");
            downBtn.style.pointerEvents = 'auto';
        }, 600);
    } else {
        downBox.classList.add("hidden_box");
        downBox.classList.add("show");
    }
})
downBtn.addEventListener('click', () => downBtn.classList.toggle('active'));
