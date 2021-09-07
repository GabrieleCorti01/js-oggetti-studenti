
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto
// studente inserendo nell’ordine: nome, cognome e età.

let listaStudenti = [
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: "23"
    },
    {
        nome: "Luca",
        cognome: "Giallo",
        eta: "24",
    },
    {
        nome: "Anna",
        cognome: "Blu",
        eta: "43",
    }
]
for (let i = 0; i < listaStudenti.length; i++){
    console.log("Studente: " + listaStudenti[i]["nome"], listaStudenti[i].cognome)
}

let studenteScelto = {
    nome: prompt("Inserisci un nome!"),
    cognome: prompt("inserisci un cognome!"),
    eta: prompt("inserisci l'eta!"),
}
listaStudenti.push(studenteScelto)
console.log("studente: " + studenteScelto["nome"] + " " + studenteScelto["cognome"])

// Creo un oggetto che descriva lo studente
let studente = {
    nome: "Gabriele",
    cognome: "Corti",
    eta: "20"
}

// Stampo a schermo l'oggetto dello studente
for (let proprieta in studente){

    console.log(proprieta + ": " + studente[proprieta])
}