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
   START EXPERIENCE
========================= */

function startExperience() {

    const music =
        document.getElementById("bgMusic");


    /*
       Start music after the user
       directly taps the button.
    */

    music.volume = 0.65;


    music.play().catch((error) => {

        console.log(
            "Audio could not start:",
            error
        );

    });


    /*
       Start hearts.
    */

    startHeartAnimation();


    /*
       Move to Question 1.
    */

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
   HEART ANIMATION
========================= */

let heartsStarted = false;


function startHeartAnimation() {

    /*
       Prevent multiple intervals
       if the function is called again.
    */

    if (heartsStarted) {
        return;
    }


    heartsStarted = true;


    const container =
        document.querySelector(
            ".heart-container"
        );


    /*
       Create hearts continuously.
    */

    setInterval(() => {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        /*
           Filled or outline heart.
        */

        heart.innerHTML =
            Math.random() > 0.5
                ? "♥"
                : "♡";


        /*
           Random horizontal
           starting position.
        */

        heart.style.left =
            Math.random() * 100 +
            "vw";


        /*
           Random size.
        */

        const size =
            8 +
            Math.random() * 12;


        heart.style.fontSize =
            size + "px";


        /*
           Random speed.
        */

        heart.style.animationDuration =
            6 +
            Math.random() * 7 +
            "s";


        /*
           Random sideways
           movement.
        */

        heart.style.setProperty(
            "--drift1",
            (
                -40 +
                Math.random() * 80
            ) + "px"
        );


        heart.style.setProperty(
            "--drift2",
            (
                -70 +
                Math.random() * 140
            ) + "px"
        );


        heart.style.setProperty(
            "--drift3",
            (
                -120 +
                Math.random() * 240
            ) + "px"
        );


        container.appendChild(
            heart
        );


        /*
           Delete after animation.
        */

        setTimeout(() => {

            heart.remove();

        }, 14000);


    }, 450);
}


/* =========================
   SPARKLES
========================= */

function createSparkles() {

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const sparkle =
            document.createElement("div");


        sparkle.innerHTML =
            Math.random() > 0.5
                ? "✨"
                : "💗";


        sparkle.style.position =
            "fixed";


        sparkle.style.left =
            Math.random() * 100 +
            "vw";


        sparkle.style.top =
            Math.random() * 100 +
            "vh";


        sparkle.style.fontSize =
            10 +
            Math.random() * 20 +
            "px";


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
