
// Select elements of body

(function () {
    // remove no-js e add js
    let $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    // Control of the opening and the closing  of menu

    let menu = new Menu({
        container: '.main-header__nav',
        toggleBtn: '.main-header__data-menu',
        widthEnabled: 1025
    });

    // Control of carousel

    let carousel = new Carousel({
        container: '.slideshow',
        items: 'figure',
        previousBtn: '.prev',
        nextBtn: '.next',
    });

        let carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        items: 'figure',
        previousBtn: '.prev',
        nextBtn: '.next',
    });

})();