
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto
// studente inserendo nell’ordine: nome, cognome e età.


let nomiStudenti = ["Gabriele", "Walter", "Eugenio", "Sofia", "Morena"];
let cognomiStudenti = ["Corti", "Frongia", "Franzoso","Papa", "Fischione"];
let etaStudenti = ["21", "22", "23", "24", "25"];

let studente = {
    nome: "",
    cognome: "",
    eta: "",
}

for (let proprieta in studente){
    console.log(proprieta);
}