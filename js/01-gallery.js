import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

const createMarkup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
</a>
</li>`;
})
.join('');

container.insertAdjacentHTML("beforeend", createMarkup);
container.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const isGalleryImage = event.target.closest(".gallery__image");
  if (!isGalleryImage) {
    return;
  }
  const ImgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
  `<div class="gallery__item">
<img
class="gallery__image"
src="${ImgUrl}"
width="1280" 
height="auto"
/>
</div>`,
{onShow: (instance) => {
window.addEventListener('keydown', pressOnEsc);
},
onClose: (instance) => {
  window.removeEventListener('keydown', pressOnEsc);
},}
);
instance.show();
function pressOnEsc(event) {
  if (event.code !== 'Escape') return;
  instance.close();
}
};

