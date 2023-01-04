import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `

    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", markup);
// console.log(markup);

galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }
  const modalImage = evt.target.getAttribute(`data-source`);
  // console.log(`Зображення`, modalImage);

  const instance = basicLightbox.create(`
    <img src="${modalImage}" >
`);

  instance.show();

  window.addEventListener(`keydown`, onEscKeyPress);

  function onEscKeyPress(evt) {
    // console.log(evt);
    // console.log(evt.key);

    if (evt.key === "Escape") {
      instance.close();
      window.removeEventListener(`keydown`, onEscKeyPress);
    }
  }

  // console.log(`event.target:`, evt.target);
  // console.log(`event.currentTarget:`, evt.currentTarget)
}
