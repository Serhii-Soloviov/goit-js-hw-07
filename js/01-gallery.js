import { galleryItems } from "./gallery-items.js";
const galleryRefs = document.querySelector(".gallery");
// let instance = null;
const markUp = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
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
galleryRefs.insertAdjacentHTML("beforeend", markUp);
console.log(galleryRefs);
galleryRefs.addEventListener("click", onImageClick);
function onImageClick(e) {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800 height="600>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeOriginalImg);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", closeOriginalImg);
      },
    }
  );
  instance.show();
  function closeOriginalImg(event) {
    if (event.key === "Escape") {
      instance.close();
    }
    console.log(event);
  }
}
