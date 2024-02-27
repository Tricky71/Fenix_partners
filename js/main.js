document.addEventListener('DOMContentLoaded', function() {
  
  const closeBtn = document.querySelector('.info-block__close');
  const openBtn = document.querySelector('.partner-card__link');
  const modal= document.querySelector('.main-modal');
  const overlay = document.querySelector('.overlay');
  const body1 = document.querySelector('body');

  openBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    body1.style.overflowY = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    body1.style.overflowY = 'visible';
  });

  overlay.addEventListener('click', (evt) => {
    if (evt.target == overlay) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
      body1.style.overflowY = 'visible';
    }
  });  



});

$('.slick-wrapper').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
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
      }}, {
      breakpoint: 300,
      settings: {
        settings: "unslick" // destroys slick
      }
      
    }]

});



