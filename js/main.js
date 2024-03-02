document.addEventListener('DOMContentLoaded', function() {
  
  const closeBtns = document.querySelectorAll('.info-block__close');
  const openBtns = document.querySelectorAll('.partner-card__link');
  const modal= document.querySelector('.main-modal');
  const overlay = document.querySelector('.overlay');
  const body1 = document.querySelector('body');

  function openMod(i) {
    let modal = document.getElementsByClassName('main-modal')[i];
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body1.style.overflowY = 'hidden';
  };

  function closeMod(i) {
    let modal = document.getElementsByClassName('main-modal')[i];
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    body1.style.overflowY = 'visible';
  };

  openBtns.forEach((el, i) => {
    el.addEventListener('click', function(){
      openMod(i);
    })
  });

  closeBtns.forEach((el, i) => {
    el.addEventListener('click', function(){
      closeMod(i);
    })
  })

  // overlay.addEventListener('click', (evt) => {
  //   if (evt.target == overlay) {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //     body1.style.overflowY = 'visible';
  //   }
  // });  


  $('.info-block__wrapper--1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }}, {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          dots: false,
        }}],
  });

  $('.info-block__wrapper--2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1400,
        // settings: "unslick"
         settings: {
          slidesToShow: 4,
          }
        },
        {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          dots: false,
          autoplay: true
        }}],
      // mobileFirst: true
  });

});




