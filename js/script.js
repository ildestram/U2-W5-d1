// 1) Richiamo la data attuale
let todayDate = new Date();
console.log(todayDate);


// 2) Mostra la data in una pagina HTML
document.getElementById('date-screen').innerHTML = todayDate

// 3) Mostrare gli elementi singoli della data: anno, mese, giorno, data, ore, minuti e secondi
todayDate.getFullYear()
console.log(todayDate.getFullYear())
document.getElementById('year').innerHTML = todayDate.getFullYear()

todayDate.getMonth()
console.log(todayDate.getMonth())
document.getElementById('month').innerHTML = todayDate.getMonth()

todayDate.getDay()
console.log(todayDate.getDay())
document.getElementById('day').innerHTML = todayDate.getDay()

todayDate.getDate()
console.log(todayDate.getDate())
document.getElementById('number-day').innerHTML = todayDate.getDate()

todayDate.getHours()
console.log(todayDate.getHours())

todayDate.getMinutes()
console.log(todayDate.getMinutes())

todayDate.getSeconds()
console.log(todayDate.getSeconds())


// 4) Creare un sistema per la formattazione in formato europeo
let europeanDate = new Date()
console.log(europeanDate)
new Date().toLocaleDateString("uk-UK")
console.log(new Date().toLocaleDateString("uk-UK"))
new Date().toLocaleDateString("it-IT")
console.log(new Date().toLocaleDateString("it-IT"))


// 5) Mostrare la data formattata in una pagina HTML
document.getElementById("european-format").innerHTML = new Date().toLocaleDateString("uk-UK")
document.getElementById("european-formats").innerHTML = new Date().toLocaleDateString("it-IT")




