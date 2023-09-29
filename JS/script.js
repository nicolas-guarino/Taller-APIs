// URL de la API para obtener una imagen aleatoria de un perro
const URL_BASE = 'https://dog.ceo/api/breeds/image/random';

// Referencias a los elementos HTML
const btnRandomImage = document.getElementById('imagen-random');
const imageContainer = document.getElementById('imageContainer');
const image = document.getElementById('image');

// Función para cargar una imagen aleatoria al hacer clic en el botón
btnRandomImage.addEventListener('click', () => {
    // Hacer una solicitud a la API para obtener una imagen aleatoria
    fetch(URL_BASE)
        .then(response => response.json())
        .then(data => {
            // Actualizar el src de la imagen con la URL obtenida de la API
            image.src = data.message;
            // agregarle la clase img a la imagen para darle estilo
            image.classList.add('img')
        })
        .catch(error => {
            console.error('Hubo un error al obtener la imagen del perro:', error);
        });
});