# Copilot instructions for D'Yaboo storefront

## Project overview

This repository is a small static storefront for a clothing brand called D'Yaboo. The app is not a framework project; it is a collection of HTML pages, CSS files, and a few JavaScript helpers that wire up the UI and login flow.

The main entry points are:
- `Index.html` for the storefront home page
- `paginas/auntentificacion/login.html` for the login screen
- category pages under `paginas/categorias/`
- cart-related assets under `paginas/carrito/`

The styling is split into multiple CSS files under `estilos/` instead of a single stylesheet, and image assets live under `imgs/`.

## Build, test, and lint commands

There is no package manager setup, build pipeline, lint configuration, or automated test suite in this repository.

Use these commands for local preview when validating changes:

```bash
cd "c:\Users\tobia\Desktop\AW1"
python -m http.server 8000
```

Then open:
- `http://localhost:8000/Index.html`
- or the specific HTML page you are editing

There is no single-test command because there are no automated tests to run. Browser-based/manual verification is the expected validation path for this project.

## Architecture and code organization

The project is organized around page-level navigation rather than component-driven rendering:

- `Index.html` is the storefront landing page with category navigation and product cards.
- `paginas/auntentificacion/login.html` contains the login form and references `login.js`.
- `paginas/index.controller.js` is a small helper that keeps an array of page routes; it is not a full app controller layer.
- `componentes/` currently contains custom element-style JS files (`navbar.comp.js`, `card.comp.js`), but they are not actively used as a structured component system in the current app.
- `estilos/` is a shared CSS library split across several files (`estilos.css`, `layout.css`, `colors.css`, `btn.css`, `text.css`).

The app relies on direct HTML + JavaScript wiring:
- form validation lives in `paginas/auntentificacion/login.js`
- page navigation is handled with standard `href` links and `window.location`
- assets and CSS are loaded with relative paths from each page folder

## Key conventions to follow

- Keep paths relative to the current HTML file. This project uses many relative URLs like `../../estilos/...` and `../../imgs/...`; changing a page location can easily break static asset links.
- Preserve the current page-based structure. This is not a module-based app or SPA; new features should fit the existing page-per-view pattern instead of introducing framework patterns.
- Respect the existing naming and folder conventions. Note the repository currently contains the folder name `auntentificacion` (misspelled) alongside the intended `autenticacion` path references; do not “fix” unrelated path inconsistencies unless the change is directly required by the task.
- Reuse the existing CSS split across `estilos/` instead of adding a new global stylesheet unless the task specifically requires it.
- Use plain JavaScript and DOM APIs already present in the codebase rather than creating a new build dependency or framework for small UI changes.
- When editing auth or navigation flows, check both the HTML file and the related JS file together; the app is intentionally thin and the behavior is spread across both.

## Current implementation notes

The app has a hardcoded admin credential check in `paginas/auntentificacion/login.js`:

```js
if (email == "admin@dyaboo.com" && password == "admin123") {
    alert("Inicio de sesión exitoso.");
    window.location.href = "../../Index.html";
}
```

This is the actual login behavior used by the project today. If you are changing auth-related logic, preserve the existing flow and verify it manually in the browser.
