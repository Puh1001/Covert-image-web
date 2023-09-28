const sizeBtn = document.querySelector('.size-button');
const sizeBox = document.querySelector('.size-box');
sizeBtn.addEventListener("click", () =>{
    sizeBox.classList.toggle("show");
});
sizeBtn.addEventListener('click', () => sizeBtn.classList.toggle('active'));
//khai bao cho cac nut bam
const transBtn = document.querySelector('.trans-button'),
addBtn = document.querySelector(".add-button"),
trimBtn = document.querySelector(".trim-button"),
renameBtn = document.querySelector(".rename-button"),
downBtn = document.querySelector(".down-button");
//khai bao box option
const transBox = document.querySelector(".transform-box"),
addBox = document.querySelector(".watermark-box"),
trimBox = document.querySelector(".trim-box"),
renameBox = document.querySelector(".rename-box"),
downBox = document.querySelector(".down-box");
// them su kien 
transBtn.addEventListener("click", () =>{
    transBox.classList.toggle("show");
});
transBtn.addEventListener('click', () => transBtn.classList.toggle('active'));
// nut transform
addBtn.addEventListener("click", () =>{
    addBox.classList.toggle("show");
})
addBtn.addEventListener('click', () => addBtn.classList.toggle('active'));
// nut trim
trimBtn.addEventListener("click", () =>{
    trimBox.classList.toggle("show");
})
trimBtn.addEventListener('click', () => trimBtn.classList.toggle('active'));
//nut rename
renameBtn.addEventListener("click", () =>{
    renameBox.classList.toggle("show");
})
renameBtn.addEventListener('click', () => renameBtn.classList.toggle('active'));
// nut download 
downBtn.addEventListener("click", () =>{
    downBox.classList.toggle("show");
})
downBtn.addEventListener('click', () => downBtn.classList.toggle('active'));
