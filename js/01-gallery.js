import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);

const markup = galleryItems.map(({preview, original, description})=>`
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
         alt="${description}">
    </a>
        </li>
        `).join("")

 
gallery.insertAdjacentHTML('beforeend', markup);

function galleryItemClick(event) {
  event.preventDefault()
  if (event.target === event.currentTarget) {
    return
  }
  const targetAlt = event.target.alt;
  event.target.src = event.target.dataset.source
  const instance = basicLightbox.create(`
    <img src="${event.target.src}" width="800" height="600" alt = "${targetAlt}">
    
` ,{onShow: () => {
  document.addEventListener("keydown", helEscape)
},
    onClose: () => {
    document.removeEventListener("keydown", helEscape)
  }})

  instance.show()
  function helEscape(event) {
    if (event.key === "Escape" && instance) {
      instance.close()
    }
  }
}
gallery.addEventListener("click", galleryItemClick);



