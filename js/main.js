document.addEventListener('DOMContentLoaded', function() {
  
  const closeBtn = document.querySelector('.info-block__close');
  const openBtn = document.querySelector('.partner-card__link');
  const modal= document.querySelector('.main-modal');
  const overlay = document.querySelector('.overlay');
  const body1 = document.querySelector('body');

  const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body1.style.overflowY = 'hidden';
  }

  const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    body1.style.overflowY = 'visible';
  }

  openBtn.addEventListener('click', () => {
    // modal.classList.remove('hidden');
    // overlay.classList.remove('hidden');
    // body1.style.overflowY = 'hidden';
    openModal();
  });

  closeBtn.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
    // body1.style.overflowY = 'visible';
    closeModal();
  });

  overlay.addEventListener('click', (evt) => {
    if (evt.target == overlay) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
      body1.style.overflowY = 'visible';
    }
  });  



});

$('.info-block__wrapper--1').slick({
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
        dots: false,
      }}, {
      breakpoint: 300,
      settings: {
        settings: "unslick" // destroys slick
      }
      
    }]

});



