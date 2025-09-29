const textos = {
    home: "Bienvenido a la página principal. Aquí encontrarás las últimas noticias.",
    about: "Somos una empresa dedicada a brindar soluciones en tecnología.",
    contact: "Puedes contactarnos en contacto@ejemplo.com o por WhatsApp."
};

const items = document.querySelectorAll("ul li");

for (let item of items) {
    item.addEventListener("click", () => {
        const clave = item.id;
        document.getElementById("contenido-texto").textContent = textos[clave];
    });
}