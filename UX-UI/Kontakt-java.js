var sendButton = document.querySelector('.send-button');
// Finder knappen med klassen 'send-button'

var confirmationText = document.querySelector('.confirmation-text');
// Finder elementet med klassen 'confirmation-text', dette vises når formularen er sendt

var fillFieldsText = document.querySelector('.fill-fields-text');
// Finder elementet med klassen 'fill-fields-text', dette vises hvis ikke alle felter er udfyldt

var inputFields = document.querySelectorAll('.ko-form-group input, .ko-form-group textarea');
// Finder alle inputfelter og tekstfelter inden for elementer med klassen 'ko-form-group'

sendButton.addEventListener('click', function(event) {
    // Lytter efter klik på send-knappen

    event.preventDefault();
    // Forhindrer standard handling af klik (f.eks. hvis det er en formular, forhindrer den indsendelse)

    var allFieldsFilled = true;
    // En variabel til at holde styr på om alle felter er udfyldt, som starter som sand

    inputFields.forEach(function(input) {
        // Går igennem hvert inputfelt

        if (input.value.trim() === '') {
            // Hvis værdien af feltet (efter at have fjernet eventuelle ekstra mellemrum) er tom

            allFieldsFilled = false;
            // Sætter allFieldsFilled til falsk, fordi et felt ikke er udfyldt

            input.classList.add('invalid');
            // Tilføjer klassen 'invalid' til feltet for at vise, at det ikke er udfyldt korrekt
        } else {
            input.classList.remove('invalid');
            // Fjerner klassen 'invalid' fra feltet, hvis det er udfyldt
        }
    });

    if (allFieldsFilled) {
        // Hvis alle felter er udfyldt

        confirmationText.style.display = 'block';
        // Viser bekræftelsesteksten

        inputFields.forEach(function(input) {
            input.value = '';
            // Nulstiller værdien af hvert inputfelt
        });

        fillFieldsText.style.display = 'none';
        // Skjuler teksten der beder om udfyldning af felter

        setTimeout(function() {
            confirmationText.style.display = 'none';
            // Efter 4000ms (4 sekunder), skjuler bekræftelsesteksten
        }, 4000);
    } else {
        fillFieldsText.style.display = 'block';
        // Hvis ikke alle felter er udfyldt, viser teksten der beder om udfyldning af felter
    }
});
