const headerBurger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');
const body = document.querySelector('body');

const burgerClickHandler = () => {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    body.classList.toggle('lock');
};

headerBurger.addEventListener("click", burgerClickHandler);


document.querySelector('#video_1').addEventListener('mouseenter', function() {
    document.querySelector('#h2_1').classList.add('hovered');
  });
  
  document.querySelector('#video_1').addEventListener('mouseleave', function() {
    document.querySelector('#h2_1').classList.remove('hovered');
  });

  document.querySelector('#video_2').addEventListener('mouseenter', function() {
    document.querySelector('#h2_2').classList.add('hovered');
  });
  
  document.querySelector('#video_2').addEventListener('mouseleave', function() {
    document.querySelector('#h2_2').classList.remove('hovered');
  });
  document.querySelector('#video_3').addEventListener('mouseenter', function() {
    document.querySelector('#h2_3').classList.add('hovered');
  });
  
  document.querySelector('#video_3').addEventListener('mouseleave', function() {
    document.querySelector('#h2_3').classList.remove('hovered');
  });
  document.querySelector('#video_4').addEventListener('mouseenter', function() {
    document.querySelector('#h2_4').classList.add('hovered');
  });
  
  document.querySelector('#video_4').addEventListener('mouseleave', function() {
    document.querySelector('#h2_4').classList.remove('hovered');
  });