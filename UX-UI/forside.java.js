/* Nova image slider */
// Henter referencen til billedcontaineren med id 'img-container-nova'
var containerNova = document.getElementById('img-container-nova'); // Image container Nova

// Finder antallet af billeder i billedcontaineren
var imageCountNova = document.querySelectorAll('#img-container-nova img').length; // Amount of images

// Gemmer alle billederne i billedcontaineren
var imageCountNova2 = document.querySelectorAll('#img-container-nova img'); // Amount of images

// Henter referencen til næste knap
var nextNova = document.getElementById('next'); // Next button

// Henter referencen til forrige knap
var prevNova = document.getElementById('prev'); // Prev button

// Initialiserer array-indekset til 0
var indexNova = 0; // Array index

// Henter referencen til tekstkontrolleren
const changeText = document.getElementById("img-text");//text controller

// Henter referencen til linkkontrolleren
const changeLink = document.getElementById("img-link");//link controller

/* Check if next/prev image is within scope, if so, move index up or down */
// Når næste knap klikkes
nextNova.onclick = () => {
    // Hvis indexNova er mindre end antallet af billeder minus 3
    if(indexNova < imageCountNova - 3) {
        // Anvend en glideeffekt på 0.5 sekunder for at skifte billede
        containerNova.style.transition = 'transform 0.5s ease-in-out';
        sliderShiftNova(1); // Skift billedet med funktionen sliderShiftNova
    } else {
        // Ellers anvend en længere glideeffekt på 2.5 sekunder og skift 3 billeder
        containerNova.style.transition = 'transform 2.5s';
        sliderShiftNova(-3);
    }
}

// Når forrige knap klikkes
prevNova.onclick = () => {
    // Hvis indexNova er større end 0
    if (indexNova > 0) {
        // Skift til forrige billede
        sliderShiftNova(-1);
    }
}

/* Count index up or down > calculate amount to shift >shift image-container */
// Funktion til at skifte sliderens position
function sliderShiftNova(i){

    // Forøg eller reducer indexNova med i
    indexNova = indexNova + i; // Increase/decrease index

    // Beregn hvor meget der skal flyttes, baseret på bredden af billedcontaineren
    shift = containerNova.clientWidth * 1.02 / 3 * indexNova; // Calculate shift

    // Flyt billedcontaineren horisontalt i forhold til shift-værdien
    containerNova.style.transform = 'translatex('+ -shift + 'px)'; // Move image-container according to shift

    // Ændre link og gennemsigtighed for hvert billede baseret på indexNova
    if(indexNova == 0){
        // Hvis indexNova er 0, ændre link, gennemsigtighed og tekst
        changeLink.setAttribute("href", "underarbejde.html")
        imageCountNova2[0].style.opacity = "0.4";
        imageCountNova2[1].style.opacity = "1";
        imageCountNova2[2].style.opacity = "0.4";
        imageCountNova2[4].style.opacity = "0.4";
        changeText.innerText = "Udforsk hvem vi er og hvem der står bag Nippon.  "
    } else if (indexNova == 1) {
        // Hvis indexNova er 1, ændre link, gennemsigtighed og tekst
        changeLink.setAttribute("href", "kontakt.html")
        imageCountNova2[1].style.opacity = "0.4";
        imageCountNova2[2].style.opacity = "1";
        imageCountNova2[3].style.opacity = "0.4";
        changeText.innerText = "Kontakt Nippon og få svar på alt hvad du er i tvivl om. "
    } else if (indexNova == 2) {
        // Hvis indexNova er 2, ændre link, gennemsigtighed og tekst
        changeLink.setAttribute("href", "underarbejde.html")
        imageCountNova2[2].style.opacity = "0.4";
        imageCountNova2[3].style.opacity = "1";
        imageCountNova2[4].style.opacity = "0.4";
        changeText.innerText = "Få svar på de mest stillede spørgsmål, som vi får"
    } else if (indexNova == 3) {
        // Hvis indexNova er 3, ændre link, gennemsigtighed og tekst
        changeLink.setAttribute("href", "underarbejde.html")
        imageCountNova2[3].style.opacity = "0.4";
        imageCountNova2[4].style.opacity = "1";
        imageCountNova2[5].style.opacity = "0.4";
        changeText.innerText = "Kig alle vores lækre opskrifter igennem."
    }
}
