AOS.init();

//hamburger active
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;


    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

function handleImageError() {
    const image = document.getElementById('profile-image');
    const notFoundText = document.getElementById('not-found-text');
    // Hide the image and show the "Not Found" text
    image.style.display = 'none';
    notFoundText.classList.remove('hidden');
}

function checkImageSrc() {
    const image = document.getElementById('profile-image');
    const notFoundText = document.getElementById('not-found-text');
    
    // Check if the image's src is empty or not
    if (!image.src || image.src.trim() === "" || image.naturalWidth === 0) {
        image.style.display = 'none';
        notFoundText.classList.remove('hidden');
    } else {
        notFoundText.classList.add('hidden');
    }
}

// Set image source for testing
document.getElementById('profile-image').src = '';