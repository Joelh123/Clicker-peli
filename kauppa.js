if (localStorage.getItem("shamrock-amount") == null) {
    localStorage.setItem("shamrock-amount", 0);
}

if (localStorage.getItem("sateenkaari-price") == null, localStorage.getItem("sateenkaari-price") == null, localStorage.getItem("sateenkaari-sps") == null) {
    localStorage.setItem("sateenkaari-price", 10);
    localStorage.setItem("sateenkaari-sps", 1);
    localStorage.setItem("sateenkaari-bought", "false");
}

if (localStorage.getItem("kultapata-price") == null, localStorage.getItem("kultapata-price") == null, localStorage.getItem("kultapata-sps") == null) {
    localStorage.setItem("kultapata-price", 100);
    localStorage.setItem("kultapata-sps", 5);
    localStorage.setItem("kultapata-bought", "false");
}

if (localStorage.getItem("leprechaun-price") == null, localStorage.getItem("leprechaun-price") == null, localStorage.getItem("leprechaun-sps") == null) {
    localStorage.setItem("leprechaun-price", 1000);
    localStorage.setItem("leprechaun-sps", 50);
    localStorage.setItem("leprechaun-bought", "false");
}

window.onload = function() {

    displayPrices();
    displayShamrocks();
}

function displayShamrocks() {
    let amount = localStorage.getItem("shamrock-amount");
    
    document.getElementById("display-shamrock-amount").innerHTML = amount;
}

function displayPrices() {
    document.getElementById("sateenkaari-hinta").innerHTML = localStorage.getItem("sateenkaari-price");
    document.getElementById("kultapata-hinta").innerHTML = localStorage.getItem("kultapata-price");
    document.getElementById("leprechaun-hinta").innerHTML = localStorage.getItem("leprechaun-price");
}

function sateenkaari() {
    localStorage.setItem("shamrock-amount", parseFloat(localStorage.getItem("shamrock-amount")) + parseFloat(localStorage.getItem("sateenkaari-sps")));
    displayShamrocks();
}

function kultapata() {
    localStorage.setItem("shamrock-amount", parseFloat(localStorage.getItem("shamrock-amount")) + parseFloat(localStorage.getItem("kultapata-sps")));
    displayShamrocks()
}

function leprechaun() {
    localStorage.setItem("shamrock-amount", parseFloat(localStorage.getItem("shamrock-amount")) + parseFloat(localStorage.getItem("leprechaun-sps")));
    displayShamrocks()
}

function ostaSateenkaari() {
    if (parseFloat(localStorage.getItem("shamrock-amount")) >= parseFloat(localStorage.getItem("sateenkaari-price")) && localStorage.getItem("sateenkaari-bought") != "true") {
        localStorage.setItem("sateenkaari-bought", "true");
        localStorage.setItem("shamrock-amount", parseFloat(localStorage.getItem("shamrock-amount")) - parseFloat(localStorage.getItem("sateenkaari-price")));
        localStorage.setItem("sateenkaari-price", parseFloat(localStorage.getItem("sateenkaari-price") * 1.5))
        location.reload();
    }

    if (parseFloat(localStorage.getItem("shamrock-amount")) >= parseFloat(localStorage.getItem("sateenkaari-price"))) {
        localStorage.setItem("shamrock-amount", parseFloat(localStorage.getItem("shamrock-amount")) - parseFloat(localStorage.getItem("sateenkaari-price")));
        localStorage.setItem("sateenkaari-sps", parseFloat(localStorage.getItem("sateenkaari-sps")) + 1)
        localStorage.setItem("sateenkaari-price", Math.round(parseFloat(localStorage.getItem("sateenkaari-price") * 1.5)))
        location.reload();
    }
    displayPrices();
    displayShamrocks();
}

function ostaKultapata() {
    if (parseFloat(localStorage.getItem("shamrock-amount")) >= parseFloat(localStorage.getItem("kultapata-price")) && localStorage.getItem("kultapata-bought") != "true") {
        localStorage.setItem("kultapata-bought", "true");
        localStorage.setItem("shamrock-amount", parseFloat(localStorage.getItem("shamrock-amount")) - parseFloat(localStorage.getItem("kultapata-price")));
        localStorage.setItem("kultapata-price", parseFloat(localStorage.getItem("kultapata-price") * 1.5))
        location.reload();
    }

    if (parseFloat(localStorage.getItem("shamrock-amount")) >= parseFloat(localStorage.getItem("kultapata-price"))) {
        localStorage.setItem("shamrock-amount", parseFloat(localStorage.getItem("shamrock-amount")) - parseFloat(localStorage.getItem("kultapata-price")));
        localStorage.setItem("kultapata-sps", parseFloat(localStorage.getItem("kultapata-sps")) + 1)
        localStorage.setItem("kultapata-price", Math.round(parseFloat(localStorage.getItem("kultapata-price") * 1.5)))
        location.reload();
    }
    displayPrices();
    displayShamrocks();
}

function ostaLeprechaun() {
    if (parseFloat(localStorage.getItem("shamrock-amount")) >= parseFloat(localStorage.getItem("leprechaun-price")) && localStorage.getItem("leprechaun-bought") != "true") {
        localStorage.setItem("leprechaun-bought", "true");
        localStorage.setItem("shamrock-amount", parseFloat(localStorage.getItem("shamrock-amount")) - parseFloat(localStorage.getItem("leprechaun-price")));
        localStorage.setItem("leprechaun-price", parseFloat(localStorage.getItem("leprechaun-price") * 1.5))
        location.reload();
    }

    if (parseFloat(localStorage.getItem("shamrock-amount")) >= parseFloat(localStorage.getItem("leprechaun-price"))) {
        localStorage.setItem("shamrock-amount", parseFloat(localStorage.getItem("shamrock-amount")) - parseFloat(localStorage.getItem("leprechaun-price")));
        localStorage.setItem("leprechaun-sps", parseFloat(localStorage.getItem("leprechaun-sps")) + 1)
        localStorage.setItem("leprechaun-price", Math.round(parseFloat(localStorage.getItem("leprechaun-price") * 1.5)))
        location.reload();
    }
    displayPrices();
    displayShamrocks();
}

if (localStorage.getItem("sateenkaari-bought") == "true") {
    var intervalId = window.setInterval(function(){
        sateenkaari();
    }, 1000);
}

if (localStorage.getItem("kultapata-bought") == "true") {
    var intervalId = window.setInterval(function(){
        kultapata();
    }, 1000);
}

if (localStorage.getItem("leprechaun-bought") == "true") {
    var intervalId = window.setInterval(function(){
        leprechaun();
    }, 1000);
}