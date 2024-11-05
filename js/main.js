/**Descrizione:
 * 
   Visualizzare in pagina 5 numeri casuali.
   Da lì parte un timer di 30 secondi.
   Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui 
   l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine 
   che preferisce.

   Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
   uali dei numeri da indovinare sono stati individuati.

   Potete usare liste, input e bottoni non stilizzati, mettendo stampe di
   debug in console e risultato finale in un alert.

   Solo una volta finito, a piacere e facoltativamente, potete 
   aggiungete lo stile.
*/

//Recupero elementi html
const htmlOutputNumbers = document.querySelectorAll(".output-number");
const htmlInputNumbers = document.querySelectorAll("[data-element = "input-number"]" );

const outputNumbersRow = document.getElementById("output-number-row");
const inputNumbersRow = document.getElementById("input-number-row");
const inputButton = document.getElementById("input-button");



// Funzione che genera 5 numeri randomici
const generateRandomNumbers = (min, max, tot) => {
  const resultNumbers = [];
  while (resultNumbers.length < tot) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    if (!resultNumbers.includes(randomNumber)) resultNumbers.push(randomNumber);
  }

  return resultNumbers;
};

// Genero numeri randomici per gli output elements
const numberOfElements = htmlOutputNumbers.length;
const randomNumbers = generateRandomNumbers(0, 99, numberOfElements);

// Stampo i numeri generati
for (let i = 0; i < numberOfElements; i++) {
  const currentHtmlElement = htmlOutputNumbers[i];
  const currentRandomNumber = randomNumbers[i];

  currentHtmlElement.innerText = `${currentRandomNumber}`.padStart(2, "0");
}

// Timer 30 secondi

const countdownHandler = () => {
  outputNumbersRow.classList.add("d-none");
  inputNumbersRow.classList.remove("d-none");
};

setTimeout(countdownHandler, 1000 * 30);

// Input button

inputButton.addEventListener("click", () => {
  alert("Controllo risultato");
});
