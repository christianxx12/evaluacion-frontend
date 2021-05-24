const video = document.querySelector('#imagen');
const close = document.querySelector('.close');
const trailer = document.querySelector('.trailer');

video.addEventListener('click', Modal);
close.addEventListener('click', Modal);

function Modal() {
  trailer.classList.toggle('active');
}
