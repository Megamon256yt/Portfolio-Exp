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
const localDay = date.getDay()

const timeBar = document.querySelector("#sideInfo")

timeBar.innerHTML = `<div class="timeShow"><div class="time">${localHours}:${localMins}</div><div class="date">${localDate}-${localMonth + 1}-${localYear}</div></div>`


const myComputer = document.querySelector("#myComputer")
const homePage = document.getElementById("homePage")
myComputer.addEventListener('dblclick', () => {

    homePage.classList.add("showH")
    addTaskbarButton("homePage", "My Computer");


})

const closeBtn = document.querySelector(".closeBtn")

closeBtn.addEventListener('click', () => {
    if (homePage.classList.contains("showH")) {
        homePage.classList.remove("showH")
    }
})

const maximizeBtnH = document.querySelector("#homePage").querySelector(".maximizeBtn")

maximizeBtnH.addEventListener('click', () => {
    homePage.classList.toggle("fsH")
    if (homePage.classList.contains("fsH")) {
        homePage.style.top = 0
        homePage.style.left = 0
    }

})

let isDraggingH = false;
let offsetXH = 0;
let offsetYH = 0;

let zIndex = 1
const titleBarH = document.querySelector(".buttonBar-h");

titleBarH.addEventListener("mousedown", (event) => {
    if (event.target.closest("button")) return;

    homePage.style.zIndex = zIndex
    isDraggingH = true;

    const rect = homePage.getBoundingClientRect();
    console.log(rect.left, rect.top)
    offsetXH = event.clientX - rect.left;
    offsetYH = event.clientY - rect.top;

    zIndex++
    homePage.style.zIndex = zIndex

    if (homePage.classList.contains("fsH")) {
        if (isDraggingH) {
            homePage.classList.remove("fsH")
        }
    }


});

document.addEventListener("mousemove", (event) => {
    if (!isDraggingH) return;

    homePage.style.left = `${event.clientX - offsetXH}px`;
    homePage.style.top = `${event.clientY - offsetYH}px`;
});

document.addEventListener("mouseup", () => {
    isDraggingH = false;
});

const signInBtn = document.querySelector("#signInBtn")

signInBtn.addEventListener('click', () => {
    document.querySelector("#lock-screen").classList.add("sign-in")
})

const infoTab = document.querySelector(".infoTab-h")

const numberOfIconsHP = infoTab.querySelectorAll("img")

document.querySelector("#numberOfIcon-h").innerHTML = `${numberOfIconsHP.length} items.<br> Doubleclick to open`


const aboutMe = document.querySelector("#aboutMe")
const aboutPage = document.getElementById("aboutPage")
aboutMe.addEventListener('dblclick', () => {

    aboutPage.classList.add("showA")
    addTaskbarButton("aboutPage", "About Me");

})

let isDraggingA = false;
let offsetXA = 0;
let offsetYA = 0;

const titleBarA = document.querySelector(".buttonBar-a")
titleBarA.addEventListener("mousedown", (event) => {
    if (event.target.closest("button")) return;
    aboutPage.style.zIndex = zIndex
    isDraggingA = true;

    const rect = aboutPage.getBoundingClientRect();
    console.log(rect.left, rect.top)
    offsetXA = event.clientX - rect.left;
    offsetYA = event.clientY - rect.top;

    zIndex++
    aboutPage.style.zIndex = zIndex

    if (aboutPage.classList.contains("fsA")) {
        if (isDraggingA) {
            aboutPage.classList.remove("fsA")
        }
    }
});


document.addEventListener("mousemove", (event) => {
    if (!isDraggingA) return;

    aboutPage.style.left = `${event.clientX - offsetXA}px`;
    aboutPage.style.top = `${event.clientY - offsetYA}px`;
});

document.addEventListener("mouseup", () => {
    isDraggingA = false;
});

const maximizeBtnA = aboutPage.querySelector(".maximizeBtn")

maximizeBtnA.addEventListener('click', () => {
    aboutPage.classList.toggle("fsA")
    if (aboutPage.classList.contains("fsA")) {
        aboutPage.style.top = 0
        aboutPage.style.left = 0
    }
})

const taskbar = document.querySelector(".showInTaskBar");
