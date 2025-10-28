const polaroid_container = document.getElementById('polaroid-container')
const polaroid_array = []

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

            elem.addEventListener('click', () => {
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

              const img = overlay.querySelector('img');
              img.src = polaroid.url;
              overlay.classList('active')
            })
          });
      }
    })

    
  
  })
  .catch((error) => console.error(error));