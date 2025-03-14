import "./styles.css";
import renderHome from "./home";
import renderMenu from "./menu";
import renderAbout from "./about";

function clearContent() {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
    clearContent();
    renderHome();
})

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
    clearContent();
    renderMenu();
})

const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", () => {
    clearContent();
    renderAbout();
})

renderHome();