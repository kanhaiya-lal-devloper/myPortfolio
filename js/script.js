var typed = new Typed(".auto-type", {
    strings: ["Kanhaiya Prajapati", "Full Stack Developer",],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


const filterButtons = document.querySelectorAll(".about-btn button");
const filterCard = document.querySelectorAll(".portfolio-gallery .card");
// console.log(filterButtons,filterCard);

const filterC = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // console.log(e.target);
    filterCard.forEach(card => {
        card.classList.add("hide")
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    })
}

filterButtons.forEach(button => button.addEventListener("click", filterC));



let number = document.getElementById('number');
let counter = 0;
setInterval(() => {

    if (counter == number) {

        counter += 1;
        number.innerHTML = counter + "%";
    }
    else {
        clearInterval();
    }

}, 30);




let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(calcHeight);
    let scrollValue = Math.round((pos * 100) / calcHeight);
    // console.log(scrollValue);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    }
    else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })


    scrollProgress.style.background = `conic-gradient(#e6006d  ${scrollValue}%,#fff ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

