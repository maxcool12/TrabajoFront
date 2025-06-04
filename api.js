document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("listado");

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((productos) => {
      productos.forEach((producto) => {
        const card = document.createElement("div");
        card.className = "col-md-3";
        card.innerHTML = `
          <div class="card h-100">
            <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${producto.title}</h5>
              <p class="card-text">$${producto.price}</p>
              <p class="card-text text-muted small">${producto.category}</p>
            </div>
          </div>
        `;
        contenedor.appendChild(card);
      });
    })
    .catch((error) => {
      contenedor.innerHTML = `<p class="text-danger">Error al cargar productos</p>`;
      console.error("Error al obtener los datos:", error);
    });
});
