//animation of logo circles

gsap.from(".circle", {
    duration: .5,
    opacity: 0,
    y: "random(-200, 200)",
    stagger: 0.05
}); ////


const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
    container.classList.add("change");
});
document.querySelector(".close-navbar-icon").addEventListener("click", () => {
    container.classList.remove("change");
});



const colors = ['rgba(54, 68, 112, .5)', 'rgb(84,100,206,.5)', 'rgb(64,224,208,.7)', 'rgb(84,100,206,.5)', 'rgba(54, 68, 112, .5)'];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
    item.style.cssText = `background-color: ${colors[i++]}`;

});



Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
        //classList is the keyword of js not the class name in html
        item.parentElement.parentElement.classList.toggle("change");
    };
});
