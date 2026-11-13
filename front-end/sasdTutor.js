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
    card.append(document.createTextNode(subject));

    const icon = document.createElement("span");
    icon.className = "material-symbols-outlined";
    icon.textContent = "expand_circle_down";
    card.append(icon);

    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";

    const list = document.createElement("ul");
    classes.forEach((className) => {
        const item = document.createElement("li");
        item.textContent = className;
        list.append(item);
    });

    dropdown.append(list);
    card.append(dropdown);
    classGrid.append(card);
});
