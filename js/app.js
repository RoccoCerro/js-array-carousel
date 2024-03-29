// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array 
// fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente
//  attraverso JavaScript.

// PSEUDOCODICE MILESTONE2
// Creo l'arrey con i nomi delle img
// Creo un ciclo per prendere uno alla volta i nomi nell'arrey e inserire del codice html per ognuno di essi

// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare 
// all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. 
// Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

// PSEUDOCODICE BONUS2
// - Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto.
//  - Creerò un container nell'html in cui andro ad inserire tutte le miniature in maniera dinamica
//    - Con position lo posiziono come nella foto
// - Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
//  - Come con l'esercizio precendete andro ad aggiungere e togliere le classi per far schiarire l'img


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

    if (currentIndex === arrayImg.length - 1){
        itemElement[currentIndex].classList.remove("active")
        currentIndex = 0        
        itemElement[currentIndex].classList.add("active")
    }
    else{    
        itemElement[currentIndex].classList.remove("active")
        currentIndex++
        itemElement[currentIndex].classList.add("active")
    }
})

backDomElement.addEventListener("click", function(){

    if (currentIndex === 0){
        itemElement[currentIndex].classList.remove("active")
        currentIndex = 4        
        itemElement[currentIndex].classList.add("active")
    }
    else{
    itemElement[currentIndex].classList.remove("active")
    currentIndex--
    itemElement[currentIndex].classList.add("active")
    }
})

