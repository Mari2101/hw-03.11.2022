"use strict";
const btnToggle = document.getElementById("btn-mode");
function setDarkMode() {
    //first Load: check the saved Value:
    let isDark = localStorage.getItem("mode") === "dark";
    if (isDark) {
        document.body.classList.add("dark-mode");
    }
    else {
        document.body.classList.remove("dark-mode");
    }
}
//add/remove the class from the class-list
setDarkMode();
btnToggle.addEventListener("click", () => {
    let isDark = localStorage.getItem("mode") === "dark";
    isDark = !isDark;
    //if(isDark === true){isDark = false}else {isDark = true}
    localStorage.setItem("mode", isDark ? "dark" : "light");
    //if(isDark === true){
    //localStorage.setItem("dark-mode", 'dark')
    //}else {
    //localStorage.setItem("dark-mode", 'light')
    //}
    setDarkMode();
});
