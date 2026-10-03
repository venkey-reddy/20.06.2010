/* =========================
   SCREEN CHANGER
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

    /*
       The music starts only after the
       user taps the button.

       This is important for mobile
       browser autoplay restrictions.
    */

    const music =
        document.getElementById("bgMusic");


    music.volume = 0.65;


    music.play().catch(() => {

        console.log(
            "Music could not start automatically."
        );

    });


    /*
       Start the floating hearts.
    */

    createHearts();


    /*
       Move to first question.
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
   FLOATING HEARTS
========================= */

function createHearts() {

    const container =
        document.querySelector(
            ".heart-container"
        );


    /*
       Create a new heart
       every 450 milliseconds.
    */

    setInterval(() => {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        /*
           Randomly choose a
           filled or outline heart.
        */

        heart.innerHTML =
            Math.random() > 0.5
                ? "♥"
                : "♡";


        /*
           Random horizontal position.
        */

        heart.style.left =
            Math.random() * 100 + "vw";


        /*
           Random heart size.
        */

        const size =
            8 +
            Math.random() * 12;


        heart.style.fontSize =
            size + "px";


        /*
           Random floating speed.
        */

        heart.style.animationDuration =
            6 +
            Math.random() * 7 +
            "s";


        /*
           Random sideways movement.
        */

        heart.style.setProperty(
            "--drift1",
            (-40 +
                Math.random() * 80) +
            "px"
        );


        heart.style.setProperty(
            "--drift2",
            (-70 +
                Math.random() * 140) +
            "px"
        );


        heart.style.setProperty(
            "--drift3",
            (-120 +
                Math.random() * 240) +
            "px"
        );


        container.appendChild(
            heart
        );


        /*
           Remove the heart after
           the animation finishes.
        */

        setTimeout(() => {

            heart.remove();

        }, 14000);


    }, 450);
}


/* =========================
   SPARKLE EFFECT
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

const style =
    document.createElement("style");


style.innerHTML = `

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
    style
);
