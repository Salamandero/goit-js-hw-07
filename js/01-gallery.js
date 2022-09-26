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


if ('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает lazyload');
    const lazyImage = document.querySelectorAll('.gallery__image');
    
    lazyImage.forEach(img => {
    img.loading = 'lazy';
    })   
}
else {
  const script = document.createElement('script');
  script.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin="anonymous";
  script.referrerPolicy="no-referrer"

    document.body.appendChild(script);

    const lazyImage = document.querySelectorAll('.gallery__image');
    lazyImage.forEach(img => {
       img.classList.add('lazyload');
       img.dataset.src = img.src;
       }) 
}

galleryContainer.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
    event.preventDefault();
  
    if (!event.target.classList.contains('gallery__image')) {
    return
    }
    else {
    const descriptionValue = event.target.dataset.source;

    const modal = basicLightbox.create(
    `<img src="${descriptionValue}">`,
    {onShow: () => {window.addEventListener('keydown', handleEscPress)},
    onClose: () => {window.removeEventListener('keydown', handleEscPress)}
})
    modal.show();

    function handleEscPress (event) {
    if (event.code === "Escape") {
        modal.close()}
}
}
}