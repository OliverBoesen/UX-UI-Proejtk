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
        changeText.innerText = "To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. "
    } else if (indexNova == 1)
    {
        changeLink.setAttribute("href", "index4.html")
        imageCountNova2[1].style.opacity = "0.4";
    imageCountNova2[2].style.opacity = "1";
    imageCountNova2[3].style.opacity = "0.4";
        changeText.innerText = "John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no. "
    }
    else if (indexNova == 2)
    {
        changeLink.setAttribute("href", "link til 3")
        imageCountNova2[2].style.opacity = "0.4";
        imageCountNova2[3].style.opacity = "1";
        imageCountNova2[4].style.opacity = "0.4";
        changeText.innerText = "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection."
    }
    else if (indexNova == 3)
    {
        changeLink.setAttribute("href", "link til 4")
        imageCountNova2[3].style.opacity = "0.4";
        imageCountNova2[4].style.opacity = "1";
        imageCountNova2[5].style.opacity = "0.4";
        changeText.innerText = "Unwilling sportsmen he in questions september therefore described so. Attacks may set few believe moments was. Reasonably how possession shy way introduced age inquietude. Missed he engage no exeter of."
    }
} 




