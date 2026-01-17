// Full screen PDF
function openFullScreen() {
    const iframe = document.getElementById("pdfFrame");
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { /* Firefox */
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE/Edge */
        iframe.msRequestFullscreen();
    }
}

// Two-page mode (book view)
let twoPage = false;
function twoPageMode() {
    const container = document.getElementById("pdfContainer");
    twoPage = !twoPage;

    if (twoPage) {
        container.classList.add("two-page");
        // duplicate iframe for 2nd page effect
        const iframeClone = document.getElementById("pdfFrame").cloneNode(true);
        iframeClone.id = "pdfFrame2";
        container.appendChild(iframeClone);
    } else {
        container.classList.remove("two-page");
        const iframe2 = document.getElementById("pdfFrame2");
        if (iframe2) iframe2.remove();
    }
}

// Lock PDF interaction
let locked = false;
function lockPDF() {
    const container = document.getElementById("pdfContainer");
    locked = !locked;

    if (locked) {
        container.classList.add("locked");
    } else {
        container.classList.remove("locked");
    }
}