const polaroid_container = document.getElementById('polaroid-container')
const polaroid_array = []

const overlay = document.createElement('div');
overlay.id = 'image-popover';
overlay.innerHTML = `
  <div class="popover-content">
    <button class="close-btn">Chiudi</button>
    <img src="" alt="preview">
  </div>
  `;
const overlay_container = document.getElementById('overlay-container');
overlay_container.appendChild(overlay);

const overlayImg = overlay.querySelector('img');
const closeBtn = overlay.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => response.json())
  .then((result) => {
    
    result.forEach(polaroid => {
      polaroid_array.push(polaroid);

      if(polaroid_array.length === 6) {
          polaroid_container.innerHTML = "";
          polaroid_array.forEach((polaroid) => {
            const elem = document.createElement("div");
            elem.className = "polaroid";
            elem.innerHTML = `
              <div class="pin">
                <img src="./assets/img/pin.svg" alt="pin">
              </div>
              <div class="img-container">
                <img src="${polaroid.url}" class="" alt="">
              </div>
              <div class="polaroid-body">
                <p class="polaroid-date">${polaroid.date}</p>
                <p class="polaroid-description">
                  ${polaroid.title}
                </p>
              </div>
            `;
            polaroid_container.appendChild(elem);

            // Overlay 
            elem.addEventListener('click', () => {
              overlayImg.src = polaroid.url;
              overlay.classList.add('active')
            })

            /*
            // addEventListener (con this)
            elem.addEventListener('click', function() {
              const img = this.querySelector('.img-container img');
              overlayImg.src = img.src;
              overlay.classList.add('active')
            }) 
            */
          }
        );
      }
    })

    
  
  })
  .catch((error) => console.error(error));