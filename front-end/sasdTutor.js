const classesBySubject = {
    Math: [
        "Algebra I",
        "Algebra II",
        "Geometry",
        "Pre-Calculus",
        "Trigonometry",
        "AP Statistics",
        "Calculus",
        "AP Calculus",
    ],
    Science: [
        "Science 9",
        "Physics",
        "Biology",
        "Chemistry",
        "AP Biology",
        "AP Chemistry",
        "AP Physics - Mechanical",
        "AP Physics - Electricty & Magnetism",
    ],
    English: [
        "Academic/Honors English 9",
        "Academic/Honors English 10",
        "Honors English 11/12",
        "AP Literature",
        "AP Composition",
        "AP English Language and Composition",
        "AP English Literature and Composition",
    ],
    History: [
        "World History",
        "US History",
        "AP Government",
        "AP US History",
        "Honors Global Studies",
    ],
    Technology: [
        "AP Computer Science",
        "Computer Programming I",
        "Computer Programming II",
        "Computer Programming III",
        "Game Design",
        "Game Programming I",
        "Game Programming II",
    ],
    Languages: [
        "Mandarin Chinese (I - IV)",
        "Spanish (I - IV)",
        "French (I - IV)",
    ],
};

const classGrid = document.getElementById("classgrid");

Object.entries(classesBySubject).forEach(([subject, classes]) => {
    const card = document.createElement("div");
    card.className = "class-card";
    card.dataset.tooltip = subject.toUpperCase();
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", subject);
    card.setAttribute("aria-expanded", "false");
    card.append(document.createTextNode(subject));

    const icon = document.createElement("span");
    icon.className = "material-symbols-outlined";
    icon.textContent = "expand_circle_down";
    card.append(icon);

    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";
    dropdown.id = `class-details-${subject.toLowerCase()}`;
    dropdown.setAttribute("aria-hidden", "true");
    card.setAttribute("aria-controls", dropdown.id);

    const list = document.createElement("ul");
    classes.forEach((className) => {
        const item = document.createElement("li");
        item.textContent = className;
        list.append(item);
    });

    dropdown.append(list);
    card.append(dropdown);

    const toggleDetails = () => {
        const isOpen = card.classList.toggle("is-open");
        card.setAttribute("aria-expanded", String(isOpen));
        dropdown.setAttribute("aria-hidden", String(!isOpen));
    };

    card.addEventListener("click", toggleDetails);
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleDetails();
        }
    });

    classGrid.append(card);
});
