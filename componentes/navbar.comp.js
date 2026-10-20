import { pagsarray } from "../paginas/categorias/navBar.controller.js";

const navbar = document.querySelector("#navbar");

navbar.innerHTML = `
    <nav class="navbar">
        <ul class="navbar-list">
            ${pagsarray.map(enlace => `
                <li>
                    <a href="${enlace.url}">
                        ${enlace.title}
                    </a>
                </li>
            `).join("")}
        </ul>
    </nav>
`;

console.log(navbar)