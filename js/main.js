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
    console.log(count)
    if (count + 1 > images.length) {
        count = 0
    }
    imgEl.src = images[count];
})


btnPrev.addEventListener("click", function () {
    count--;
    imgEl.src = images[count]
    if (count - 1 < 0) {
        count = 5;
    }
    console.log(count);

})
