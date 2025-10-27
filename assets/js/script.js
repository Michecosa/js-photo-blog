const polaroid_container = document.getElementById('polaroid-container')
const polaroid_array = []

fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => response.json())
  .then((result) => {
    
    result.forEach(polaroid => {
      polaroid_array.push(polaroid);
    })

    console.log(polaroid_array)
  
  })
  .catch((error) => console.error(error));
