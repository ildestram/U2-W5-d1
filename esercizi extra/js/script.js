let timeLeft = document.getElementById("time-left")

let nextBirthday = new Date("07/07/2023")
// 1 secondo = 1000 millesecondi
let second = 1000
let minute = second * 60
let hour = minute * 60
let day = hour * 24
let timerBirthday
// let today = new Date()

// console.log(nextBirthday)
function countDownBirthday() {
    let today = new Date()
    let time = nextBirthday - today
    // console.log(time)

    if(time <= -day) {
        timeLeft.innerHTML = "Il tuo compleanno è passato!"
        clearInterval(timerBirthday)
        return 
    }

    // se è già stato il mio compleanno
    if (time <= 0) {
        timeLeft.innerHTML = "Happy Birthday, bro!"
        clearInterval(timerBirthday)
        return 
    }

    let days = Math.floor(time / day)
    let hours = Math.floor((time % days) / hour )
    let minutes = Math.floor((time % hour) / minute)
    let seconds = Math.floor((time % minutes) / second)

    timeLeft.innerHTML = days + "giorni " + hours + "ore " + minutes + "minuti " + seconds + "secondi"
}

// let timerBirthday = setInterval(countDownBirthday, second)
timerBirthday = setInterval(countDownBirthday, second)