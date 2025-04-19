// jesus this is cringe


// phrases = ["Javascript Menace", "Networking Hubristic", "OpenSource Obsessor", "Git Gambler", "Rate Limit Rebel", "Semicolon Denialist", "Java Skeptic"];

// var currentText = document.getElementById("rollingText").innerHTML;
// var updateInterval = 6000; // time in ms

// let index = 0;

// setInterval(() => {
//     index = (index + 1) % phrases.length;

//     document.getElementById("rollingText").innerHTML = " "; // whitespace to stop text from jumping - idk why but a normal space doesn't work

//     let currentPhrase = phrases[index];
//     for (let i = 0; i < currentPhrase.length; i++) {
//         setTimeout(() => {
//             document.getElementById("rollingText").innerHTML += currentPhrase[i];
//         }, i * 100);
//     }


//     let typingDuration = currentPhrase.length * 100;
//     setTimeout(() => {
//         let dotInterval = setInterval(() => {
//             document.getElementById("rollingText").innerHTML += ".";
//         }, 500);

//         setTimeout(() => {
//             clearInterval(dotInterval);
//         }, updateInterval - typingDuration);
//     }, typingDuration);
// }, updateInterval);