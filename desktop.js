window.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector("#loading-screen")

    setTimeout(() => {
        loader.classList.add('off-screen')
    }, 2000)


})

const date = new Date()
const localHours = date.getHours()
const localMins = date.getMinutes()
const localDate = date.getDate()
const localMonth = date.getMonth()
const localYear = date.getFullYear()

const timeBar = document.querySelector("#sideInfo")

timeBar.innerHTML = `<div class="timeShow"><div class="time">${localHours}:${localMins}</div><div class="date">${localDate}-${localMonth + 1}-${localYear}</div></div>`


const myComputer = document.querySelector("#myComputer")
const page = document.getElementById("homePage")
myComputer.addEventListener('dblclick', () => {

    page.classList.add("show")

})

const closeBtn = document.querySelector(".closeBtn")

closeBtn.addEventListener('click', () => {
    if (page.classList.contains("show")) {
        page.classList.remove("show")
    }
})

const minimizeBtn = document.querySelector(".maximizeBtn")

minimizeBtn.addEventListener('click', () => {
    page.classList.toggle("fs")
})

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const titleBar = document.querySelector(".buttonBar");

titleBar.addEventListener("mousedown", (event) => {
    if (event.target.closest("button")) return;

    isDragging = true;

    const rect = page.getBoundingClientRect();
    console.log(rect.left ,rect.top)
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    page.style.zIndex = 99;
});

document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    page.style.left = `${event.clientX - offsetX}px`;
    page.style.top = `${event.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

const signInBtn= document.querySelector("#signInBtn")

signInBtn.addEventListener('click',()=>{
    document.querySelector("#lock-screen").classList.add("sign-in")
})


