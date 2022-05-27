/* Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Bonus
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/



start()
const play = document.getElementById("play");
play.addEventListener("click", start);

//funzione start da dare al bottone
function start() {

    //Variabili griglia e bottone
    //Variabili griglia e difficulty selector
    const grid = document.getElementById("grid");
    const play = document.getElementById("play");
    const difficulty = play.value;
    grid.innerHTML = "";
    const difficultySelector = document.getElementById("difficulty-selector");
    const difficulty = difficultySelector.value;

    //funzioni da eseguire
    difficultyManager(grid, difficulty);
}

// Funzione che gestisce le difficoltà
function difficultyManager(element, value) {
    if (value == 1) {
        gridGenerator(element, 1, 100) //Easy
    } else if (value == 2) {
        gridGenerator(element, 1, 81) //Medium
function difficultyManager(grid, difficulty) {
    if (difficulty == 1) {
        gridGenerator(grid, 1, 100) //Easy
    } else if (difficulty == 2) {
        gridGenerator(grid, 1, 81) //Medium
    } else {
        gridGenerator(element, 1, 49) //Hard
        gridGenerator(grid, 1, 49) //Hard
    }

}

//Genera la griglia con ciascun elemento
function gridGenerator(element, min, max) {
function gridGenerator(grid, min, max) {

    for (let i = 0; i < 100; i++) {
        //Crea gridSquare
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        let randomNumber = randomNumberGen(min, max)
        gridSquare.innerHTML = '<div class="grid-number">' + randomNumber +'</div>';
        gridSquare.innerHTML = '<div class="grid-number">' + randomNumber + '</div>';

        //Aggiunge eventListener al click e fa append all'elemento in input
        gridSquare.addEventListener("click", addActiveClass);
        element.append(gridSquare);
        grid.append(gridSquare);
    }

}
}

function randomNumberGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//Aggiunge la classe "active" ad un elemento
function addActiveClass() {
    this.classList.add("active");
}
