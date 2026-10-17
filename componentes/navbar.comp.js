const navBar = 
`
<nav>
    <ul>
        <li><a href="../../paginas/categorias/indumentaria.html">Indumentaria</a></li>
        <li><a href="../../paginas/categorias/calzado.html">Calzado</a></li>
        <li><a href="../../paginas/categorias/accesorios.html">Accesorios</a></li>
        <li><a href="../../paginas/categorias/ropainterior.html">Ropa Interior</a></li>
    </ul>
</nav>
`

let navBarContainer = document.querySelector('.grid-layout > div.caja.c2');



window.addEventListener('load', () => {
    navBarContainer.innerHTML = navBar;
});