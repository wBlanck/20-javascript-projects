// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
 
const apiKey = "hidden";
const count = 10; 
const imagesContainer = document.querySelector(".images");
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let images = [];

// sets element attributes
const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

// DISPLAY PHOTOS
const displayPhotos = () => {
  images.forEach((img) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: img.links.html,
      target: "_blank",
    });
    const image = document.createElement("img");
    setAttributes(image, {
      src: img.urls.regular,
      alt: img.alt_description,
      title: img.alt_description,
    });

    imagesContainer.appendChild(item);
    item.appendChild(image);
  });
};

// FETCH PHOTOS FROM THE API
async function getImages() {
  try {
    const response = await fetch(apiUrl);
    images = await response.json();
    displayPhotos();
  } catch (err) {
    console.log(err);
  }
}
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    imagesContainer.offsetHeight - 1000
  ) {
    getImages();
  }
});

// ON LOAD
/* getImages();
 */
