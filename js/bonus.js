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
const prevImg0 = document.querySelector("#prev-img-0");
const prevImg1 = document.querySelector("#prev-img-1");
const prevImg2 = document.querySelector("#prev-img-2");
const prevImg3 = document.querySelector("#prev-img-3");
const prevImg4 = document.querySelector("#prev-img-4");

imgEl.src = images[0];
let count = 0;
prevImg0.classList.add("active");

btnNext.addEventListener("click", function () {

    const active = document.querySelector(`.img-preview-container img:nth-child(${count + 1})`);
    active.classList.remove("active")



    count++;
    if (count > images.length - 1) {
        count = 0
    }
    console.log(count)
    imgEl.src = images[count];



    if (count === 0) {
        prevImg0.classList.add("active");
    } else if (count === 1) {
        prevImg1.classList.add("active");
    } else if (count === 2) {
        prevImg2.classList.add("active");
    } else if (count === 3) {
        prevImg3.classList.add("active");
    } else {
        prevImg4.classList.add("active");
    }


})


btnPrev.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = 4;
    }
    imgEl.src = images[count]
    console.log(count);

})