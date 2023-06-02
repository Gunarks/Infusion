// Obejct of configuration

function Menu(config) {

        this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
        this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn;
        this.maxWidth = config.widthEnabled || false;

        let _opened = false;
        let _this = this;

        // Remove atribute sytle
        this.btn.removeAttribute('style');
        // closeMenu();

        // Verify width
        if(this.maxWidth){
            window.addEventListener('resize',e => {

                    if(window.innerWidth > _this.maxWidth){
                        _this.nav.removeAttribute('style');
                        _opened = true;
                    } else if(!_this.nav.getAttribute('style')){
                        closeMenu();
                    }
                }
            )

            if(window.innerWidth <= _this.maxWidth){
                closeMenu();
        }

        // Event click close or open
        this.btn.addEventListener('click', openOrClose);

        // Function open or close
        function openOrClose() {
            if(!_opened){

                openMenu();

            }else{

                closeMenu();
            }
        }
            
        // Function for open menu
        function openMenu() {
                let _top = _this.nav.getBoundingClientRect().top + 'px';
                let _style = {
                    maxHeight: 'calc(100vh - '+ _top + ' )',
                    overflow: 'hidden'
                }

                // function for running the style object
                applyStyleToNav(_style);

                 _opened = true;  
            
            }

        // Function applyStyleToNav
        function applyStyleToNav(_style) {
            Object.keys(_style).forEach(stl => {
                _this.nav.style[stl] = _style[stl];
            });
        }

        // Function for close the menu 
        function closeMenu() {
              let _style = {
                    maxHeight: '0px',
                    overflow: 'hidden',
                }

            // function for running the style object
            applyStyleToNav(_style);

            _opened = false;
        }
    }
}


    