var countDate = new Date("sat, 9, july, 2022").getTime();
var now = new Date().getTime();
var distance = countDate - now;


var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");