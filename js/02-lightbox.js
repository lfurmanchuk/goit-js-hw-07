// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const imagesMarkup = makeGalleryCard(galleryItems);

// Додаємо розмітку в html
galleryList.insertAdjacentHTML("afterbegin", imagesMarkup);

// Створюємо елемент за допомогою шаблонного рядка
// та масив елементів
function makeGalleryCard (galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" 
      href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
      </a>
      </li>`;
    })
    .join("");
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});