// const appContents = {
//     home: [
//                {
//             name: "Projects",
//             type: "folder",
//             icon: "assets/icons/projects.jpg",
//             children: [
//                 {
//                     name: "Portfolio",
//                     type: "folder",
//                     children: [
//                         {
//                             name: "README.txt",
//                             type: "file",
//                             content: "An interactive desktop-style portfolio."
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             name: "Contact",
//             type: "folder",
//             icon: "assets/icons/contact.jpg",
//             children: [
//                 {
//                     name: "Email.txt",
//                     type: "file",
//                     content: "Add your contact details here."
//                 }
//             ]
//         }
//     ],

//     about: [
//            {
//                     name: "Introduction.txt",
//                     type: "file",
//                     content: "Hey! I'm a developer in progress."
//                 },
//                 {
//                     name: "Skills.txt",
//                     type: "file",
//                     content: "HTML, CSS, JavaScript, Python, MySQL and Lua."
//                 },
//                 {
//                     name: "Interests",
//                     type: "folder",
//                     children: [
//                         {
//                             name: "Web Development.txt",
//                             type: "file",
//                             content: "I enjoy building things for the web."
//                         }
//                     ]
//                 }
//
//         {
//             name: "Profile.txt",
//             type: "file",
//             content: "A student exploring software development."
//         },
//         {
//             name: "Skills",
//             type: "folder",
//             children: []
//         },
//         {
//             name: "Interests",
//             type: "folder",
//             children: []
//         }
//     ],

//     projects: [
//         {
//             name: "Portfolio",
//             type: "folder",
//             children: []
//         },
//         {
//             name: "Future Projects",
//             type: "folder",
//             children: []
//         },
//         {
//             name: "Ideas.txt",
//             type: "file",
//             content: "More projects are loading..."
//         }
//     ],

//     contact: [
//         {
//             name: "Email.txt",
//             type: "file",
//             content: "your-email@example.com"
//         },
//         {
//             name: "GitHub.txt",
//             type: "file",
//             content: "Add your GitHub link here."
//         },
//         {
//             name: "LinkedIn.txt",
//             type: "file",
//             content: "Add your LinkedIn link here."
//         }
//     ]
// };

const appContents = {
    home:[
        {
            name:"Me",
            type:"folder",
            icon:"[folder icon]",
            children:[]
        },{
            name:"this portfolio.txt",
            type:"file",
            icon:"[file icon]"
        },{
            name:"Recycle Bin",
            type:"app",
            icon:"[bin icon]",
            children:[]
        }
    ],

    about:[
        {
            name: "Introduction.txt",
            type: "file",
            icon:"[file icon]",
            content: "Hey! I'm a developer in progress."  
        }
    ]
}
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
            <div class="infoTab-${appCode}"></div>
        </div>`

    const taskbar = document.querySelector(`#${appPage}Button`)
    taskbar.innerHTML = `<div><p><img src="assets/icons/${appPage}.jpg" height="30px" width="30px">${appName}</p></div>`
    if (taskbar.style.display = "none") {
        taskbar.style.display = "flex"
    }
}

// function renderInnerApps(appPage) {

// }

function appWorking(appCode, appName, appPage) {
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

    const taskBarAppBtn = document.querySelector(`#${appPage}Button`)

    taskBarAppBtn.addEventListener('click', () => {
        globalZIndex++
        appWindow.style.zIndex = globalZIndex;
    })

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    titleBar.addEventListener("mousedown", (event) => {
        if (event.target.closest("button")) return;

        isDragging = true;
        globalZIndex++;
        appWindow.style.zIndex = globalZIndex;



        if (!isDragging && globalZIndex > 10) {
            globalZIndex = 10
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
const aboutMe = document.querySelector("#aboutMe")
const contactMe = document.querySelector("#contactMe")
const myProjects = document.querySelector("#myProjects")

myComputer.addEventListener('dblclick', () => {
    appWorking("h", "My Computer", "home")
});

aboutMe.addEventListener('dblclick', () => {
    appWorking("a", "About Me", "about")
})

myProjects.addEventListener('dblclick', () => {
    appWorking("p", "My Projects", "projects")
})

contactMe.addEventListener('dblclick', () => {
    appWorking("c", "Mail", "contact")
})







