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

    displayShamrocks();
}

function displayShamrocks() {
    let amount = localStorage.getItem("shamrock-amount");
    
    document.getElementById("display-shamrock-amount").innerHTML = amount;
}

function addShamrock() {
    let amount = parseFloat(localStorage.getItem("shamrock-amount"));

    localStorage.setItem("shamrock-amount", amount + 1);
    displayShamrocks();
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

function lisaaVoittoButton(){
    document.getElementById("voitto-button").innerHTML = '<button class="voitto-button-style" onclick="voittoButton()">VOITTO</button>';
}

function voittoButton() {
    localStorage.clear()
    location.reload()
}

if (parseFloat(localStorage.getItem("shamrock-amount")) >= 10000) {
    lisaaVoittoButton()
}