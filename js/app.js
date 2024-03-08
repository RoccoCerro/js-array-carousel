// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array 
// fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente
//  attraverso JavaScript.

// PSEUDOCODICE
// Creo l'arrey con i nomi delle img
// Creo un ciclo per prendere uno alla volta i nomi nell'arrey e inserire del codice html per ognuno di essi

const arrayImg = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];

const containerItemsDomElement = document.querySelector(".items-container");
let divHtmlImg = ``;

for (let i = 0; i < arrayImg.length; i++) {
    let img = arrayImg[i];
    divHtmlImg = `
        <div class="item ">
            <img src="${img}"></img>
        </div>
    `;
    containerItemsDomElement.innerHTML += divHtmlImg;
}

let itemElement = document.getElementsByClassName("item");
console.log(itemElement);

itemElement[0].classList.add("active");