const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

const imgEl = document.querySelector(".template-img");

imgEl.src = images[0];
let count = 0;

btnNext.addEventListener("click", function () {
    count++;
    if (count > images.length - 1) {
        count = 0
    }
    console.log(count)
    imgEl.src = images[count];
})


btnPrev.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = 4;
    }
    imgEl.src = images[count]
    console.log(count);

})