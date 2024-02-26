/* Nova image slider */
var containerNova = document.getElementById('img-container-nova'); // Image container Nova
var imageCountNova = document.querySelectorAll('#img-container-nova img').length; // Amount of images
var imageCountNova2 = document.querySelectorAll('#img-container-nova img'); // Amount of images
var nextNova = document.getElementById('next'); // Next button
var prevNova = document.getElementById ('prev'); // Prev button
var indexNova = 0; // Array index

const changeText = document.getElementById("img-text");//text controller
const changeLink = document.getElementById("img-link");//link controller

/* Check if next/prev image is within scope, if so, move index up or down */
nextNova.onclick = () => { if(indexNova < imageCountNova - 3){containerNova.style.transition = 'transform 0.5s ease-in-out', sliderShiftNova(1)} else {containerNova.style.transition = 'transform 2.5s', sliderShiftNova(-3)}} // Next onclick
prevNova.onclick = () => { if (indexNova > 0) sliderShiftNova(-1) }                 // Prev onclick

/* Count index up or down > calculate amount to shift >shift image-container */
function sliderShiftNova(i){

    indexNova = indexNova + i; // Increase/decrease index
    shift = containerNova.clientWidth * 1.02 / 3 * indexNova; // Calculate shift
    containerNova.style.transform = 'translatex('+ -shift + 'px)'; // Move image-container according to shift
    if(indexNova == 0){
        changeLink.setAttribute("href", "index2.html")
        imageCountNova2[0].style.opacity = "0.4";
        imageCountNova2[1].style.opacity = "1";
        imageCountNova2[2].style.opacity = "0.4";
        imageCountNova2[4].style.opacity = "0.4";
        changeText.innerText = "Udforsk hvem vi er og hvem der står bag Nippon.  "
    } else if (indexNova == 1)
    {
        changeLink.setAttribute("href", "index4.html")
        imageCountNova2[1].style.opacity = "0.4";
    imageCountNova2[2].style.opacity = "1";
    imageCountNova2[3].style.opacity = "0.4";
        changeText.innerText = "Kontakt Nippon og få svar på alt hvad du er i tivle om. "
    }
    else if (indexNova == 2)
    {
        changeLink.setAttribute("href", "link til 3")
        imageCountNova2[2].style.opacity = "0.4";
        imageCountNova2[3].style.opacity = "1";
        imageCountNova2[4].style.opacity = "0.4";
        changeText.innerText = "Få svar på de mest stillede spørgsmål, som vi får"
    }
    else if (indexNova == 3)
    {
        changeLink.setAttribute("href", "link til 4")
        imageCountNova2[3].style.opacity = "0.4";
        imageCountNova2[4].style.opacity = "1";
        imageCountNova2[5].style.opacity = "0.4";
        changeText.innerText = "Kig alle vores lækre opskrifter igennem."
    }
} 




