function renderApp(appPage, appName, appCode) {
    const selectApp = document.querySelector(`#${appPage}Page`)
    selectApp.innerHTML = `
                        
        <div class="buttonBar-${appCode}">
            <div>
                <button class="maximizeBtn">.</button>
                <button class="closeBtn">.</button>            
            </div>
            <p><img src="assets/icons/${appPage}.jpg" height="25px" width="25px">${appName}</p>   
        </div>
            <div class="searchBar">
                <div class="backButton" >←</div>
                <div class="address">User/desktop/${appName}</div>
            </div>
        
        <div class="container-${appCode}">
            <div class="navBar"> 
                <img src="assets/icons/${appPage}.jpg" height="64px" width="64px">
                <p id="numberOfIcon-${appCode}"></p>
            </div>
            <div class="infoTab-${appCode}">
                <img src="assets/icons/file.jpg" height="64px" width="64px">
                <img src="assets/icons/file.jpg" height="64px" width="64px">
                <img src="assets/icons/file.jpg" height="64px" width="64px">
            </div>
        </div>`

    const taskbar = document.querySelector(`#${appPage}Button`)
    taskbar.innerHTML=`<div><p><img src="assets/icons/${appPage}.jpg" height="45px" width="45px">${appName}</p></div>`
    if(taskbar.style.display = "none"){
        taskbar.style.display="block"
    }
}

function appWorking(appCode,appName,appPage){
    renderApp(appPage, appName, appCode);

    const appWindow = document.getElementById(`${appPage}Page`)
    const taskbar = document.querySelector(`#${appPage}Button`)

    const maximizeBtn = appWindow.querySelector(".maximizeBtn")
    const closeBtn = appWindow.querySelector(".closeBtn")
    const titleBar = appWindow.querySelector(`.buttonBar-${appCode}`)
    const infoTab = appWindow.querySelector(`.infoTab-${appCode}`)
    const countDisplay = appWindow.querySelector(`#numberOfIcon-${appCode}`)

    appWindow.classList.add(`show${appCode.toUpperCase()}`)

    closeBtn.addEventListener('click', () => {
        if (appWindow.classList.contains(`show${appCode.toUpperCase()}`)) {
            appWindow.classList.remove(`show${appCode.toUpperCase()}`)
            taskbar.style.display = "none"
        }
    });

    maximizeBtn.addEventListener('click', () => {
        appWindow.classList.toggle(`fs${appCode.toUpperCase()}`);
        if (appWindow.classList.contains(`fs${appCode.toUpperCase()}`)) {
            appWindow.style.top = 0;
            appWindow.style.left = 0;
        }
    });

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    titleBar.addEventListener("mousedown", (event) => {
        if (event.target.closest("button")) return;

        isDragging = true;
        globalZIndex++;
        appWindow.style.zIndex = globalZIndex;
        if(!isDragging && globalZIndex>10){
            globalZIndex=10
        }

        const rect = appWindow.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        if (appWindow.classList.contains(`fs${appCode.toUpperCase()}`)) {
            appWindow.classList.remove(`fs${appCode.toUpperCase()}`);
        }
    });

    document.addEventListener("mousemove", (event) => {
        if (!isDragging) return;
        appWindow.style.left = `${event.clientX - offsetX}px`;
        appWindow.style.top = `${event.clientY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
    const items = infoTab.querySelectorAll("img");
    countDisplay.innerHTML = `${items.length} items.<br> Doubleclick to open`;
}

let globalZIndex = 10;

const myComputer = document.querySelector("#myComputer")
const aboutMe =document.querySelector("#aboutMe")
const contactMe =document.querySelector("#contactMe")
const myProjects =document.querySelector("#myProjects")

myComputer.addEventListener('dblclick', () => {
    appWorking("h","My Computer","home")
});

aboutMe.addEventListener('dblclick',()=>{
    appWorking("a","About Me","about")
})

myProjects.addEventListener('dblclick',()=>{
    appWorking("p","My Projects","projects")
})

contactMe.addEventListener('dblclick',()=>{
    appWorking("c","Mail","contact")
})






