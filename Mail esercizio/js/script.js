
// Program Logic
const emailAccess = ["gino65@gmail.com", "hinekeh54@gmail.com", "marco23@gmail.com", "luka29@gmail.com" ];
console.log(emailAccess);

const userEmail = prompt("Ciao! Inserisci la tua email");
console.log(userEmail);

let access = false;

for (let i = 0 ; i < emailAccess.length ; i++) {
    const emailData = emailAccess[i];

    if (emailData === userEmail) {
        access = true;
    } 
    
    console.log (emailData, userEmail, access);
}

if (access) {
    console.log ("La tua email e' presente puoi accedere");
    document.getElementById("result").innerHTML = "La tua email e' presente puoi accedere"
} else {
    console.log ("La tua email non e' presente nella lista d'accesso. Non puoi ACCEDERE!");
    document.getElementById("result").innerHTML = "La tua email non e' presente nella lista d'accesso. Non puoi ACCEDERE!"
}

