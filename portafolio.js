// Gallery
const trabajos = [
    
    {
    titulo: "Zummm",
    categoria: "Diseño Industrial",
    imagen: "zummm.gpg",
    alt: "Proyecto 1",
    },

    {
    titulo: "Agua Noble",
    categoria: "Diseño de Producto",
    imagen: "ricky.jpeg",
    alt: "Proyecto 2",
    },

    {
    titulo: "Cavernas Urbanas",
    categoria: "Diseño Industrial",
    imagen: "cavernas.png",
    alt: "Proyecto 3",
    },

    {
    titulo: "Las Fenix",
    categoria: "Diseño Logotipo",
    imagen: "boltris.png",
    alt: "Proyecto 4",
    },

    {
    titulo: "Logotipo Mimesis",
    categoria: "Diseño de Logo",
    imagen: "logo.jpg",
    alt: "Proyecto 5",
    },

    {
    titulo: "Mimesis",
    categoria: "Diseño de Producto",
    imagen: "mimesis.jpg",
    alt: "Proyecto 6",
    }

]


const galleryGrid = document.querySelector(".gallery-grid");

trabajos.forEach((trabajo) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    
    item.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.alt}">
        <div class="gallery-overlay">
            <h3>${trabajo.titulo}</h3>
            <p>${trabajo.categoria}</p>
        </div>
    `;
    
    galleryGrid.appendChild(item);
});