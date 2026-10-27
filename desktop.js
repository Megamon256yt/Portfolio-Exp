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


const signInBtn = document.querySelector("#signInBtn")

    signInBtn.addEventListener('click', () => {
        document.querySelector("#lock-screen").classList.add("sign-in")
    })



