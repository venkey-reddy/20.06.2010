/* =================================
   SCREEN CHANGE
   Only ONE screen is active.
================================= */

function changeScreen(current, next) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    setTimeout(() => {

        const nextScreen =
            document.getElementById(next);

        if (nextScreen) {

            nextScreen.classList.add("active");

        }

    }, 250);
}


/* =================================
   START EXPERIENCE
================================= */

function startExperience() {

    const music =
        document.getElementById("bgMusic");

    const memoryMusic =
        document.getElementById("memoryMusic");


    memoryMusic.pause();

    memoryMusic.currentTime = 0;


    music.volume = 0.65;


    music.play().catch(error => {

        console.log(
            "Main BGM could not start:",
            error
        );

    });


    startHeartAnimation();


    changeScreen(
        "intro",
        "question1"
    );
}


/* =================================
   OPEN IMMEDIATELY
================================= */

function openImmediately(currentPage) {

    createSparkles();


    setTimeout(() => {

        openMemoryPage(currentPage);

    }, 450);
}


/* =================================
   TWO MINUTE TIMER
================================= */

let timerInterval = null;


function startTwoMinuteTimer(currentPage) {

    clearInterval(timerInterval);


    changeScreen(
        currentPage,
        "timerPage"
    );


    let seconds = 120;


    updateTimer(seconds);


    timerInterval =
        setInterval(() => {

            seconds--;


            updateTimer(seconds);


            if (seconds <= 0) {

                clearInterval(
                    timerInterval
                );


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


/* =================================
   TIMER DISPLAY
================================= */

function updateTimer(seconds) {

    const minutes =
        Math.floor(seconds / 60);


    const remainingSeconds =
        seconds % 60;


    document
        .getElementById("timer")
        .textContent =

        String(minutes)
            .padStart(2, "0")

        + ":" +

        String(remainingSeconds)
            .padStart(2, "0");
}


/* =================================
   I CAN'T WAIT
================================= */

function cantWait() {

    clearInterval(
        timerInterval
    );


    createSparkles();


    changeScreen(
        "timerPage",
        "question1Again"
    );
}


/* =================================
   NOT INTERESTED
================================= */

function notInterested(currentPage) {

    clearInterval(
        timerInterval
    );


    createSparkles();


    playLastSevenSeconds();


    setTimeout(() => {

        changeScreen(
            currentPage,
            "notInterestedPage"
        );

    }, 700);
}


/* =================================
   PLAY LAST 7 SECONDS
================================= */

function playLastSevenSeconds() {

    const music =
        document.getElementById("bgMusic");


    if (
        music.readyState >= 1 &&
        isFinite(music.duration)
    ) {

        music.currentTime =
            Math.max(
                0,
                music.duration - 7
            );


        music.volume = 0.65;


        music.play().catch(() => {});

    }


    setTimeout(() => {

        music.pause();

    }, 7000);
}


/* =================================
   REQUEST PAGE
================================= */

function showMeMemory() {

    createSparkles();


    openMemoryPage(
        "notInterestedPage"
    );
}


/* =================================
   GO BACK
================================= */

function goBackQuestion() {

    changeScreen(
        "notInterestedPage",
        "question1Again"
    );
}


/* =================================
   MEMORY PAGE
================================= */

function openMemoryPage(previousPage) {

    clearInterval(
        timerInterval
    );


    const mainMusic =
        document.getElementById(
            "bgMusic"
        );


    const memoryMusic =
        document.getElementById(
            "memoryMusic"
        );


    /* Stop first BGM */

    mainMusic.pause();


    /* Start memory BGM */

    memoryMusic.currentTime = 0;

    memoryMusic.volume = 0.65;


    memoryMusic.play().catch(error => {

        console.log(
            "Memory BGM could not start:",
            error
        );

    });


    createSparkles();


    changeScreen(
        previousPage,
        "memoryPage"
    );


    setTimeout(() => {

        playMemoryVideo();

    }, 600);
}


/* =================================
   MEMORY VIDEO
================================= */

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
            "Video autoplay was blocked."
        );

    });
}


/* =================================
   FLOATING HEARTS
================================= */

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
            document.createElement(
                "div"
            );


        heart.className =
            "floating-heart";


        heart.innerHTML =
            Math.random() > 0.5
                ? "♥"
                : "♡";


        heart.style.left =
            Math.random() * 100 + "vw";


        const size =
            8 +
            Math.random() * 12;


        heart.style.fontSize =
            size + "px";


        heart.style.animationDuration =
            6 +
            Math.random() * 7 +
            "s";


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


        setTimeout(() => {

            heart.remove();

        }, 14000);


    }, 450);
}


/* =================================
   SPARKLES
================================= */

function createSparkles() {

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const sparkle =
            document.createElement(
                "div"
            );


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


/* =================================
   SPARKLE ANIMATION
================================= */

const sparkleStyle =
    document.createElement(
        "style"
    );


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


/* =================================
   PHOTO VIEWER
================================= */

let photoZoom = 1;


/* Open photo */

function openPhoto(imagePath) {

    const viewer =
        document.getElementById(
            "photoViewer"
        );


    const image =
        document.getElementById(
            "selectedPhoto"
        );


    photoZoom = 1;


    image.src =
        imagePath;


    image.style.transform =
        "scale(1)";


    viewer.classList.add(
        "active"
    );
}


/* =================================
   CLOSE PHOTO
================================= */

function closePhoto(event) {

    /*
       Close only when:
       - dark background is clicked
       - X button is clicked
    */

    if (
        event &&
        event.target.id !==
            "photoViewer" &&

        !event.target.classList
            .contains("photo-close")
    ) {

        return;

    }


    const viewer =
        document.getElementById(
            "photoViewer"
        );


    viewer.classList.remove(
        "active"
    );
}


/* =================================
   ZOOM PHOTO
================================= */

function zoomPhoto(
    amount,
    event
) {

    if (event) {

        event.stopPropagation();

    }


    photoZoom += amount;


    /* Minimum */

    if (photoZoom < 1) {

        photoZoom = 1;

    }


    /* Maximum */

    if (photoZoom > 3) {

        photoZoom = 3;

    }


    const image =
        document.getElementById(
            "selectedPhoto"
        );


    image.style.transform =
        "scale(" +
        photoZoom +
        ")";
}


/* =================================
   FINAL REVEAL
================================= */

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
