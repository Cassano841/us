const minIndex = 3; // Número mínimo (IMG_3.JPG)
const maxIndex = 26; // Último número de imagem disponível

function changeImage() {
  const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
  const selectedImage = `photos/IMG_${randomIndex}.JPG`;

  document.querySelector("#random-image").innerHTML = `
    <img src="${selectedImage}" alt="Imagem Aleatória">
  `;
}

// Muda a imagem a cada 5 segundos (5000 milissegundos)
setInterval(changeImage, 5000);

// Carrega uma imagem imediatamente ao abrir a página
changeImage();
