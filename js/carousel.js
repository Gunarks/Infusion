
function Carousel(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;

    this.items = (typeof config.items === 'string') ? this.container.querySelectorAll(config.items) : config.items;

    this.previousBtn = (typeof config.previousBtn === 'string') ? this.container.querySelector(config.previousBtn) : config.previousBtn;

    this.nextBtn = (typeof config.nextBtn === 'string') ? this.container.querySelector(config.nextBtn) : config.nextBtn;


    let _this = this;
    let _currentSlide = 0;

    init();

    // Function init 
    function init() {
        let _show = _this.container.querySelectorAll('.show');

        Array.prototype.forEach.call(_show, function(sh) {
           sh.classList.remove('show');	
        })
        _this.items[0].classList.add('show');
        _this.nextBtn.removeAttribute('style');
        _this.previousBtn.removeAttribute('style');

        addListenners();
    };

    // Function for listenners

    function addListenners() {
            _this.nextBtn.addEventListener('click', showNextSlide);
            _this.previousBtn.addEventListener('click', showPreviousSlide);
        };

    // Function for show next slide
    function showNextSlide() {
        _currentSlide ++;
        showSlide();
    };

    // Function for show previous slide

    function showPreviousSlide() {
        _currentSlide --;
        showSlide();
    };

    // Funciton showSlide

    function showSlide() {
        let qtd = _this.items.length;

        let slide = _currentSlide % qtd;

        slide = Math.abs(slide);

        _this.container.querySelector('.show').classList.remove('show');
        _this.items[slide].classList.add('show');
    }
}