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
const nextDomElement = document.querySelector('.next');
const backDomElement = document.querySelector('.back');
let divHtmlImg = ``;

let currentIndex = 0;
let itemElement = document.getElementsByClassName("item");

for (let i = 0; i < arrayImg.length; i++) {
    let img = arrayImg[i];
    let classes = '';
    if (i === currentIndex) {
        classes = 'active';
    }
    divHtmlImg = `
        <div class="item ${classes}">
            <img src="${img}"></img>
        </div>
    `;
    containerItemsDomElement.innerHTML += divHtmlImg;
}

nextDomElement.addEventListener("click", function(){
    
    itemElement[currentIndex].classList.remove("active")
    currentIndex++
    itemElement[currentIndex].classList.add("active")
})

backDomElement.addEventListener("click", function(){
    
    itemElement[currentIndex].classList.remove("active")
    currentIndex--
    itemElement[currentIndex].classList.add("active")
})

