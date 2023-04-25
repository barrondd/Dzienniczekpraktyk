const imie = document.querySelector("#name")
const nazwisko = document.querySelector("#surname")
const klasa = document.querySelector("#class")
const data = document.querySelector("#date")
const kiedy = document.querySelector("#when")
const pocz = document.querySelector("#dateStart")
const kon = document.querySelector("#dateEnd")

const display = document.querySelector(".display");
const btn = document.getElementById("submit");
btn.addEventListener("click",function(e) {
    e.preventDefault();
    console.log(imie.value);
    display.innerHTML = "imie: " + imie.value;
    display.innerHTML +=  "<br>" + " nazwisko: " +  nazwisko.value;
    display.innerHTML +=  "<br>" + " klasa: " + klasa.value;
    display.innerHTML +=  "<br>" + " Rok szkolny: " + data.value;
    display.innerHTML +=  "<br>" + " Nazwa firmy:  " + kiedy.value;
    display.innerHTML +=  "<br>" + " Początek: " + pocz.value;
    display.innerHTML +=  "<br>" + " Koniec " + kon.value;

 });
