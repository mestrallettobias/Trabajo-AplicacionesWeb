const productos = [
    {
        nombre: "Remera",
        descripcion: "Remera algodon basica",
        precio: 1500,
        imagen: "../../imgs/remra.jpg"
    },
    {
        nombre: "Buzo con capucha",
        descripcion: "Buzo algodon con capucha",
        precio: 3500,
        imagen: "../../imgs/buzo.jpg"
    },
    {
        nombre: "Campera",
        descripcion: "Campera de abrigo",
        precio: 5000,
        imagen: "../../imgs/campera.jpg"
    }
];


const cardHTML = productos.map(producto => {
    
    const cardGrid = 
    `                   
                        <div class="card">
                            <div class="card-imagen">
                                <img src="${producto.imagen}" alt="Imagen producto">           
                            </div>

                            <div class="card-info">
                                <h2>${producto.nombre}</h2>
                                <p class="descripcion">${producto.descripcion}</p>
                                <p class="precio">$${producto.precio}</p>
                                <button class="btn-comprar">Comprar</button>
                                <label> Cantidad: 
                                    <input type="number" min="1" value="1" class="cantidad">
                                </label>
                            </div>
                        </div>
    `;

    return cardGrid;
})




let cardContainer = document.querySelector('.grid-layout > div.caja.c4 > div.grid-cards');

window.addEventListener('load', () => {
    cardContainer.innerHTML = cardHTML.join('');
});

