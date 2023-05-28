import SimpleLightbox from 'simplelightbox';
import '../css/common.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const getMarkup = galleryItems
  .map(
    img => `
  <li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
    </a>
  </li>
  `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', getMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});
