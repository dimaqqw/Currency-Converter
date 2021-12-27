let inputs = document.getElementsByTagName("input")

let eur = document.getElementById("eur")
let byn = document.getElementById("byn")
let usd = document.getElementById("usd")
let rub = document.getElementById("rub")

let rubByn = 0.0338
let usdByn = 2.57
let eurByn = 2.85
let eurUsd = 1.13
let eurRub = 83.06
let usdRub = 73.63

eur.addEventListener("keydown", (e) => {
    if(e.code == "Enter") {
        byn.value = parseInt(e.target.value * eurByn * 100) / 100
        rub.value = parseInt(e.target.value * eurRub * 100) / 100
        usd.value = parseInt(e.target.value * eurUsd * 100) / 100
    }
})

byn.addEventListener("keydown", (e) => {
    if(e.code == "Enter") {
        eur.value = parseInt(e.target.value / eurByn * 100) / 100
        rub.value = parseInt(e.target.value / rubByn * 100) / 100
        usd.value = parseInt(e.target.value / usdByn * 100) / 100
    }
})

usd.addEventListener("keydown", (e) => {
    if(e.code == "Enter") {
        eur.value = parseInt(e.target.value / eurUsd * 100) / 100
        rub.value = parseInt(e.target.value * usdRub * 100) / 100
        byn.value = parseInt(e.target.value * usdByn * 100) / 100
    }
})

rub.addEventListener("keydown", (e) => {
    if(e.code == "Enter") {
        eur.value = parseInt(e.target.value / eurRub * 100) / 100
        usd.value = parseInt(e.target.value / usdRub * 100) / 100
        byn.value = parseInt(e.target.value * rubByn * 100) / 100
    }
})