const template = document.createElement('div');
template.innerHTML = `
    <style>
        .marked {
            background: yellow;
        }
    </style>
    <h2>Este es un Custome element</h2>
    <p class="marked">ejemplo de un elemento customizable.</p>
`;

class myElement extends HTMLElement {
    // inicializar todo lo que esta en memoria
    constructor() {
        super(); // acceder a los metodos de HTMLElement
        console.log("Soy un web component");

        this.p = document.createElement('p'); // crea una nueva etiqueta en memoria
    }

    connectedCallback() {
        this.p.textContent = "Hola mundo."; // establece contenido en texto
        this.appendChild(this.p); // inserta la etiqueta que estab en memoria al DOM
        this.appendChild(template);
    }
}
customElements.define('my-element', myElement); // define el nombre de la etiqueta que sera usada en el maquetado