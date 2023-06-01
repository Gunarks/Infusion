// Obejct of configuration

class Menu {
    func(config) {

        this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
        this.btn = (typeof config.toogleBtn === 'string') ? document.querySelector(config.tooggleBtn) : config.tooggleBtn;
        this.maxWidth = config.widthEnabled || false;

        let _opened = false;
        let _this = this;

        this.btn.removeAttribute('style');

        this.btn.addEventListener('click', openOrClose);

        // Function open or close
        function openOrClose() {
            if (!_opened) {
                openMenu();
            } else {
                closeMenu();
            }
        }

        function openMenu() {
            let _top = _this.nav.getBoundingClientRect().top + 'px';

            let _style = {
                maxHeight: 'calc( 100vh' + _top + ' )',
                overflow: 'hidden'
            };

            applyStyleToNav(_style);
            _opened = true;
        }

        function applyStyleToNav(_style) {
            Object.keys(_style).forEach(stl => {
                _this.nav.style[stl] = _style[stl];
            }

            );
        }

        function closeMenu() {
            _opened = false;
        }
    }
}