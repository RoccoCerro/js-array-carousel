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
let divHtmlThumbnails = "";

let currentIndex = 0;
let itemElement = document.getElementsByClassName("item");
let containerItemsThumbnailsElement = document.querySelector(".items-thumbnails");

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
    divHtmlThumbnails = `
        <div class="col">
            <img src="${img}"></img>
        </div>
    `

    containerItemsDomElement.innerHTML += divHtmlImg;
    containerItemsThumbnailsElement.innerHTML += divHtmlThumbnails;
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

