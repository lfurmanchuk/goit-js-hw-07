// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створюємо посилання на елемент
const galleryList = document.querySelector(".gallery");

const imagesMarkup = makeGalleryCard(galleryItems);

// Додаємо розмітку в html
galleryList.insertAdjacentHTML("afterbegin", imagesMarkup);

// Назначаємо слухача на клік
galleryList.addEventListener("click", onGalleryClick);

// Створюємо елемент за допомогою шаблонного рядка
// та масив елементів
function makeGalleryCard (galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>`;
    })
    .join("");
}

function onGalleryClick(event) {
    // Запобігаємо перезавантаженню сторінки
    event.preventDefault();
    // Робимо перевірку делегування
    if (event.target.nodeName !== "IMG") {
    return;
  }
    // Підключаемо відкриття модального вікна за допомогою бібліотеки
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show();
    
    // Додаємо закриття модального вікна після натискання клавіші Escape
    galleryList.addEventListener("keydown", (event) => {
    if (event.code === 'Escape') {
        instance.close()
    }
});

}

// console.log(galleryItems);

// const galleryList = document.querySelector(".gallery");
// const imagesMarkup = makeGalleryCard(galleryItems);

// galleryList.insertAdjacentHTML("beforeend", imagesMarkup);
// galleryList.addEventListener('click', onGalleryClick)

// function makeGalleryCard(galleryItems) {
//     return galleryItems
//         .map(({ preview, original, description }) => {
//             return `
//         <div class="gallery__item">
//           <a class="gallery__link" href="${original}">
//             <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//             />
//           </a>
//         </div>`;
//         })
//         .join('');
// }

// function onGalleryClick(e) {
//   e.preventDefault();

//   if (e.target.classList.contains(".gallery")) return;
//     const source = e.target.dataset.source;
    
//   const instance = basicLightbox.create(`
//     <img src="${source}"width="800" height="600">`);

//     instance.show();
    

// };
