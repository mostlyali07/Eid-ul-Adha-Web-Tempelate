var countDate = new Date("sat, 9, july, 2022").getTime();
var recent = new Date().getTime();
var distance = countDate - recent;


var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m ";
console.log(days + "d " + hours + "h " + minutes + "m ");