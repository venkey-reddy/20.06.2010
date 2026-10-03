function changeScreen(current, next) {

    document.getElementById(current).classList.remove("active");

    setTimeout(() => {

        document.getElementById(next).classList.add("active");

    }, 250);
}


/* Start */

function startExperience() {

    changeScreen("intro", "question1");

}


/* First question */

function chooseOne() {

    createSparkles();

    changeScreen("question1", "question2");

}


/* Second question */

function chooseTwo() {

    createSparkles();

    setTimeout(() => {

        changeScreen("question2", "reveal");

    }, 400);

}


/* Open letter */

function openLetter() {

    changeScreen("reveal", "letter");

}


/* Final */

function finalReveal() {

    changeScreen("letter", "final");

    createSparkles();

    setTimeout(createSparkles, 500);

    setTimeout(createSparkles, 1000);

}


/* Sparkles */

function createSparkles() {

    for (let i = 0; i < 20; i++) {

        const sparkle = document.createElement("div");

        sparkle.innerHTML =
            Math.random() > 0.5 ? "✨" : "💗";

        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";

        sparkle.style.fontSize =
            (10 + Math.random() * 20) + "px";

        sparkle.style.pointerEvents = "none";

        sparkle.style.zIndex = "10";

        sparkle.style.animation =
            "sparkleFloat 2s ease forwards";

        document.body.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 2000);

    }

}


/* Dynamic sparkle animation */

const style = document.createElement("style");

style.innerHTML = `

@keyframes sparkleFloat {

    0% {

        opacity: 0;

        transform: scale(0) translateY(0);

    }

    30% {

        opacity: 1;

        transform: scale(1.2);

    }

    100% {

        opacity: 0;

        transform:
            scale(0.4)
            translateY(-100px);

    }

}

`;

document.head.appendChild(style);