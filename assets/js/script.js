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
          });
      }
    })

    
  
  })
  .catch((error) => console.error(error));
