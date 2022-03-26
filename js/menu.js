// MENU
//Efecto boton
(function() {
    const hamburguesa = document.querySelector('.main-menu__btn__box');
    hamburguesa.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('main-menu__abierto');
    })
  }());

  // Abro y cierro menu
  $("#btnMenu").click(function(){
    $(".main-menu__container").after($("#showMenu").slideToggle("fast"))
  })