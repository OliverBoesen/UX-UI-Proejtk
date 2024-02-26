// Find knappen, tekstelementerne og inputfelterne
var sendButton = document.querySelector('.send-button');
var confirmationText = document.querySelector('.confirmation-text');
var fillFieldsText = document.querySelector('.fill-fields-text');
var inputFields = document.querySelectorAll('.ko-form-group input, .ko-form-group textarea');

// Tilføj en eventlistener til knappen
sendButton.addEventListener('click', function(event) {
    // Forhindre standardformularhandling
    event.preventDefault();

    // Tjek om inputfelterne er tomme
    var allFieldsFilled = true;
    inputFields.forEach(function(input) {
        if (input.value.trim() === '') {
            allFieldsFilled = false;
            input.classList.add('invalid'); // Tilføj klasse til ufærdige felter
        } else {
            input.classList.remove('invalid'); // Fjern klasse fra udfyldte felter
        }
    });

    // Vis bekræftelsestekst hvis alle felter er udfyldt, ellers vis besked om at udfylde felter
    if (allFieldsFilled) {
        confirmationText.style.display = 'block';

        // Nulstil inputfelterne
        inputFields.forEach(function(input) {
            input.value = '';
        });

        // Skjul fejlbesked om udfyldning af felter
        fillFieldsText.style.display = 'none';

        // Skjul bekræftelsestekst efter 2 sekunder
        setTimeout(function() {
            confirmationText.style.display = 'none';
        }, 4000);
    } else {
        fillFieldsText.style.display = 'block';
    }
});