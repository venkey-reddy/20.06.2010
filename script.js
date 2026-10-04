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

    music.volume = 0.65;

    const playPromise =
        music.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                console.log(
                    "BGM started successfully."
                );

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
   OPTION 1
   OPEN IMMEDIATELY
========================= */

function openImmediately() {

    createSparkles();

    setTimeout(() => {

        openMemoryPage();

    }, 450);
}


/* =========================
   TWO MINUTE TIMER
========================= */

let timerInterval = null;

function startTwoMinuteTimer() {

    clearInterval(timerInterval);

    changeScreen(
        "question1",
        "timerPage"
    );

    let seconds = 120;

    updateTimer(seconds);

    timerInterval =
        setInterval(() => {

            seconds--;

            updateTimer(seconds);

            if (seconds <= 0) {

                clearInterval(timerInterval);

                createSparkles();

                setTimeout(() => {

                    changeScreen(
                        "timerPage",
                        "question1Again"
                    );

                }, 500);
            }

        }, 1000);
}


/* =========================
   TIMER AGAIN
========================= */

function startTwoMinuteTimerAgain() {

    clearInterval(timerInterval);

    changeScreen(
        "question1Again",
        "timerPage"
    );

    let seconds = 120;

    updateTimer(seconds);

    timerInterval =
        setInterval(() => {

            seconds--;

            updateTimer(seconds);

            if (seconds <= 0) {

                clearInterval(timerInterval);

                createSparkles();

                setTimeout(() => {

                    changeScreen(
                        "timerPage",
                        "question1Again"
                    );

                }, 500);
            }

        }, 1000);
}


/* =========================
   UPDATE TIMER
========================= */

function updateTimer(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;

    document.getElementById("timer")
        .textContent =
        String(minutes).padStart(2, "0")
        + ":" +
        String(remainingSeconds).padStart(2, "0");
}


/* =========================
   CAN'T WAIT
========================= */

function cantWait() {

    clearInterval(timerInterval);

    createSparkles();

    changeScreen(
        "timerPage",
        "question1Again"
    );
}


/* =========================
   NOT INTERESTED
========================= */

function notInterested() {

    createSparkles();

    playLastSevenSeconds();

    setTimeout(() => {

        changeScreen(
            "question1Again",
            "notInterestedPage"
        );

    }, 700);
}


/* =========================
   LAST 7 SECONDS OF BGM
========================= */

function playLastSevenSeconds() {

    const music =
        document.getElementById("bgMusic");

    /*
       Jump to the last 7 seconds
       of the BGM.
    */

    if (music.duration &&
        isFinite(music.duration)) {

        music.currentTime =
            Math.max(
                0,
                music.duration - 7
            );

    } else {

        music.addEventListener(
            "loadedmetadata",
            () => {

                music.currentTime =
                    Math.max(
                        0,
                        music.duration - 7
                    );

            },
            {
                once: true
            }
        );

    }

    music.volume = 0.65;

    music.play().catch(() => {});

    setTimeout(() => {

        music.pause();

    }, 7000);
}


/* =========================
   MEMORY PAGE
========================= */

function openMemoryPage() {

    createSparkles();

    changeScreen(
        "question1Again",
        "memoryPage"
    );

    setTimeout(() => {

        playMemoryVideo();

    }, 700);
}


/* =========================
   MEMORY VIDEO
========================= */

function playMemoryVideo() {

    const video =
        document.getElementById(
            "kavyaVideo"
        );

    if (!video) {
        return;
    }

    video.currentTime = 0;

    video.play().catch(() => {

        console.log(
            "Video needs a user tap to play."
        );

    });

}


/* =========================
   GO BACK
========================= */

function goBackQuestion() {

    changeScreen(
        "pleasePage",
        "question1Again"
    );
}


/* =========================
   HEART ANIMATION
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
            (-40 + Math.random() * 80)
            + "px"
        );

        heart.style.setProperty(
            "--drift2",
            (-70 + Math.random() * 140)
            + "px"
        );

        heart.style.setProperty(
            "--drift3",
            (-120 + Math.random() * 240)
            + "px"
        );

        container.appendChild(
            heart
        );

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
   SPARKLE CSS
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
