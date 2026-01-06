import "./styles.css";
import homeContent from "./home.js";
import aboutContent from "./about.js";
import menu from "./menu.js";

let container = document.getElementById('content');

let tabSwitchers = document.querySelectorAll('button');
let tab = "home";

tabSwitchers.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
        tab = tabBtn.textContent.toLowerCase().trim();
        tabChange();
        console.log(tab);
    })
})

const tabChange = () => {
    if (tab === "home") {
        container.innerHTML = homeContent;
    } else if (tab === "about") {
        container.innerHTML = aboutContent;
    } else {
        container.innerHTML = menu;
    }
}

window.addEventListener('DOMContentLoaded', tabChange);