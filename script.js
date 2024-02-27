
// Menu Hamburger
const btn = document.querySelector("#toggle-btn");
const ul = document.querySelector("#ulref");

btn.onclick=()=>{
    ul.style.opacity==0?ul.style.opacity=1 : ul.style.opacity=0;
    // dès qu'il s'agit d'une propriété css on utilise "style"
}

// Menu caroussel
const images = document.querySelector(".images");
const flecheGauche = document.querySelector("#gauche");
const flecheDroite = document.querySelector("#droite");
let translate = 0;

flecheGauche.onclick=()=>{
    translate+=100;
    // ici 100 signifie 100% de l'image
    if(translate>0){
        translate=-200
    };
    images.style.transform="translateX(" + translate + "%)";
}

flecheDroite.onclick=()=>{
    translate-=100;
    // ici 100 signifie 100% de l'image
    if(translate<-200){
        translate=0
    };
    images.style.transform="translateX(" + translate + "%)";
}