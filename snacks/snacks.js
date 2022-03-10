/*
Snack 1:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es:
['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
Snack 2:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
Snack 3:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/
const mainContainer = document.querySelector("main");

// SNACK 1
wordsArray = [
	"INSEGNANTE",
	"bianco",
	"aSCIUGAMANO",
	"MOTOCICLETTA",
	"gufo",
	"autobus",
	"vecchio",
	"BICCHIERE",
	"bURGER",
	"lavatrice",
];

const capitalisedWordsArray = wordsArray.map((word) => {
	return word[0].toUpperCase() + word.substring(1).toLowerCase(); //Prendo la prima lettera della parola e la trasformo maiuscola quindi prendo la substringa che parte dal secondo carattere e la trasformo in minuscole
});

//console.log(capitalisedWordsArray);
mainContainer.innerHTML = `${wordsArray}<br>`;
mainContainer.innerHTML += `${capitalisedWordsArray}<br>`;
mainContainer.innerHTML += "-------------------------<br>";
//SNACK 2
const animalsArray = [
	{ nome: "leone", famiglia: "felidi", classe: "mammiferi" },
	{ nome: "cane", famiglia: "canidi", classe: "mammiferi" },
	{ nome: "gatto", famiglia: "felidi", classe: "mammiferi" },
	{ nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
	{ nome: "tacchino", famiglia: "fasianidi", classe: "uccelli" },
	{ nome: "maiale", famiglia: "suidi", classe: "mammiferi" },
	{ nome: "cobra", famiglia: "elapidi", classe: "rettile" },
	{ nome: "merluzzo", famiglia: "gadidi", classe: "attinopterigi" },
	{ nome: "mucca", famiglia: "bovidi", classe: "mammiferi" },
	{ nome: "trota", famiglia: "salmonidi", classe: "attinopterigi" },
];

let mammalAnimalsArray = animalsArray.filter((animal) => {
	if (animal.classe == "mammiferi") {
		return animal;
	}
});

mammalAnimalsArray = mammalAnimalsArray.map((animal) => {
	return animal.nome;
});

console.table(mammalAnimalsArray);
mainContainer.innerHTML += `${mammalAnimalsArray}<br>`;
mainContainer.innerHTML += "-------------------------<br>";

//SNACK 3
const people = [
	{
		nome: "Alessandro",
		cognome: "Tucci",
		età: 38,
	},
	{
		nome: "Franca",
		cognome: "Garzetta",
		età: 60,
	},
	{
		nome: "Andrea",
		cognome: "Accica",
		età: 3,
	},
	{
		nome: "Giuseppe",
		cognome: "Giaccio",
		età: 31,
	},
	{
		nome: "Eleonora",
		cognome: "Candeloro",
		età: 20,
	},
	{
		nome: "Gianclaudio",
		cognome: "Bosica",
		età: 17,
	},
	{
		nome: "Domenico",
		cognome: "Pietrangelo",
		età: 2,
	},
	{
		nome: "Giuseppe",
		cognome: "Agati",
		età: 49,
	},
	{
		nome: "Valentina",
		cognome: "Di Virgilio",
		età: 9,
	},
	{
		nome: "Caterina",
		cognome: "Bosetti",
		età: 24,
	},
];
//non creo un nuovo array ma utilizzo quello che ho
people.forEach((person) => {
	if (person.età >= 18) {
		mainContainer.innerHTML += `<div>${person.nome} ${person.cognome} può guidare</div>`;
	} else {
		mainContainer.innerHTML += `<div>${person.nome} ${person.cognome} NON può guidare</div>`;
	}
});
