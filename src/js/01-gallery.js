import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

const getMarkup = galleryItems
  .map(
    img => `
  <li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
      class="gallery__image"
      src="${img.preview}" 
      alt="${img.description}" />
    </a>
  </li>
  `
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', getMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});
