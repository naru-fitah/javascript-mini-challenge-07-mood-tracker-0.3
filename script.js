let mood = document.getElementsByClassName("mood")
let message = document.getElementById("status-message")


function selectMood(setMood) {

    // Set Message

    if (setMood === "happy") {
        message.textContent = "You are happy! 😊"
    } else if (setMood === "meh") {
        message.textContent = "You are meh... 😐"
    } else {
        message.textContent = "Oh no, you are sad 😢"
    }

    // Set Selection

    for (let i = 0; i < mood.length; i++) {
        mood[i].classList.remove("selected")
    }

    document.getElementById(setMood).classList.add("selected")

}