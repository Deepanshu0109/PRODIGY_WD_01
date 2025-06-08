let displayBottle = document.getElementById("p1");
let bottles = document.querySelectorAll(".products");
let bottleBG = document.getElementById("displayBG2");
let belowBG = document.getElementById("displayBG");
const card1 = document.querySelector(".newCard1");
const card2 = document.querySelector(".newCard2");

bottles.forEach(products => {
    products.addEventListener("click", function () {
        displayBottle.src = products.src;
        displayBottle.classList.add("bottleAnimate");
        displayBottle.addEventListener("animationend", () => {
            displayBottle.classList.remove("bottleAnimate");
        }, { once: true });

        const path = products.src;
        let color = "#50C878";
        if (path.includes("yellow")) color = "gold";
        else if (path.includes("red")) color = "palevioletred";
        else if (path.includes("p3")) color = "#50C878";


        bottleBG.style.background = color;
        setTimeout(() => {
            belowBG.style.backgroundColor = bottleBG.style.background;
        }, 1000);

        bottleBG.classList.add("BGanimate");
        bottleBG.addEventListener("animationend", () => {
            bottleBG.classList.remove("BGanimate");
        }, { once: true });
    });
})