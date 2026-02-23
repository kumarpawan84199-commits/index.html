let start = localStorage.getItem("start");

if(!start){
start = Date.now();
localStorage.setItem("start", start);
}

function updateTimer(){
let now = Date.now();
let diff = now - start;

let days = Math.floor(diff/86400000);
let hours = Math.floor(diff/3600000)%24;
let minutes = Math.floor(diff/60000)%60;
let seconds = Math.floor(diff/1000)%60;

document.getElementById("timer").innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s";

let scale = 1 + (days / 365);
if(scale > 1.8) scale = 1.8;

document.getElementById("treeSVG").style.transform =
"scale("+scale+")";
}

function resetTree(){
start = Date.now();
localStorage.setItem("start", start);
}

setInterval(updateTimer,1000);