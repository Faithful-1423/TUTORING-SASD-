//ELEMENTS
const elemFormDiv = document.getElementById("form");
const elemLoginForm = document.getElementById("loginForm");
const elemOptionsTemplate = document.getElementById("login-options-template"); 
const elemformTemplate = document.getElementById("login-form-template");
const elemSignupTemplate = document.getElementById("signup-options-template");
const elemTitle = document.querySelector("#account .title h1");
let boolTransitioning = false;

elemFormDiv.replaceChildren(elemOptionsTemplate.content.cloneNode(true));

async function showTemplate(template, heading) {
    if (boolTransitioning) {
        return;
    }

    boolTransitioning = true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
        elemFormDiv.replaceChildren(template.content.cloneNode(true));
        elemTitle.dataset.tooltip = heading;
        boolTransitioning = false;
        return;
    }

    const fadeOut = elemFormDiv.animate(
        [
            { opacity: 1, transform: "translateY(0)" },
            { opacity: 0, transform: "translateY(8px)" },
        ],
        { duration: 120, easing: "ease-in", fill: "forwards" }
    );
    await fadeOut.finished;
    fadeOut.cancel();

    elemFormDiv.replaceChildren(template.content.cloneNode(true));
    elemTitle.dataset.tooltip = heading;

    await elemFormDiv.animate (
        [
            { opacity: 0, transform: "translateY(8px)" },
            { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 160, easing: "ease-out" }
    ).finished;

    boolTransitioning = false;
}

//EVENT LISTENERS
elemFormDiv.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }

    const clickedButton = event.target.closest("button");
    if (!clickedButton || !elemFormDiv.contains(clickedButton)) {
        return;
    }

    if (clickedButton.id === "user") {
        showTemplate(elemformTemplate, "LOG IN");
    } else if (clickedButton.id === "signup") {
        showTemplate(elemSignupTemplate, "SIGN UP");
    } else if (clickedButton.id === "back") {
        showTemplate(elemOptionsTemplate, "LOG IN");
    }
});
