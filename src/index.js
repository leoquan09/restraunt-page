import "./styles.css";
import { homeContent } from "./home.js";

let container = document.getElementById('content');
let tab = "about";

if (tab === "home") {
    container.innerHTML = homeContent;
} else if (tab === "about") {
    container.innerHTML = aboutContent;
}
