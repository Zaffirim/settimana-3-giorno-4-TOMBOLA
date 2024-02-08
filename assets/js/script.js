
let numeriEstratti = []

window.addEventListener('load', init);

function init() {
    populateGrid();
} 

function populateGrid() {
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 1; i <= 90; i++) {

        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = i;
        gridContainer.appendChild(gridItem);
    }
    
}


//funzione che mi andrà a generare un numero casuale e che mi colorerà una casella

function generateRandomNumberAndHighlight() {

    let randomNumber = Math.floor(Math.random() * 90) + 1;

    if (numeriEstratti.includes(randomNumber)) {
        // Se il numero è già stato estratto, genera un nuovo numero
        generateRandomNumberAndHighlight();
        return; // Esci dalla funzione per evitare di colorare la casella più di una volta
    }

/*     do {
        randomNumber = Math.floor(Math.random() * 90) + 1;

    } while (numeriEstratti.includes(randomNumber)); */


    numeriEstratti.push(randomNumber);
   
    const gridItems = document.querySelectorAll('.grid-item');
    const randomGridItem = gridItems[randomNumber - 1];
    randomGridItem.classList.add('highlight');
}


const estraiNumero = document.getElementById('estraiNumero');
estraiNumero.addEventListener('click', generateRandomNumberAndHighlight); 
 

