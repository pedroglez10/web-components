class myElement extends HTMLElement {
    // inicializar todo lo que esta en memoria
    constructor() {
        super(); // acceder a los metodos de HTMLElement
        console.log("Multi Slots");
        this.attachShadow({ mode: "open"}); // se visualizado al inspeccionar
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    <slot></slot>
                </h2>
                <p>Este es un ejemplo de incrustar contenido del lightDOM al shadowDOM</p>
            </section>
            ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        const styles = `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;

        return styles;
    }

    renderTemplate() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); // se envia true para renderizar todos los elementos
    }

    connectedCallback() { 
        this.renderTemplate();
    }
}
customElements.define('my-element', myElement); // define el nombre de la etiqueta que sera usada en el maquetado