const typingElement = document.querySelector(".typing-text");

const professions = [
    "IT PROFESSIONAL",
    "WEB DEVELOPER",
    "UI DESIGNER",
    "FULL-STACK",
    "IT SUPPORT",
    "DATA ANALYST"
];

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeProfession() {
    const current = professions[professionIndex];

    typingElement.textContent = current.substring(
        0,
        characterIndex
    );

    let delay = deleting ? 45 : 90;

    if (!deleting && characterIndex < current.length) {
        characterIndex++;
    } else if (!deleting) {
        deleting = true;
        delay = 1500;
    } else if (characterIndex > 0) {
        characterIndex--;
    } else {
        deleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        delay = 400;
    }

    setTimeout(typeProfession, delay);
}

if (typingElement) {
    typeProfession();
}


/* LET'S CONNECT POPUP */
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openContact");
    const closeBtn = document.getElementById("closeContact");
    const overlay = document.getElementById("contactOverlay");

    if (!openBtn || !closeBtn || !overlay) return;

    function openPopup() {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    }

    function closePopup() {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
        openBtn.focus();
    }

    openBtn.addEventListener("click", openPopup);
    closeBtn.addEventListener("click", closePopup);

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) closePopup();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" &&
            overlay.classList.contains("active")) {
            closePopup();
        }
    });
});



