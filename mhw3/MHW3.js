
function EvidenzaAvanti(){
    const imagine = document.querySelectorAll(".section3-flexitems-flashes-evidenza .image-size");
    const image_hidden = document.querySelectorAll(".image-size-nascosta");
    const testo = document.querySelectorAll(".news-flashes-evidenza");
    const testo_hidden = document.querySelectorAll(".news-flashes-evidenza-nascosta");

   imagine.forEach(image => 
   image.classList.add('hidden'));
   image_hidden.forEach(image=> image.classList.remove('hidden'));
   testo.forEach(heading=> heading.classList.add('hidden'));
   testo_hidden.forEach(heading=> heading.classList.remove('hidden'));
}



const button_avanti = document.querySelector("#button-avanti");
button_avanti.addEventListener("click",EvidenzaAvanti);


function EvidenzaIndietro(){
    //In questo caso le image-hidden non avranno l'hidden e viceversa
    const imagine = document.querySelectorAll(".section3-flexitems-flashes-evidenza .image-size");
    const image_hidden = document.querySelectorAll(".image-size-nascosta");
    const testo = document.querySelectorAll(".news-flashes-evidenza");
    const testo_hidden = document.querySelectorAll(".news-flashes-evidenza-nascosta");

    
   imagine.forEach(image=> image.classList.remove('hidden'));
   image_hidden.forEach(image=>image.classList.add('hidden'));
   testo.forEach(heading=> heading.classList.remove('hidden'));
   testo_hidden.forEach(heading=>heading.classList.add('hidden'));


}

const button_indietro = document.querySelector("#button-indietro");
button_indietro.addEventListener("click",EvidenzaIndietro);


