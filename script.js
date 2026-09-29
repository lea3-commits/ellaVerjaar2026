
let clicked = false;

function wrongEvent() {
    let button = document.getElementById("nie");
    clicked = true;
    button.classList.remove("warning");
    button.classList.add("wrong");
    button.innerText = "Oeps! Jy het die verkeerde knoppie geklik. Probeer weer.";
}

function mouseOver() {
    if (clicked) return;
    let button = document.getElementById("nie");
    button.classList.add("warning");
    button.innerText = "NEE NIE HIERDIE KNOPPIE NIE JYS VERKEERD!!!!!!";
}

function mouseOut() {
    if (clicked) return;
    let button = document.getElementById("nie");
    button.classList.remove("warning");
    button.innerText = "Kliek hier as jy NIE vandag verjaar nie.";
}

function showFrameVerjaar() {
    let iframe = document.getElementById("frameVerjaar");
    iframe.style.display = "block";
}

function hideFrameVerjaar() {
    let iframe = document.getElementById("frameVerjaar");
    iframe.style.display = "none";
}

let clickCount = 0;
function verjaarClick() {
    clickCount++;
    let button = document.getElementById("verjaar");
    if (clickCount === 1) {
        showFrameVerjaar();
        button.innerText = "Kliek hierdie knoppie as jy nou genoeg gehad het.";
    } else if (clickCount === 2) {
        alert("Jy's afskuwelik! Ek doen al hierdie moeite net vir jou om te se jy het genoeg gehad?!");
        button.innerText = "As jy RERIG dink jy't genoeg gehad kan jy seker maar weer hier kliek...";
    } else if (clickCount === 3) {
        button.innerText = "As jy DODELIK DOODSEKER is dat jy genoeg gehad het, kliek hier."
    } else if (clickCount === 4) {
        hideFrameVerjaar();
        button.innerText = "Kliek hier as jy vandag verjaar.";
        clickCount = 0;
    }
}