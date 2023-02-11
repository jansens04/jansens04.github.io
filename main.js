//  Gallery
const gallery = document.querySelector('.gallery');
const thumbs = document.querySelectorAll('.thumbs');

gallery.addEventListener('click', function (event) {
  thumbs.forEach(function (thumbs) {
    thumbs.classList = 'thumbs';
  });
  event.target.classList.add('active');
});

const container = document.querySelector('.container');
const card = document.querySelector('.card');
const close = document.querySelectorAll('.close');

container.addEventListener('click', (e) => {
  if (e.target.className == 'close') {
    e.target.parentElement.remove();
    e.preventDefault();
    e.stopPropagation();
  }
});
