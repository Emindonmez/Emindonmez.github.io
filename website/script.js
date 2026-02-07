const card = document.querySelector(".container");
const toggleBtn = document.querySelector(".toggle-btn");
const links = document.querySelector(".links");

/* PARALLAX – DESKTOP ONLY */
if (window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    });

    document.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
}

/* TOGGLE LINKS */
toggleBtn.addEventListener("click", () => {
    links.classList.toggle("collapsed");
    toggleBtn.classList.toggle("active");
});

/* KONAMI CODE */
const konami = [
    "ArrowUp","ArrowUp",
    "ArrowDown","ArrowDown",
    "ArrowLeft","ArrowRight",
    "ArrowLeft","ArrowRight",
    "b","a"
];

let index = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === konami[index]) {
        index++;
        if (index === konami.length) {
            document.body.classList.toggle("easter-mode");
            index = 0;
        }
    } else {
        index = 0;
    }
});
