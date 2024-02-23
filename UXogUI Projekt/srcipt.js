/* ---------- Burger menu ---------- */
var navBtn = document.getElementById('nav-button'); // Burger button
var navBar = document.getElementById('nav-bar');    // Navigation links

/* Toggle active class when clicking burger menu button */
navBtn.onclick = () => {
    navBar.classList.toggle('nav-active'); // Toggle active nagivation
    navBtn.classList.toggle('btn-active'); // Toggle active button
}





/* ---------- Rotating stickers ---------- */
var stickers = document.querySelectorAll('.sticker'); // Array of stickers

/* Rotate every sticker between 0.00 and 360.00 degrees */
stickers.forEach(sticker => {
    let x = (Math.random() * 360).toFixed(2); // Random number
    sticker.style.transform = "translate(-50%, -50%) rotate(" + x + "deg)"; // Add rotation
});





/* ---------- Logo resizing ---------- */
var logo = document.querySelector('.logo');

/* Change logo height if scrolled > 64px & using screenwidth > 768px */
window.onscroll = () => {
    if (screen.width >= 768) {          // Check screen width
        if (window.scrollY > 64) {      // Check scroll amount
            logo.style.width = "4em";   // Make logo small
        } else {
            logo.style.width = "8em";   // Make logo large
        }
    }
}

/* Resize logo when resizing window to avoid large logo on mobile */
window.onresize = () => {
    if (screen.width >= 768) {          // Check screen width
        logo.style.width = "4em";       // Make logo computer sized
    } else {
        logo.style.width = "3em";       // Make logo phone sized
    }
}