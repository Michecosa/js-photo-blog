fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
