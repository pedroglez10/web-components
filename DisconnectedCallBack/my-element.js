class myElement extends HTMLElement {
    // inicializar todo lo que esta en memoria
    constructor() {
        super(); // acceder a los metodos de HTMLElement
        console.log("Constructor - Memoria");
    }

    connectedCallback() { 
        console.log("Hola desde el DOM");
    }

    disconnectedCallback() {
        console.log("Adios del DOM");
    }
}
customElements.define('my-element', myElement); // define el nombre de la etiqueta que sera usada en el maquetado

// elemento a retirar
document.querySelector("my-element").remove();