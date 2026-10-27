function renderApp(appPage,appName, appCode) {
    const selectApp = document.querySelector(`${appPage}Page`)
    selectApp.innerHTML = `<div class="buttonBar-${appCode}">
                             <div>
                                <button class="maximizeBtn">.</button>
                                <button class="closeBtn">.</button>   
                                <p><img src="assets/icons/${appPage}.jpg" height="25px" width="25px">${appName}</p>            
                             </div>
                             <div class="searchBar">
                                <div class="backButton" disabled>←</div>
                                <div class="address">User/desktop/${appName}</div>
                             </div>
                             <div class="container-${appCode}">
                                <div class="navBar"> <img src="assets/icons/${appPage}.jpg" height="64px" width="64px">
                                <p id="numberOfIcon-${appCode}"></p>
                             </div>
                            <div class="infoTab-${appCode}">
                                <img src="assets/icons/file.jpg" height="64px" width="64px">
                                <img src="assets/icons/file.jpg" height="64px" width="64px">
                                <img src="assets/icons/file.jpg" height="64px" width="64px">
                            </div>
                          </div>`
}

