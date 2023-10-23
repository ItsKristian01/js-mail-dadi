// Program Logic 
userNumber = Math.floor(Math.random()* 6) + 1;
cpuNumber = Math.floor(Math.random()* 6) + 1;

console.log(userNumber, cpuNumber);

if (userNumber > cpuNumber) {
   console.log("Il Giocatore e' il vincitore");
   document.getElementById("winner").innerHTML = "Il Giocatore e' il vincitore";
} else if (cpuNumber > userNumber) {
    console.log("Il Computer e' il vincitore");
    document.getElementById("winner").innerHTML = "Il Computer e' il vincitore" ;
} else if (userNumber === cpuNumber) {
    console.log("Non c'e nessun vincitore");
    document.getElementById("winner").innerHTML = "Non c'e nessun vincitore";
}

document.getElementById("score").innerHTML += `${userNumber} ${cpuNumber}`;