import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryСontainer = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(item => {
  return `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
        </a>
      </div>`;
    })
    .join('');

galleryСontainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
galleryСontainer.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
    // Запобігаємо перезавантаженню сторінки
    e.preventDefault();
    // Робимо перевірку делегування
    if (e.target.nodeName !== 'IMG') {
    return;
  }
    // Підключаемо відкриття модального вікна за допомогою бібліотеки
  const instance = basicLightbox.create(`
    <img src='${e.target.dataset.source}'/>`,
    {
      onShow: () => {
        document.addEventListener('keydown', onEscape)
      },
      onClose: () => {
         document.removeEventListener('keydown', onEscape)
      }
    }
  );

  instance.show();
  
  function onEscape(e) {
      if (e.key === 'Escape') instance.close();
    }
}