
// Select elements of body

(function () {
    // remove no-js e add js
    let $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    // 

    let menu = new Menu({
        container: '.main-header__nav',
        toogleBtn: '.main-header__data-menu',
        widthEnabled: 1024
    });

})();