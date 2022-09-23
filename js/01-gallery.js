import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGal(array) {
  return array.reduce((acc, item) =>
    acc + `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" rel="noreferrer">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`, "");
}
// function createGal(array) {
//   return array.map((item) => `<div class="gallery__item">
//   <a class="gallery__link" href="${item.original}" rel="noreferrer">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </div>`).join("");
// }

 
const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML('beforeend', createGal(galleryItems));




// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="${galleryItems.original}" width="800" height="600">
// `)

// instance.show()


// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()