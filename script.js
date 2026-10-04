/* =========================
   SCREEN CHANGE
========================= */

function changeScreen(current, next) {

    document
        .getElementById(current)
        .classList
        .remove("active");

    setTimeout(() => {

        document
            .getElementById(next)
            .classList
            .add("active");

    }, 250);
}


/* =========================
   START EXPERIENCE + MUSIC
========================= */

function startExperience() {

    const music =
        document.getElementById("bgMusic");

    /*
       Start music directly from the
       button click so the browser
       recognizes it as a user action.
    */

    music.volume = 0.65;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                console.log("BGM started successfully.");

            })
            .catch((error) => {

                console.log(
                    "BGM could not start:",
                    error
                );

            });
    }

    startHeartAnimation();

    changeScreen(
        "intro",
        "question1"
    );
}


/* =========================
   QUESTION 1
========================= */

function chooseOne() {

    createSparkles();

    changeScreen(
        "question1",
        "question2"
    );
}


/* =========================
   QUESTION 2
========================= */

function chooseTwo() {

    createSparkles();

    setTimeout(() => {

        changeScreen(
            "question2",
            "reveal"
        );

    }, 400);
}


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    changeScreen(
        "reveal",
        "letter"
    );
}


/* =========================
   FINAL REVEAL
========================= */

function finalReveal() {

    changeScreen(
        "letter",
        "final"
    );

    createSparkles();

    setTimeout(
        createSparkles,
        500
    );

    setTimeout(
        createSparkles,
        1000
    );
}


/* =========================
   FLOATING HEARTS
========================= */

let heartsStarted = false;

function startHeartAnimation() {

    if (heartsStarted) {
        return;
    }

    heartsStarted = true;

    const container =
        document.querySelector(
            ".heart-container"
        );

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.innerHTML =
            Math.random() > 0.5
                ? "♥"
                : "♡";

        heart.style.left =
            Math.random() * 100 + "vw";

        const size =
            8 + Math.random() * 12;

        heart.style.fontSize =
            size + "px";

        heart.style.animationDuration =
            6 + Math.random() * 7 + "s";

        heart.style.setProperty(
            "--drift1",
            (-40 + Math.random() * 80) + "px"
        );

        heart.style.setProperty(
            "--drift2",
            (-70 + Math.random() * 140) + "px"
        );

        heart.style.setProperty(
            "--drift3",
            (-120 + Math.random() * 240) + "px"
        );

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 14000);

    }, 450);
}


/* =========================
   SPARKLES
========================= */

function createSparkles() {

    for (let i = 0; i < 20; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.innerHTML =
            Math.random() > 0.5
                ? "✨"
                : "💗";

        sparkle.style.position =
            "fixed";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";

        sparkle.style.fontSize =
            10 + Math.random() * 20 + "px";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.zIndex =
            "10";

        sparkle.style.animation =
            "sparkleFloat 2s ease forwards";

        document.body.appendChild(
            sparkle
        );

        setTimeout(() => {

            sparkle.remove();

        }, 2000);
    }
}


/* =========================
   SPARKLE ANIMATION
========================= */

const sparkleStyle =
    document.createElement("style");

sparkleStyle.innerHTML = `

@keyframes sparkleFloat {

    0% {

        opacity: 0;

        transform:
            scale(0)
            translateY(0);
    }

    30% {

        opacity: 1;

        transform:
            scale(1.2);
    }

    100% {

        opacity: 0;

        transform:
            scale(0.4)
            translateY(-100px);
    }

}

`;

document.head.appendChild(
    sparkleStyle
);
