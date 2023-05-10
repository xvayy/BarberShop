var NavAbout = document.getElementById('AboutNavLink');
var PriceAbout = document.getElementById('PriceNavLink');
var ContactAbout = document.getElementById('TestimonialsNavLink');


//If we are not on the homepage we cannot get anchor links to run, so we need to change the link to the homepage
if (window.location.pathname == '/index.html' | window.location.pathname == '/') {
    NavAbout.removeAttribute('href');
    NavAbout.setAttribute('href', '#about');
    NavAbout.innerHTML = 'About Us';
    console.log(NavAbout.getAttribute('href'));
} else{
    NavAbout.setAttribute('href', 'index.html');
    NavAbout.innerHTML = 'Home';
}

PriceAbout.onclick = updatePriceLink;
ContactAbout.onclick = updateContactLink;

/**
 * This function will update the anchor link for the price page
 */
function updatePriceLink() {
    //If on the homepage
    if (window.location.pathname == '/index.html' | window.location.pathname == '/') {
        PriceAbout.setAttribute('href', '#price');
    } else{
        window.location.href = 'index.html#price';
        PriceAbout.setAttribute('href', '#price');
    }
}

function updateContactLink() {
    //If on the homepage
    if (window.location.pathname == '/index.html' | window.location.pathname == '/') {
        ContactAbout.setAttribute('href', '#testimonials');
    } else{
        window.location.href = 'index.html#testimonials';
        ContactAbout.setAttribute('href', '#testimonials');
    }
}

// Path: js/scroll.js